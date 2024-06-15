<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 14
  }
})

const iconName = computed(() => `#${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon ${props.name}`
  }
  return "svg-icon"
})

</script>
<template>
  <svg :class="svgClass" :style="{
    width: size + 'px',
    height: size + 'px'
  }">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>
​
<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>