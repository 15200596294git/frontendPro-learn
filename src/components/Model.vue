<script setup lang="ts">

// import { ref } from 'vue'
// import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
// - headless-ui model用法
// - open btn 宽高 圆角 背景 字体 手指 hover 可访问
// - 最外层 max-width 圆角 背景 弹性 上下padding 左右padding
// - close 定位 关闭按钮
// - 标题 p-x 字体大小 粗细 颜色 行高
// - items flex flex-col gap
//     - items-wrap flex flex-wrap
//         - item 宽高 圆角 背景 字体 hover
//     - 文本wrap flex gap flex-wrap
//         - 文本1 字体
//         - 文本2 字体
// - 按钮组 弹性(宽度太窄换行)
//     - 宽高 边框 圆角 背景 字体 可访问
//     - 宽高 圆角 背景 字体 可访问


import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


const rate = ref(0)
const isOpen = defineModel<boolean>('isOpen')

const onClose = () => {
    isOpen.value = false
}

const selectRate = (n: number) => {
    if (n === rate.value) {
        rate.value = 0
        return
    }
    rate.value = n
}

const submit = () => {
    if (rate.value === 0) {
        window.alert('Please select a rating!')
        return
    }
    window.alert(`Select rating of ${rate.value}`)

    rate.value = 0
    isOpen.value = false
}


</script>
<template>
    <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0"
        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <Dialog @close="onClose">
            <div fixed inset-0>
                <div flex items-center justify-center>
                    <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95" w-920px max-w-920px>
                        <DialogPanel class="bg-#1A1832" rounded-20px relative>
                            <div class="text-#fff" i-icomoon-free-cross w-24px h-24px position-absolute top-18px
                                right-18px @click="onClose" cursor-pointer></div>
                            <div max-w-full pt-71px pb-38px flex flex-col gap-64px>
                                <p class="text-#fff text-26px font-bold leading-[36px] text-center" px-145px>How likely
                                    are you
                                    to recommend FrontendPro to someone you know?</p>
                                <div px-52px flex flex-col gap-14px>
                                    <div flex flex-wrap gap-24px>
                                        <div v-for="n in 10" :key="n"
                                            class="bg-#1A2036 hover:bg-#23204f text-#B1B9D8 text-28px" flex w-60px
                                            h-60px rounded-10px>
                                            <div :class="{
                                                'ring-3px': n === rate
                                            }" @click="selectRate(n)" class="border border-solid border-#2E3650 "
                                                rounded-10px flex-1 text-center flex justify-center items-center
                                                cursor-pointer>{{ n }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-#E7E7E7 text-14px" flex flex-wrap justify-between>
                                        <p>Not likely at all</p>
                                        <p>Extremely Likely</p>
                                    </div>
                                </div>
                                <!-- 底部按钮 -->
                                <div px-52px flex justify-between class="text-16px text-#fff">
                                    <button @click="onClose" class=" bg-#1A1832 hover:bg-#23204f " flex w-144px h-44px
                                        rounded-5px>
                                        <span class="text-#fff border border-solid border-#7A58F4 rounded-5px" flex-1
                                            self-stretch flex justify-center items-center cursor-pointer>Cancel</span>
                                    </button>
                                    <button @click="submit" class="bg-#7A58F4 hover:bg-#7A58F4dd" flex w-144px h-44px
                                        rounded-5px>
                                        <span class="text-#fff" flex-1 self-stretch flex justify-center items-center
                                            cursor-pointer>Submit</span>
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>

            </div>
        </Dialog>
    </TransitionRoot>
</template>
<style>
button {
    padding: 0;
    border: 0;
}
</style>
