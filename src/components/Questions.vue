<template>
  <div class="vazirmatn bg-[#242947] text-[#fff] py-2 px-5">
    <h5>سوالات متداول</h5>
    <div>
        <div @click="questionClicked(i)" class="my-2 p-2 border-solid border border-[#fff] rounded" v-for="(question,i) in questions" :key="i">
            <h4 :class="{'text-[#EEB60E]' : question.visible}">{{ question.title }}</h4>
            <p v-if="question.visible">{{ question.des }}</p>
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
        }
    }
}
</script>

<style>

</style>