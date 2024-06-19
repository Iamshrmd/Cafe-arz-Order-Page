<template>
  <div class="vazirmatn bg-[#242947] text-[#fff] py-2 px-5" :class="{'!bg-[#E4EAF3] text-[#000]' : !darkMode}">
    <h5>سوالات متداول</h5>
    <div>
        <div @click="toggleQuestion(i)" class="my-2 p-2 duration-1000 border-solid border border-[#fff] rounded hover:cursor-pointer" :class="{'border-[#000]' : !darkMode}" v-for="(question,i) in questions" :key="i">
            <div @click.self="toggleQuestion" class="flex items-center justify-between my-2">
                <h4 :class="{'text-[#EEB60E]' : question.visible}">{{ question.title }}</h4>
                <img class="w-5" src="../assets/imgs/icons8-arrow-50.png" :class="{'transform rotate-180 ' : question.visible, 'hidden' : !darkMode}">
                <img class="w-5" src="../assets/imgs/icons8-arrow-50-b.png" :class="{'transform rotate-180 ' : question.visible, 'hidden' : darkMode}">
            </div>
            <p class="max-h-0 overflow-hidden smooth" :class="{'max-h-fit' : question.visible}">{{ question.des }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['darkMode','questions'],
    methods: {
        toggleQuestion(i){
            this.$emit('toggleQuestion',i)
        }
    }
}
</script>

<style>
    .smooth{
        transition: m-h-fit 0.2s ease-out
    }
</style>