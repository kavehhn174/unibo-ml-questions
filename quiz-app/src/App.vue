<script setup>
import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import QuestionList from './components/QuestionList.vue'
import { useQuizState } from './composables/useQuizState.js'
import questionsData from './data/questions.json'

const ProgressSyncDialog = defineAsyncComponent(() => import('./components/ProgressSyncDialog.vue'))

const { state, toggleTheme, resetAllAnswers } = useQuizState()
const syncOpen = ref(false)

const questions = questionsData

const markedQuestions = computed(() => questions.filter((q) => state.marked[q.id]))

const answeredCount = computed(() => Object.values(state.answered).filter(Boolean).length)
const correctCount = computed(() => {
  return questions.filter((q) => {
    if (!state.answered[q.id]) return false
    const selected = state.selections[q.id] ?? []
    if (selected.length !== q.correct.length) return false
    return q.correct.every((c) => selected.includes(c))
  }).length
})
const markedCount = computed(() => markedQuestions.value.length)

function applyThemeClass(theme) {
  document.documentElement.classList.toggle('app-dark', theme === 'dark')
}

onMounted(() => applyThemeClass(state.theme))
watch(() => state.theme, applyThemeClass)

function onResetProgress() {
  if (window.confirm('Clear all your selected answers? Marks and ratings will be kept.')) {
    resetAllAnswers()
  }
}
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="app-header-inner">
        <div class="app-brand">
          <div class="app-brand-icon">
            <i class="pi pi-graduation-cap"></i>
          </div>
          <div>
            <h1>MLDM Exam Quiz</h1>
            <p>Machine Learning &amp; Data Mining — past exam practice</p>
          </div>
        </div>

        <div class="app-header-actions">
          <Button
            icon="pi pi-sync"
            rounded
            text
            severity="secondary"
            v-tooltip.bottom="'Sync progress between devices'"
            @click="syncOpen = true"
          />
          <Button
            :icon="state.theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
            rounded
            text
            severity="secondary"
            v-tooltip.bottom="state.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          />
        </div>
      </div>

      <div class="app-stats">
        <div class="stat-chip">
          <span class="stat-value">{{ questions.length }}</span>
          <span class="stat-label">Questions</span>
        </div>
        <div class="stat-chip">
          <span class="stat-value">{{ answeredCount }}</span>
          <span class="stat-label">Answered</span>
        </div>
        <div class="stat-chip stat-chip-success">
          <span class="stat-value">{{ correctCount }}</span>
          <span class="stat-label">Correct</span>
        </div>
        <div class="stat-chip stat-chip-warn">
          <span class="stat-value">{{ markedCount }}</span>
          <span class="stat-label">Marked</span>
        </div>
        <Button
          label="Sync"
          icon="pi pi-sync"
          text
          size="small"
          severity="secondary"
          @click="syncOpen = true"
        />
        <Button
          label="Reset progress"
          icon="pi pi-refresh"
          text
          size="small"
          severity="secondary"
          class="reset-btn"
          @click="onResetProgress"
        />
      </div>
    </header>

    <ProgressSyncDialog v-model:visible="syncOpen" />

    <main class="app-main">
      <Tabs value="all">
        <TabList>
          <Tab value="all"><i class="pi pi-list"></i> All Questions</Tab>
          <Tab value="marked">
            <i class="pi pi-bookmark"></i> Marked
            <span v-if="markedCount" class="tab-badge">{{ markedCount }}</span>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="all">
            <QuestionList
              :questions="questions"
              empty-icon="pi pi-inbox"
              empty-title="No questions match your filters"
              empty-hint="Try clearing the search or category filter."
            />
          </TabPanel>

          <TabPanel value="marked">
            <QuestionList
              :questions="markedQuestions"
              empty-icon="pi pi-bookmark"
              empty-title="No marked questions yet"
              empty-hint="Click the bookmark icon on any question to flag it as important or as one you got wrong, and it will show up here."
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>

    <footer class="app-footer">
      <p>Built for exam practice · progress is saved locally · use Sync to transfer between devices</p>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--app-bg-elevated);
  border-bottom: 1px solid var(--app-shell-border);
  padding: 1.1rem 1.5rem 0.9rem;
  backdrop-filter: blur(8px);
}

.app-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
}

.app-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.app-brand-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--p-primary-400), var(--p-primary-600));
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.app-brand h1 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.app-brand p {
  margin: 0.1rem 0 0;
  font-size: 0.82rem;
  color: var(--app-text-muted);
}

.app-stats {
  max-width: 1080px;
  margin: 0.9rem auto 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.stat-chip {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: var(--app-bg);
  border: 1px solid var(--app-shell-border);
  font-size: 0.82rem;
}

.stat-value {
  font-weight: 700;
  font-size: 0.95rem;
}

.stat-label {
  color: var(--app-text-muted);
}

.stat-chip-success .stat-value {
  color: var(--correct-text);
}

.stat-chip-warn .stat-value {
  color: #d97706;
}

.reset-btn {
  margin-left: auto;
}

.app-main {
  flex: 1;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem;
}

.tab-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.35rem;
  height: 1.35rem;
  padding: 0 0.4rem;
  border-radius: 999px;
  background: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
  font-size: 0.72rem;
  font-weight: 700;
  margin-left: 0.3rem;
}

.app-footer {
  text-align: center;
  padding: 1.5rem;
  color: var(--app-text-muted);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .app-header-inner {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}
</style>
