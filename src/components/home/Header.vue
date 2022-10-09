<template>
    <header>
        <img id="left" src="@/assets/images/logo.jpg" alt="">
        <input type="search" placeholder="输入进行搜索" name="searchInfor">
        <i class="iconfont icon-fangdajing"></i>
        <img id="right" src="@/assets/images/SEU.png" alt="">
    </header>
</template>
<script>
export default {

}
</script>
<style scoped>
header{
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
}
#left{
    height: 2.4rem;
}
input{
    height: 2rem;
    border-radius: 0.8rem;
    width: 15.8rem;
    font-size: 1.2rem;
}
#right{
    height: 1.8rem;
}
i{
    position: absolute;
    right: 3rem;
    top: 0.6rem;
}
</style>