<template>
  <div class="vazirmatn px-3 bg-[#1D213F] text-[#fff]">
    <span class="font-bold text-xl"> سوالات متداول</span>
    <div>
        <div @click="questionClicked(i)" class="my-2 p-2 border-solid border border-[#fff] rounded hover:cursor-pointer" v-for="(question,i) in questions" :key="i">
            <div class="flex items-center justify-between">
                <h4 class="my-2 duration-400" :class="{'text-[#FEBC00]' : question.visible}">{{ question.title }}</h4>
                <img @click.self="toggleQuestionClicked(i)" class="w-5" src="../assets/imgs/icons8-arrow-50.png" :class="{'transform rotate-180' : question.visible}">
            </div>
            <p class="duration-400" :class="{'opacity-100' : question.visible}" v-if="question.visible">{{ question.des }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['questions'],
    methods: {
        questionClicked(i){
            this.$emit('questionClicked',i)
        },
        toggleQuestionClicked(i){
            this.$emit('togglequestionClicked',i)
        }
    }
}
</script>

<style>

</style>