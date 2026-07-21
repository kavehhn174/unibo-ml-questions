import { reactive, watch } from 'vue'

const STORAGE_KEY = 'mldm-quiz-state-v1'

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    console.warn('Failed to parse saved quiz state', e)
    return null
  }
}

const saved = loadState()

const state = reactive({
  // questionId -> array of selected option ids (pending, before a multi-select is submitted)
  selections: saved?.selections ?? {},
  // questionId -> boolean, whether the solution panel is currently visible
  revealed: saved?.revealed ?? {},
  // questionId -> boolean, whether the question has ever been answered (locks in correctness)
  answered: saved?.answered ?? {},
  // questionId -> boolean, marked / flagged by the user
  marked: saved?.marked ?? {},
  // questionId -> integer 1-5
  ratings: saved?.ratings ?? {},
  // 'light' | 'dark'
  theme: saved?.theme ?? 'light'
})

watch(
  state,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)

function toggleOption(question, optionId) {
  const qid = question.id
  if (state.answered[qid] && !question.multiple) return

  if (question.multiple) {
    const current = state.selections[qid] ? [...state.selections[qid]] : []
    const idx = current.indexOf(optionId)
    if (idx >= 0) current.splice(idx, 1)
    else current.push(optionId)
    state.selections[qid] = current
  } else {
    state.selections[qid] = [optionId]
    state.answered[qid] = true
    state.revealed[qid] = true
  }
}

function submitMultiple(qid) {
  if (!state.selections[qid] || state.selections[qid].length === 0) return
  state.answered[qid] = true
  state.revealed[qid] = true
}

function hideAnswer(qid) {
  state.revealed[qid] = false
}

function showAnswer(qid) {
  state.revealed[qid] = true
}

function resetQuestion(qid) {
  delete state.selections[qid]
  delete state.revealed[qid]
  delete state.answered[qid]
}

function toggleMark(qid) {
  state.marked[qid] = !state.marked[qid]
}

function setRating(qid, value) {
  state.ratings[qid] = value
}

function isOptionSelected(qid, optionId) {
  return !!state.selections[qid]?.includes(optionId)
}

function isCorrect(question) {
  const qid = question.id
  const selected = state.selections[qid] ?? []
  if (selected.length === 0) return false
  const correct = question.correct
  if (selected.length !== correct.length) return false
  return correct.every((c) => selected.includes(c))
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark'
}

function resetAllAnswers() {
  Object.keys(state.selections).forEach((k) => delete state.selections[k])
  Object.keys(state.revealed).forEach((k) => delete state.revealed[k])
  Object.keys(state.answered).forEach((k) => delete state.answered[k])
}

export function useQuizState() {
  return {
    state,
    toggleOption,
    submitMultiple,
    hideAnswer,
    showAnswer,
    resetQuestion,
    toggleMark,
    setRating,
    isOptionSelected,
    isCorrect,
    toggleTheme,
    resetAllAnswers
  }
}
