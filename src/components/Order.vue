<template>
  <section class="bg-[#1D213F] text-[#fff] flex flex-col gap-y-3 p-2 relative vazirmatn" :class="{'!bg-[#E4EAF3] text-[#000]' : !darkMode}">
    <div>
        <span  class="font-bold text-xl">ثبت سفارش جدید</span>
        <div class="flex mt-2">
            <li class="list-none text-sm">
                <a href="#" class="text-[#15A4D6]">خانه</a>
            </li>
            <li class="list-none before:content-['/'] text-[#6C757D] px-2 text-sm">
                <a href="#" class="text-[#15A4D6] px-1">لیست سفارش ها</a>
            </li>
            <li class="list-none before:content-['/'] text-[#6C757D] px-2 text-sm">
                <a href="#" class="px-1">ثبت سفارش جدید</a>
            </li>
        </div>
    </div>
    <div class="flex justify-between">
        <div class="bg-[#293457] w-half flex flex-col md:flex-row gap-y-3 py-3 rounded-xl">
            <div class="flex flex-col md:flex-row items-center justify-around flex-1">
                <img class="w-3/12 md:w-3/12" src="../assets/imgs/btc.svg">
                <h3 class="xs:text-xs md:text-base" :class="{'text-[#fff]' : !darkMode}">معامله ارز دیجیتال</h3>
            </div>
            <div class="flex items-center justify-around flex-1">
                <a href="#" class="bg-[#18E52D] w-5/12 text-center rounded-full py-1 text-sm md:text-base" :class="{'text-[#fff]' : !darkMode}">خرید</a>
                <a href="#" class="bg-[#FF3A3A] w-5/12 text-center rounded-full py-1 text-sm md:text-base" :class="{'text-[#fff]' : !darkMode}">فروش</a>
            </div>
        </div>

        <div class="bg-[#293457] w-half flex flex-col md:flex-row gap-y-3 py-3 rounded-xl">
            <div class="flex flex-col md:flex-row items-center justify-around flex-1">
                <img class="w-3/12 md:w-3/12" src="../assets/imgs/cashincomes.svg" alt="">
                <h3  class="xs:text-xs md:text-base" :class="{'text-[#fff]' : !darkMode}">فروش ارز به ما</h3>
            </div>
            <div  class="flex items-center justify-around flex-1 md:justify-end px-2">
                <a class="bg-[#18E52D] w-2/4 text-center rounded-full py-1 px-2 md:w-3/6 text-sm md:text-base" href="#" :class="{'text-[#fff]' : !darkMode}">ثبت سفارش</a>
            </div>
        </div>
    </div>
    <div>
        <h4 class="font-bold text-lg">دسته بندی خدمات کافه ارز</h4>
    </div>
    <div>
        <div class="flex gap-x-3 flex-1">
            <div class="flex gap-y-2 flex-col md:flex-1 w-full md:w-1/2">
                <div @mouseover="showOrderOption(service.title)" v-for="service in services" :key="service" class="dark-bgi flex justify-start items-center gap-x-2 px-2 py-1 rounded hover:bg-[#EEB60E] hover:cursor-pointer">
                    <img class="w-8" :src="`src/assets/img icons/${service.img}`">
                    <h6>{{ service.des }}</h6>
                </div>
            </div>
            <div class="hidden md:flex w-1/2">
                <div class="md:flex md:flex-1 md:flex-col gap-y-2">
                <div class="bg-[#2E3456] gap-x-2 px-2 py-1 rounded flex" v-for="item in this.filteredItem[0].items" :key="item">
                    <img class="w-8 h-8" :src="`src/assets/img items/${filteredId}/${item.img}`">
                    <h5 class="font-medium" :class="{'text-[#fff]' : !darkMode}">{{item.title}}</h5>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div  v-show="showXsitems" class="light-dark w-full h-full absolute top-0">
            <div class="h- fixed bottom-3 right-0 w-full bg-[#1D213F] py-2 px-3 z-10 opacity-100 flex flex-col gap-y-3">
                <div class="flex items-center justify-between">
                    <h5>لطفا سرویس مورد نظر را انتخاب کنید</h5>
                    <img @click="exitItems" src="../assets/imgs/icons8-exit-50.png" class="w-6">
                </div>
                <div class="flex flex-col gap-y-2 !opacity-100">
                    <div class="bg-[#2E3456] gap-x-2 px-2 py-1 rounded flex border-[#fff] items-center border-solid border-px rounded !opacity-100 justify-between" v-for="item in this.filteredItem[0].items" :key="item">
                        <div class="flex items-center gap-x-3">
                            <img class="w-8" :src="`src/assets/img items/${filteredId}/${item.img}`">
                            <h5 class="font-medium" :class="{'text-[#fff]' : !darkMode}">{{item.title}}</h5>
                        </div>
                        <img class="w-6 h-6" src="../assets/imgs/icons8-arrow-30.png" alt="">
                    </div>
                </div>
            </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ['filteredItem', 'filteredId', 'darkMode', 'services'],
    methods:{
        showOrderOption(name) {
            this.$emit('showItem',name)
            if (window.innerWidth < 768 ) {
                this.exitItems();
            }
        },
        exitItems() {
            this.showXsitems = !this.showXsitems
        }
    },
    data() {
        return {
            showXsitems:false,
        }
    }
}
</script>

<style>
    .dark-bgi {
        background: linear-gradient(135deg, rgb(46,51,83) 10%, rgb(32,39,75) 50%);
    }
    .light-dark{
        background-color: rgba(0, 0, 0, 0.445);
    }
    .vazirmatn {
        font-family: "Vazirmatn", sans-serif;
    }
    .dark-bgi:hover {
     background: #eeb60e;
     color: #000;
    }
    .w-half{
        width: 49%;
    }
    .light-bgi{
        background-color: #E2E9F7;
    }
    </style>