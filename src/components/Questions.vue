<template>
  <div class="vazirmatn px-3">
    <h5>سوالات متداول</h5>
    <div>
        <div @click="questionClicked(i)" class="my-2 p-2 border-solid border-2 border-[#000]" v-for="(question,i) in questions" :key="i">
            <h4>{{ question.title }}</h4>
            <p class="hidden">{{ question.des }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['questions'],
    methods: {
        questionClicked(){
            this.$emit('questionClicked',i)
        }
    }
}
</script>

<style>

</style>