<template>
  <div class="vazirmatn bg-[#242947] text-[#fff] py-2 px-5">
    <h5>سوالات متداول</h5>
    <div>
        <div @click="questionClicked(i)" class="my-2 p-2 border-solid border border-[#fff] rounded hover:cursor-pointer" v-for="(question,i) in questions" :key="i">
            <div @click.self="toggleQuestion" class="flex items-center justify-between my-2">
                <h4 :class="{'text-[#EEB60E]' : question.visible}">{{ question.title }}</h4>
                <img class="w-5" src="../assets/imgs/icons8-arrow-50.png" :class="{'transform rotate-180 ' : question.visible}">
            </div>
            <p class="block" v-if="question.visible" :class="{'!hidden' : !question.visible}">{{ question.des }}</p>
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
        toggleQuestion(i){
            this.$emit('toggleQuestion',i)
        }
    }
}
</script>

<style>

</style>