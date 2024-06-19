<script>
  import HeaderPage from "./components/Header.vue";
  import OrderPage from "./components/Order.vue";
  import QuestionsPage from "./components/Questions.vue";
  export default {
    components: {HeaderPage , OrderPage , QuestionsPage},
    data() {
      return{
        orders: [
          {
            id:'paypal',
            items:[
              {
                img:'paypal-final-buy.svg',
                title:'خرید با پی پال'
              },
              {
                img:"paypal-final-charge.svg",
                title:'شارژ حساب پی پال'
              },
              {
                img:"paypal-final-create.svg",
                title:'افتتاح حساب پی پال'
              },
              {
                img:"paypal-final-safty.svg",
                title:'کارت ویزا مستر جهت وریفای حساب پی پال'
              },
              {
                img:"paypal-final-wallet.svg",
                title:'فروش پی پال به ما'
              },
            ]
          },
          {
            id:'perfect',
            items:[
              {
                img:'perfect_buy.svg',
                title:'افتتاح حساب پرفکت مانی'
              },
              {
                img:"perfect_create.svg",
                title:'شارژ حساب پرفکت مانی'
              },
              {
                img:"perfect_charge.svg",
                title:'خرید با پرفکت مانی'
              },
              {
                img:"perfect_voucher.svg",
                title:'خرید ووچر پرفکت مانی'
              },
              {
                img:"perfect_wallet.svg",
                title:'فروش پرفکت مانی به ما'
              },
              {
                img:"perfect_wallet.svg",
                title:'فروش ووچر پرفکت مانی به ما'
              },
            ]
          },
          {
            id:'visa',
            items:[
              {
                img:'VISA_MASTER.svg',
                title:'خرید با ویزا و مسترکارت'
              },
              {
                img:"american-express.svg",
                title:'گیفت کارت ویزا / مستر'
              },
              {
                img:"visamaster-gift.svg",
                title:'گیفت کارت آمریکن اکسپرس'
              },
              {
                img:"visamaster-virtual.svg",
                title:'کارت مجازی ویزا / مستر  (دلاری)'
              },
              {
                img:"Wise۲۵۶.png",
                title:'شارژ حساب وایز Wise'
              },
              {
                img:"Wise۲۵۶.png",
                title:'فروش وایز به ما'
              },
            ]
          },
          {
            id:'BuyUT',
            items:[
              {
                img:'BuyUT.png',
                title:'شارژ حساب یوتوپیا (UUSD)'
              },
              {
                img:"BuyUT.png",
                title:'خرید ووچر یوتوپیا (UUSD)'
              },
              {
                img:"BuyUT.png",
                title:'فروش دلار یوتوبیا (UUSD)'
              },
              {
                img:"BuyUT.png",
                title:'فروش ووچر یوتوبیا (UUSD)'
              }
            ]
          },
          {
            id:'giftcard',
            items:[
              {
                img:'amazoon.svg',
                title:'گیفت کارت آمازون'
              },
              {
                img:'ituns.svg',
                title:'گیفت کارت آیتونز'
              },
              {
                img:'playstation.svg',
                title:'گیفت کارت پلی استیشن'
              },
              {
                img:'razer.svg',
                title:'گیفت کارت ریزر گلد razer gold'
              },
              {
                img:'spotify.svg',
                title:'گیفت کارت اسپاتیفای'
              },
              {
                img:'steam.svg',
                title:'گیفت کارت استیم'
              },
              {
                img:'xbox.svg',
                title:'گیفت کارت ایکس باکس'
              }
            ]
          }
        ],
        filteredItem:[
        {
            id:'paypal',
            items:[
              {
                img:'paypal-final-buy.svg',
                title:'خرید با پی پال'
              },
              {
                img:"paypal-final-charge.svg",
                title:'شارژ حساب پی پال'
              },
              {
                img:"paypal-final-create.svg",
                title:'افتتاح حساب پی پال'
              },
              {
                img:"paypal-final-safty.svg",
                title:'کارت ویزا مستر جهت وریفای حساب پی پال'
              },
              {
                img:"paypal-final-wallet.svg",
                title:'فروش پی پال به ما'
              },
            ]
          }
          ],
          darkMode:true ,
          questions:[
            {
              visible:true,
              title:"چگونه می توانم سفارش خود را ثبت نمایم؟",
              des:"برای شروع استفاده از حداقل خدمات کافه ارز و در خرید از سایت های اینترنتی لازم است ایمیل و شماره تلفن همراه شما در در پنل کاربری تایید شده باشد، . بعد از فعال شدن حساب کاربری، امکان ثبت سفارش در قسمت های مرتبط بسته به نوع خدمات درخواستی به اسانی امکان پذیر است.پس از پرداخت آنلاین فاکتور سفارش از طریق درگاه بانکی یا به صورت کارت به کارت (حواله بانکی) فرآیند انجام سفارش توسط همکاران ما صورت می پذیرد."
            },
            {
              visible:false,
              title:"مدت زمان انجام سفارش من در سایت چقدر است؟",
              des:"با توجه به تنوع سرویس های پرداخت، مدت زمان انجام سفارش مرتبط با آن تفاوت دارد، سفارش های حساب های الکترونیک در هر ساعت از شبانه روز به صورت خودکار در لحظه انجام می شود، پرداخت سفارشاتی چون وبمانی، پرفکت مانی، خرید کدهای ووچر و خرید ارزهای دیجیتال بیت کوین، اتریوم، تتر و سایر رمز ارزها می باشد. در کافه ارز سفارشات ارزهای دیجیتال به صورت آنی انجام می شود. (در نظر داشته باشید که اولین تراکنش کاربران به منظور پیشگیری از فرایند پولشویی به دستور پلیس فتا، به مدت 72 ساعت کاری نزد کافه ارز با قیمت و مقدار ثبت شده محفوظ خواهد بود و بعد از آن به کیف پول اعلامی واریز خواهد شد.) و سفارشات پرداختی مثل پی پال و نقد درآمد ارزی بسته به سرویس دهنده مورد نظر بین 1 الی 24 ساعت به طول خواهد انجامید."
            },
            {
              visible:false,
              title:"مدت زمان انجام تبدیل ارزها به ریال چقدر است ؟",
              des:"با توجه به نوع ارزها و وریفای بودن اکانت حساب کاربری شما حدودا بین 15 دقیقه تا 2 ساعت به طول می انجامد"
            }
          ]
      }
    },
    methods: {
      showItems(name) {
        this.filteredItem = this.orders.filter( o => {
          return o.items ? (o.id == name) : null
        })
        console.log(this.filteredItem[0].id);
      },
      changeMode() {
      this.darkMode= !this.darkMode
      console.log(this.darkMode);
      },
      showQuestion(i){
        this.questions.forEach(q => {
          q.visible=false
        })
        this.questions[i].visible= true
      }
    }
  }
</script>

<template>
  <main>
  <HeaderPage :darkMode="darkMode" @changeMode="changeMode"/>
  <OrderPage @showItem="showItems" :filteredItem="filteredItem" :filteredId="this.filteredItem[0].id || 'paypal'" :darkMode="darkMode"/>
  <QuestionsPage :questions="questions" @questionClicked="showQuestion"/>
  </main>
</template>

<style scoped>
</style>
