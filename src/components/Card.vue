<script lang="ts" setup>
import { ref } from 'vue'
import isEmail from 'validator/es/lib/isEmail';


const isCheck = ref(false)
const email = ref('')
const subscript = () => {
    if (!isCheck.value) {
        window.alert('Please check the box first!')
        return
    }
    if (!isEmail(email.value)) {
        window.alert('Email is not valid!')
        return
    }
    window.alert('Success!')
    isCheck.value = false
    email.value = ''

}
</script>



<template>
    <div flex justify-center items-center>
        <div flex-basis-1092px>
            <div class="bg-#fff" py-74px px-111px rounded-16px flex flex-wrap items-center>
                <p class="text-#111827" flex-basis-593px flex-grow-1 text-center font-bold text-40px>Level Up Your
                    Frontend Skills</p>
                <p class="text-#374151 leading-[1.5]" mt-12px flex-grow-1 text-center text-24px>Sign up for our free
                    newsletter to receive weekly coding challenges that will help you improve your frontend development
                    skills.</p>
                <div mt-24px flex-grow-1 flex flex-wrap gap-26px justify-center>
                    <input v-model="email" type="text"
                        class="placeholder:text-#B3B8D8 placeholder:text-24px text-24px text-#111827" flex-basis-599px
                        h-72px box-border px-32px py-16px rounded-8px focus-visible:ring
                        placeholder="Enter your email address">
                    <button @click="subscript" class="text-#fff bg-#111827 hover:bg-#111827cc" text-24px py-16px px-32px
                        rounded-8px cursor-pointer>Subscribe</button>

                </div>
                <div mt-12px flex flex-wrap items-start justify-center gap-16px>
                    <input :checked="isCheck" @change="isCheck = !isCheck" w-20px h-20px rounded-6px m-0 mt-4px
                        cursor-pointer type="checkbox" id="news" check-none>
                    <label for="news" class="text-#111827 leading-[1.5]" flex-basis-778px text-14px cursor-pointer>
                        By checking this box, you agree to receive our weekly newsletter containing coding challenges,
                        tips, and other related content. You may unsubscribe from the newsletter at any time
                    </label>
                </div>
            </div>
        </div>
    </div>

</template>