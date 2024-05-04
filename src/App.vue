<script setup lang="ts">
import Card from "./components/Card.vue"
import Model from './components/Model.vue'
import Rating from './components/Rating.vue'
import { ref } from 'vue'

const isOpen = ref(false)

// powerShell 设置代理
// $env:http_proxy="http://127.0.0.1:1080"
// $env:https_proxy="http://127.0.0.1:1080"
</script>

<template>
  <div class="bg-#e6e9fb" min-h-100vh>
    <!-- <Card></Card> -->
    <!-- <div flex justify-center>
      <button @click="isOpen = true" w-120px h-54px rounded-8px  flex justify-center items-center bg-blue-4 hover:bg-blue-5 text-white cursor-pointer>open</button>
    </div>
    <Model v-model:is-open="isOpen"></Model> -->

    <div flex justify-center>
      <Rating></Rating>
    </div>



  </div>
</template>
