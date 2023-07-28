<script setup>
import IconCloud from '@/components/icons/IconCloud.vue'
import IconPartlyCloud from '@/components/icons/IconPartlyCloud.vue'
import IconSunny from '@/components/icons/IconSunny.vue'

defineProps({
  title: String
})
</script>
<template>
  <IconCloud v-if="title === '흐림'"></IconCloud>
  <IconSunny v-if="title === '맑음'"></IconSunny>
  <IconPartlyCloud v-if="title === '구름 많음'"></IconPartlyCloud>
</template>
