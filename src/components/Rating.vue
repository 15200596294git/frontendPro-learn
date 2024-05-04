<script lang="ts" setup>
// 需求分析
// 默认5颗星
// hover hover到哪颗星，哪颗星和之前的星就会点亮
// click 点击选中，并且更新文字https://icones.js.org/collection/fontisto
// rating定义评分，map表保存评分和文字直接的映射
// 文本根据raging变量 computed
import { computed, ref } from 'vue'
const rating = ref(1)
const clickRagting = (n: number)=>{
    rating.value = n
}
const RATING_TEXT = new Map([
    [1, "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right."],
    [2, "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues."],
    [3, "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve."],
    [4, "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support."],
    [5, "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"],
])
const ratingText = computed(()=> RATING_TEXT.get(rating.value))
const hoverRating = ref(1)
const onMouseover = (n: number)=> {
    hoverRating.value = n
}
const onMouseout = ()=> {
    hoverRating.value = 0
}
const lightsN = computed(()=> {
    if(hoverRating.value !== 0) {
        return hoverRating.value
    }
    return rating.value
})
// i-fontisto-star

</script>
<template>
    <div class="shadow-[10px_10px_4px_#ffffff66] bg-#fff" max-w-775px rounded-16px py-64px flex flex-col gap-32px>
        <p px-158.5px class="text-#0F172A text-24px font-bold leading-[1.5] text-center">How many stars would you give to our
            Online Code Editor?</p>
        <div class="px-113.5px flex flex-wrap gap-32px">
            <div @mouseover="onMouseover(n)" @mouseout="onMouseout" class="text-#E2E8F0 i-fontisto-star w-76px h-76px grow-1 cursor-pointer hover:scale-[1.1]" transition-transform v-for="n in RATING_TEXT.size" @click="clickRagting(n)" :key="n" :class="{
                'text-#FACC15': lightsN >= n,
            }"></div>
        </div>
        <p class="px-64px text-18px text-#374151 leading-[1.5] text-center"> {{ ratingText }}</p>
    </div>
</template>