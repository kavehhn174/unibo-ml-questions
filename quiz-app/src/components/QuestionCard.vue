<script setup>
import { computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Checkbox from 'primevue/checkbox'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import Message from 'primevue/message'
import MathText from './MathText.vue'
import { useQuizState } from '../composables/useQuizState.js'

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const {
  state,
  toggleOption,
  submitMultiple,
  hideAnswer,
  showAnswer,
  resetQuestion,
  toggleMark,
  setRating,
  isCorrect
} = useQuizState()

const qid = props.question.id

const revealed = computed(() => !!state.revealed[qid])
const answered = computed(() => !!state.answered[qid])
const marked = computed(() => !!state.marked[qid])
const correct = computed(() => isCorrect(props.question))

const ratingValue = computed({
  get: () => state.ratings[qid] ?? 0,
  set: (v) => setRating(qid, v)
})

const selectedIds = computed(() => state.selections[qid] ?? [])
const hasSelection = computed(() => selectedIds.value.length > 0)
const singleSelectionValue = computed(() => selectedIds.value[0] ?? null)

function selectOption(optionId) {
  if (answered.value) return
  toggleOption(props.question, optionId)
}

function optionClasses(opt) {
  const isSelected = selectedIds.value.includes(opt.id)
  const isCorrectOpt = props.question.correct.includes(opt.id)
  return {
    'qc-option': true,
    'qc-option-selected': isSelected && !revealed.value,
    'qc-option-correct': revealed.value && isCorrectOpt,
    'qc-option-wrong': revealed.value && isSelected && !isCorrectOpt,
    'qc-option-locked': answered.value
  }
}

function isCorrectOption(id) {
  return props.question.correct.includes(id)
}

function isWrongSelected(id) {
  return selectedIds.value.includes(id) && !props.question.correct.includes(id)
}

function onToggleMark() {
  toggleMark(qid)
}

function onSubmitMultiple() {
  submitMultiple(qid)
}

function onHide() {
  hideAnswer(qid)
}

function onShow() {
  showAnswer(qid)
}

function onReset() {
  resetQuestion(qid)
}
</script>

<template>
  <Card class="question-card" :class="{ 'question-card-marked': marked }">
    <template #title>
      <div class="qc-header">
        <div class="qc-header-left">
          <span class="qc-index">Q{{ question.id }}</span>
          <Tag :value="question.category" severity="secondary" />
        </div>
        <div class="qc-header-right">
          <Rating v-model="ratingValue" :stars="5" class="qc-rating" />
          <Button
            :icon="marked ? 'pi pi-bookmark-fill' : 'pi pi-bookmark'"
            :severity="marked ? 'warn' : 'secondary'"
            text
            rounded
            v-tooltip.top="marked ? 'Unmark question' : 'Mark as important'"
            @click="onToggleMark"
          />
        </div>
      </div>
    </template>

    <template #content>
      <MathText :text="question.question" class="qc-question" />

      <div class="qc-options">
        <div
          v-for="opt in question.options"
          :key="opt.id"
          :class="optionClasses(opt)"
          @click="selectOption(opt.id)"
        >
          <RadioButton
            v-if="!question.multiple"
            class="qc-option-input"
            :modelValue="singleSelectionValue"
            :value="opt.id"
            :disabled="answered"
          />
          <Checkbox
            v-else
            class="qc-option-input"
            :modelValue="selectedIds"
            :value="opt.id"
            :disabled="answered"
          />
          <MathText :text="opt.text" class="qc-option-text" />
          <i v-if="revealed && isCorrectOption(opt.id)" class="pi pi-check-circle qc-icon qc-icon-correct" />
          <i v-else-if="revealed && isWrongSelected(opt.id)" class="pi pi-times-circle qc-icon qc-icon-wrong" />
        </div>
      </div>

      <div v-if="question.multiple && !answered" class="qc-actions">
        <Button label="Check Answer" icon="pi pi-check" :disabled="!hasSelection" @click="onSubmitMultiple" />
      </div>

      <transition name="fade-slide">
        <div v-if="revealed" class="qc-solution">
          <Message :severity="correct ? 'success' : 'error'" :closable="false">
            <span class="qc-result-text">
              <i :class="correct ? 'pi pi-check' : 'pi pi-times'"></i>
              {{ correct ? 'Correct!' : 'Not quite — review the explanation below.' }}
            </span>
          </Message>
          <div class="qc-explanation">
            <h4><i class="pi pi-lightbulb"></i> Explanation</h4>
            <MathText :text="question.explanation" />
          </div>
        </div>
      </transition>

      <div class="qc-footer">
        <Button
          v-if="revealed"
          label="Hide Answer"
          icon="pi pi-eye-slash"
          text
          size="small"
          @click="onHide"
        />
        <Button
          v-else-if="answered"
          label="Show Answer"
          icon="pi pi-eye"
          text
          size="small"
          @click="onShow"
        />
        <Button
          v-if="answered"
          label="Try Again"
          icon="pi pi-refresh"
          text
          severity="secondary"
          size="small"
          @click="onReset"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.question-card {
  border-radius: 16px;
  border: 1px solid var(--app-shell-border);
  box-shadow: var(--app-shadow);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.question-card-marked {
  border-color: color-mix(in srgb, var(--p-warn-500) 55%, transparent);
}

.qc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.qc-header-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.qc-index {
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--app-text-muted);
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

.qc-header-right {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.qc-rating :deep(.p-rating-icon) {
  font-size: 0.95rem;
}

.qc-question {
  font-size: 1.02rem;
  line-height: 1.55;
  font-weight: 500;
  margin-bottom: 1.1rem;
}

.qc-options {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.qc-option {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  border: 1px solid var(--app-shell-border);
  background: var(--app-bg-elevated);
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease, transform 0.1s ease;
}

.qc-option:hover {
  border-color: var(--p-primary-color);
}

.qc-option-selected {
  border-color: var(--p-primary-color);
  background: color-mix(in srgb, var(--p-primary-color) 8%, var(--app-bg-elevated));
}

.qc-option-correct {
  border-color: var(--correct-border);
  background: var(--correct-bg);
}

.qc-option-wrong {
  border-color: var(--incorrect-border);
  background: var(--incorrect-bg);
}

.qc-option-locked {
  cursor: default;
}

.qc-option-input {
  margin-top: 0.1rem;
  pointer-events: none;
  flex-shrink: 0;
}

.qc-option-text {
  flex: 1;
  line-height: 1.45;
}

.qc-icon {
  font-size: 1.05rem;
  margin-left: auto;
  flex-shrink: 0;
}

.qc-icon-correct {
  color: var(--correct-text);
}

.qc-icon-wrong {
  color: var(--incorrect-text);
}

.qc-actions {
  margin-top: 0.9rem;
}

.qc-solution {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.qc-result-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.qc-explanation {
  padding: 0.9rem 1rem;
  border-radius: 10px;
  background: color-mix(in srgb, var(--p-primary-color) 6%, var(--app-bg-elevated));
  border: 1px solid color-mix(in srgb, var(--p-primary-color) 18%, var(--app-shell-border));
  line-height: 1.6;
}

.qc-explanation h4 {
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.92rem;
  color: var(--p-primary-color);
}

.qc-footer {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.75rem;
}
</style>
