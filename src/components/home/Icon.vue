<template>
    <ul class="icons-mid">
        <li v-for="(item,index) in  iconList"
        :key="idnex"
        >
            <img :src="item.imgUrl" alt="">
            <span>{{ item.title }}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name:"Icon",
    data() {
        return{
            iconList:[
                {
                    id:1,
                    title:'四牌楼',
                    imgUrl:'./images/icons1.jpg',
                },
                {
                    id:2,
                    title:'九龙湖',
                    imgUrl:'./images/icons2.jpg',
                },
                {
                    id:3,
                    title:'丁家桥',
                    imgUrl:'./images/icons3.jpg',
                },
                {
                    id:4,
                    title:'六朝松',
                    imgUrl:'./images/icons4.jpg',
                },
                {
                    id:5,
                    title:'1902',
                    imgUrl:'./images/1902.jpg',
                }
            ]
        }
    }
  
}
</script>
<style scoped>
.icons-mid{
    display: flex;
    margin-top: 0.4rem;
    justify-content: space-around;
    padding: 0.5rem 0;
    background-color: rgba(2, 81, 2, 0.1);
}
.icons-mid li{
    display: flex;
    flex-direction: column;
}
.icons-mid img{
    width: 4rem;
    height: 4rem;
}
.icons-mid span{
    font-size: 16px;
    padding: 0.8rem 0;
    text-align: center;
}
</style>