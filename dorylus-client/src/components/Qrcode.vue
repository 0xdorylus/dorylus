<template>
    <canvas ref="qrcode"></canvas>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, defineProps } from 'vue'
  import QRCode from 'qrcode'
  const props = defineProps({
    value: {
      type: String,
      default: "https://baidu.com"
    }
  })
  
  const qrcode = ref(null)
  
  onMounted(() => {
    render()
  })
  
  const render = () => {
    QRCode.toCanvas(qrcode.value, props.value, (error: any) => {
      if (error) {
        console.log(error)
      }
    })
  }
  </script>
