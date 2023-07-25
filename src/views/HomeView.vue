<script setup>
import { reactive } from 'vue'
import axiosInstance from '@/api/axios'
import { VCardItem, VCardSubtitle } from 'vuetify/lib/components/index.mjs'
import IconSunny from '@/components/icons/IconSunny.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

const userLocal = reactive({
  city: '',
  district: '',
  dong: '',
  isSucces: false,
  address: ''
})

const weather = reactive({
  TMP: '',
  REH: ''
})

const GetWeather = () => {
  console.log(userLocal.city)
  console.log(userLocal.district)
  console.log(userLocal.dong)
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
      if (result.status === 200) {
        userLocal.isSucces = true
        weather.TMP = result.data['tmp']
        weather.REH = result.data['reh']
        userLocal.address = userLocal.city + ' ' + userLocal.district + ' ' + userLocal.dong
        console.log(userLocal.address)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <main class="my-10">
    <v-card class="mx-auto" max-width="500">
      <v-card-item>
        <div class="d-flex">
          <v-text-field
            variant="outlined"
            class="mr-2"
            placeholder="시/도"
            v-bind:value="userLocal.city"
            @input="(event) => (userLocal.city = event.target.value)"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            class="mr-2"
            placeholder="구/시/군"
            v-bind:value="userLocal.district"
            @input="(event) => (userLocal.district = event.target.value)"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            class="mr-2"
            placeholder="동/읍/면"
            v-bind:value="userLocal.dong"
            @input="(event) => (userLocal.dong = event.target.value)"
          ></v-text-field>
          <v-btn @click="GetWeather" class="border" size="x-large">검색</v-btn>
        </div>

        <v-card-title v-if="userLocal.isSucces">오늘의 날씨</v-card-title>
        <v-card-subtitle class="pr-2">{{ userLocal.address }}</v-card-subtitle>
      </v-card-item>
      <v-card-text class="py-0 d-flex justify-center" v-if="userLocal.isSucces">
        <div class="text-h2">{{ weather.TMP }}&deg;</div>
        <div class="flex flex-column">
          <IconSunny />
          <p class="text-center">맑음</p>
        </div>
      </v-card-text>

      <div class="d-flex justify-center" v-if="userLocal.isSucces">
        <v-list-item>
          <v-list-item-subtitle>습도: {{ weather.REH }}%</v-list-item-subtitle>
        </v-list-item>
      </div>
    </v-card>
  </main>
</template>
