<script setup>
import { reactive } from 'vue'
import axiosInstance from '@/api/axios'

const userLocal = reactive({
  city: '',
  district: '',
  dong: ''
})

const GetWeather = () => {
  axiosInstance
    .get('/weather', {
      headers: {
        'Content-Type': 'text/plain'
      },
      params: {
        city: userLocal.city,
        district: userLocal.district,
        dong: userLocal.dong
      }
    })
    .then((result) => {
      console.log(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <main>
    <h1>HOME</h1>
    <v-btn @click="GetWeather">요청</v-btn>
  </main>
</template>
