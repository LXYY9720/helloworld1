<template>
    <div class='swiper-content'>
        <swiper 
        :options="swiperOption"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
            <swiper-slide
            v-for="(item,index) in swiperList" :key="index">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
    naem: "Swiper",
    data() {
        return{
            swiperList:[
                {
                    id:1,
                    imgUrl:"./images/swiper1.jpg"
                },
                {
                    id:2,
                    imgUrl:"./images/swiper2.jpg"
                },
                {
                    id:3,
                    imgUrl:"./images/swiper3.jpg"
                },
                {
                    id:4,
                    imgUrl:"./images/swiper4.jpg"
                },
            ],
            swiperOption:{
                autoplay:3000,
                speed:1000,
                pagination:{
                    el:".swiper-pagination"
                }                 
            }
        }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    }
};
</script>
<style scoped>
.swiper-content{

    width: 100%;
    height: 12rem;

}
.swiper-content img{

    width: 100%;
    height: 12rem;

}
</style>