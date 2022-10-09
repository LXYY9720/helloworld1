<template>
    <div class='title'>
        <span>
            <slot>专业推荐</slot>
        </span>    
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.title{
    width: 100%;
    padding: 8px 0;
    text-align: center;
    font-size: 18px;
}
.title span{
    position: relative;
}
.title span::before{
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: -1.35rem;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e29433;

}
.title span::after{
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    left: -1.35rem;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e29433;

}
</style>