<template>
  <div class="home">
    <div class="top-header">
      <div class="header-main">
        <Header></Header>
        
      </div>
      <Lab></Lab>

    </div>
    <section ref="wrapper">
      <div>
        <Swiper></Swiper>
        <Icon></Icon>
        <Recommand></Recommand>
      </div>
    </section>    
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Lab from '@/components/home/Lab.vue'
import Swiper from '@/components/home/Swiper.vue'
import Icon from '@/components/home/Icon.vue'
import Recommand from '@/components/home/Recommand.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import BetterScroll from 'better-scroll'
import axios from 'axios'
import { ref } from 'vue'
const value = ref('1');
export default {
  name: "Home",
  components:{
    Header,
    Lab,
    Swiper,
    Icon,
    Recommand,
    Tabbar,
  },
  created() {
    axios({
      url:'/api/index_list/1/data/1'
    }).then(res=>{
      console.log(res)
    })

  },
  mounted() {
    new BetterScroll(this.$refs.wrapper,{
      movable: true,
      zoom: true,
    })
  }
};
</script>
<style scoped>
.home{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;  
}
.top-header{
  width: 100%;

}
.header-main{
  position: fixed;
  top:0;
  left: 0;
}
section{
  flex: 1;
  margin-top: 5rem;
  overflow: hidden;
}
</style>
