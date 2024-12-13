<script setup lang="ts">
import { defineProps } from 'vue'
interface Props {
  bg?: string
}
const props = defineProps<Props>()

const bgClass = props.bg || 'bg-gray-100'
</script>
<template>
  <div :class="[bgClass, 'p-6 rounded-lg shadow-md']">
    <slot></slot>
  </div>
</template>

<style scoped></style>
