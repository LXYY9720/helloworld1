<template>
    <div class='tabbar'>
        <ul>
            <li
            v-for='(item , index) in routerList'
            key='index'
            @click='switchStatus(item.path)'
            >
                <img :src="$route.path.includes(item.path) ? item.selected : item.active" alt="">
                <span :class="$route.path.includes(item.path) ? 'active':''">{{item.title}}</span>
            </li>
 
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            routerList:[
                {
                    title:"首页",
                    path:"/home",
                    active:"./images/home.png",
                    selected:"./images/home-selected.png",
                },
                {
                    title:"分类",
                    path:"/list",
                    active:"./images/list.png",
                    selected:"./images/list-selected.png",
                },
                {
                    title:"购物车",
                    path:"/cart",
                    active:"./images/cart.png",
                    selected:"./images/cart-selected.png",
                },
                {
                    title:"我的",
                    path:"/my",
                    active:"./images/my.png",
                    selected:"./images/my-selected.png",
                }
            ]
        }
    },
    methods:{
        switchStatus(path){
            // 多次点击不切换跳转
            if(this.$router.path == path){
                return;
            }
            // 跳转Tabbar页面
            this.$router.replace(path);
        }
    }
}
</script>
<style scoped>
.tabbar{
    width: 100%;
    height: 4.5rem;
    background-color: rgba(86, 244, 152,0.5);
}
ul{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}
li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.tabbar img{
    width: 2.25rem;
}
.tabbar span{
    font-size: 1rem;
}
.active{
    color:rgb(246, 130, 22);
}
</style>