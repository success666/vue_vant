<template>
    <div>
        <div class="head">
            <van-icon name="arrow-left" @click="content()"/>
            <van-search placeholder="请输入搜索关键词" v-model="value" />
            <span>搜索</span>
        </div>
        <div class="pannel">
            <h3 class="title">
                <strong><a href="#">结伴广场</a></strong>
                <a href="#" rel="nofollow">更多结伴</a>
            </h3>
            <div class="banner">
                <van-swipe :width="600">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                </van-swipe>
            </div>
            <h3 class="title">
                <strong><a href="#">结伴广场</a></strong>
                <a href="#" rel="nofollow">更多结伴</a>
            </h3>
            <div class="attract">
                <ul>
                    <li>
                        <span class="photo"></span>
                        <div class="center">
                            <span class="name">阿亮学长</span><br>
                            <span class="introduce">在九月的建水小鎮，聊一席軟風</span>
                        </div>
                        <span class="record">+关注</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { Search } from 'vant';

    Vue.use(Search);
    import { Swipe, SwipeItem } from 'vant';

    Vue.use(Swipe).use(SwipeItem);


    export default {
    
    data() {
        return {
           value:""
        }
    },
    methods: {
       content(){
           location.href ="#/home"
       }
    },
    mounted() {
      
    }
}
</script>
<style>
    ul,li{
     float: left;
     list-style:none;
}
/* 头部 */
 .head{
     width: 100%;
     height: 1.3333333333333333rem;
     display:flex;
     justify-content: space-around;
     font-size:0.3466666666666667rem;
     align-items:center;
     background-color: #75A45D;
     color:#fff;
}
/* 搜索框 */
 .van-search{
     padding:0;
     border-radius: 0.2rem;
}
 .van-cell{
     width: 5.333333333333333rem;
}
/* 小标题 */
 h3 {
     padding: 0 0.26666666666666666rem;
}
 strong {
     font-size: 0.3466666666666667rem;
     word-wrap: break-word;
}
 .title{
     overflow: hidden;
     height: 1.3333333333333333rem;
}
 h3 {
     display: block;
     font-size: 0.24rem;
     -webkit-margin-before: 0.21333333333333335rem;
     -webkit-margin-after: 0.21333333333333335rem;
     -webkit-margin-start: 0rem;
     -webkit-margin-end: 0rem;
     font-weight: bold;
}
 h3 strong a {
     font-size:0.4rem;
     border-left: #75a43d 0.06666666666666667rem solid;
     color: #333;
     font-weight: 700;
     padding: 0 0 0 0.06666666666666667rem;
     margin: 0.4rem 0;
     float: left;
}
 h3 a {
     float: right;
     color: #75a43d;
     font-size: 0.29333333333333333rem;
     font-weight: 400;
     margin-top: 0.4rem;
     line-height: 0.5866666666666667rem;
}
/* 轮播图 */
 .van-swipe__track{
     width:400rem!important;
}
 .van-swipe-item{
     background-color: pink;
     margin-right:0.13333333333333333rem;
}
 .van-swipe__indicators{
     display: none;
}
/* 关注 */
 .attract ul{
     width: 100%;
}
 .attract li{
     width: 100%;
     display:flex;
     justify-content: space-around;
     font-size:0.3466666666666667rem;
     align-items:center;
     text-align: center;
}
 .attract .photo{
     display: block;
     width: 1.6rem;
     height: 1.6rem;
     border-radius: 50%;
     background-color: pink;
}
 .attract .center{
     background-color:yellow;
     width: 5.333333333333333rem;
     height: 1.6rem;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
}
 .record{
     background-color:green;
     width: 2rem;
     height: 0.9333333333333333rem;
     border-radius: 0.2rem;
     line-height: 0.9333333333333333rem;
     color:#fff;
     font-size:0.3466666666666667rem;
     font-weight: bold;
}
 
</style>
