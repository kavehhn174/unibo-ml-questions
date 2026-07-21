<script setup>
import { computed } from 'vue'
import { renderMathText } from '../composables/renderMath.js'

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

const html = computed(() => renderMathText(props.text))
</script>

<template>
  <div class="math-text" v-html="html"></div>
</template>
