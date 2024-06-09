<script setup lang="ts">
import Card from "./components/Card.vue"
import Model from './components/Model.vue'
import Rating from './components/Rating.vue'

import { ref } from 'vue'
import { routes } from '@/route/index'
console.log("🚀 ~ routes:", routes)

const isOpen = ref(false)

// powerShell 设置代理
// $env:http_proxy="http://127.0.0.1:1080"
// $env:https_proxy="http://127.0.0.1:1080"
</script>

<template>
  <div class="bg-#e6e9fb h-100% flex">
    <!-- <Card></Card> -->
    <!-- <div flex justify-center>
      <button @click="isOpen = true" w-120px h-54px rounded-8px  flex justify-center items-center bg-blue-4 hover:bg-blue-5 text-white cursor-pointer>open</button>
    </div>
    <Model v-model:is-open="isOpen"></Model> -->

    <!-- <div flex justify-center>
      <Rating></Rating>
    </div> -->

    <aside class="flex-basis-240px overflow-auto bg-white">
      <div class=" p-24px overflow-auto flex flex-col gap-12px">
        <RouterLink class="py-12px px-24px" v-for="r in routes" :key="r.path" :to="r.path">{{ r.path }}</RouterLink>
      </div>
    </aside>
    <RouterView class="flex-1 overflow-auto"></RouterView>


  </div>
</template>
