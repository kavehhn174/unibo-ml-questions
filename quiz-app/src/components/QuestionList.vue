<script setup>
import { computed, ref } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Select from 'primevue/select'
import QuestionCard from './QuestionCard.vue'
import { useQuizState } from '../composables/useQuizState.js'

const props = defineProps({
  questions: {
    type: Array,
    required: true
  },
  emptyIcon: {
    type: String,
    default: 'pi pi-inbox'
  },
  emptyTitle: {
    type: String,
    default: 'No questions here'
  },
  emptyHint: {
    type: String,
    default: ''
  }
})

const { state } = useQuizState()

const search = ref('')
const category = ref(null)
const sortBy = ref('id')

const sortOptions = [
  { label: 'Question order', value: 'id' },
  { label: 'Highest rated first', value: 'rating-desc' },
  { label: 'Unanswered first', value: 'unanswered' }
]

const categoryOptions = computed(() => {
  const set = new Set(props.questions.map((q) => q.category))
  return [...set].sort().map((c) => ({ label: c, value: c }))
})

const filtered = computed(() => {
  let list = props.questions

  if (search.value.trim()) {
    const term = search.value.trim().toLowerCase()
    list = list.filter(
      (q) =>
        q.question.toLowerCase().includes(term) ||
        q.category.toLowerCase().includes(term) ||
        q.options.some((o) => o.text.toLowerCase().includes(term))
    )
  }

  if (category.value) {
    list = list.filter((q) => q.category === category.value)
  }

  const sorted = [...list]
  if (sortBy.value === 'rating-desc') {
    sorted.sort((a, b) => (state.ratings[b.id] ?? 0) - (state.ratings[a.id] ?? 0))
  } else if (sortBy.value === 'unanswered') {
    sorted.sort((a, b) => {
      const aAnswered = state.answered[a.id] ? 1 : 0
      const bAnswered = state.answered[b.id] ? 1 : 0
      return aAnswered - bAnswered
    })
  } else {
    sorted.sort((a, b) => a.id - b.id)
  }

  return sorted
})

function clearFilters() {
  search.value = ''
  category.value = null
}
</script>

<template>
  <div class="question-list">
    <div class="ql-toolbar">
      <IconField class="ql-search">
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" placeholder="Search questions or options..." class="ql-search-input" />
      </IconField>

      <Select
        v-model="category"
        :options="categoryOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="All categories"
        showClear
        class="ql-category"
      />

      <Select
        v-model="sortBy"
        :options="sortOptions"
        optionLabel="label"
        optionValue="value"
        class="ql-sort"
      />

      <button
        v-if="search || category"
        class="ql-clear"
        type="button"
        @click="clearFilters"
      >
        <i class="pi pi-filter-slash"></i> Clear
      </button>
    </div>

    <div class="ql-count">
      Showing {{ filtered.length }} of {{ props.questions.length }} question{{ props.questions.length === 1 ? '' : 's' }}
    </div>

    <transition-group name="list" tag="div" class="ql-items">
      <QuestionCard v-for="q in filtered" :key="q.id" :question="q" />
    </transition-group>

    <div v-if="filtered.length === 0" class="ql-empty">
      <i :class="emptyIcon"></i>
      <h3>{{ emptyTitle }}</h3>
      <p v-if="emptyHint">{{ emptyHint }}</p>
    </div>
  </div>
</template>

<style scoped>
.question-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ql-toolbar {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  align-items: center;
}

.ql-search {
  flex: 1 1 260px;
  min-width: 220px;
}

.ql-search-input {
  width: 100%;
}

.ql-category {
  width: 220px;
}

.ql-sort {
  width: 200px;
}

.ql-clear {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid var(--app-shell-border);
  background: transparent;
  color: var(--app-text-muted);
  border-radius: 8px;
  padding: 0 0.75rem;
  height: 2.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.ql-clear:hover {
  color: var(--p-primary-color);
  border-color: var(--p-primary-color);
}

.ql-count {
  font-size: 0.85rem;
  color: var(--app-text-muted);
}

.ql-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ql-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 4rem 1rem;
  color: var(--app-text-muted);
  text-align: center;
}

.ql-empty i {
  font-size: 2.4rem;
  opacity: 0.6;
}

.ql-empty h3 {
  margin: 0;
  color: var(--p-text-color);
}

.ql-empty p {
  margin: 0;
  max-width: 320px;
}
</style>
