<template>
    <div>
        <div class="head">
            <van-icon name="arrow-left" @click="content()"/>
            <van-search placeholder="请输入搜索关键词" v-model="value"   />
            <span @click="setSearchText">搜索</span>
        </div>
        <div class="pannel">
            <h3 class="title">
                <strong><a href="#">中国最美梯田</a></strong>
                <a href="#" rel="nofollow">从年头到年尾</a>
            </h3>
            <div class="banner">
                <van-swipe :width="600">
                    <van-swipe-item v-for="t in terrace">
                        <div> 
                            <div class="b_pic"><img :src="t.imgUrl" alt=""></div>
                            <div class="myname">{{t.name}}</div>
                        </div>
                        
                    </van-swipe-item>
                     
                </van-swipe>
            </div>
            <h3 class="title">
                <strong><a href="#">热门用户</a></strong>
                <a href="#" rel="nofollow">更多</a>
            </h3>
            <div class="attract">
                <ul>
                    <li v-for="(h,index) in hot" :key="index" class="user_name">
                        <span class="photo"><img :src="h.raw_img" alt=""></span>
                        <div class="center">
                            <span class="name">{{h.name}}</span><br>
                            <span class="introduce">{{h.description}}</span>
                        </div>
                        <span class="record">+关注
                            
                        </span>
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
           value:"",
           hot:"",
           terrace:[{
               id:63764329228404262,
               name:"龙脊梯田",
               imgUrl:"../../../src/assets/terrace/longji.jpg"
           },{
               id:171923619151086755,
               name:"元阳梯田",
               imgUrl:"../../../src/assets/terrace/yuanyang.jpg"
           },{
               id:196189221239652460,
               name:"加榜梯田",
               imgUrl:"../../../src/assets/terrace/jiabang.jpg"
           },{ 
               id:191408751155085361,
               name:"云和梯田",
               imgUrl:"../../../src/assets/terrace/yunhe.jpg"
           },{
               id:191133063202209828,
               name:"紫鹊界梯田",
               imgUrl:"../../../src/assets/terrace/ziquejie.jpg"
           },{
               id:63764329144517695,
               name:"婺源",
               imgUrl:"../../../src/assets/terrace/wuyuan.jpg"
           },{
               id:63764329266153153,
               name:"扎尕那",
               imgUrl:"../../../src/assets/terrace/zhagana.jpg"
           },{
               id:460219164443803656,
               name:"天池冶海",
               imgUrl:"../../../src/assets/terrace/tianchi.jpg"
           },{
               id:460218379047796743,
               name:"南尖岩",
               imgUrl:"../../../src/assets/terrace/nanjianyan.jpg"
           }]
        }
    },
    methods: {
       content(){
           location.href ="#/home"
       },
        getUser(){
           var self = this;
            $.ajax({
                url:"http://localhost:3000/user",
                type:"get",
                data:{
                
                },
                success(data){     
                    var data =  JSON.parse(data);
                    var res = JSON.parse(data).data; 
                    console.log(res);
                    var hot = res.slice(0,4);
                    console.log(hot)
                    self.hot = hot
                
                }
            }) 
        },
        setSearchText(value){
            console.log(666);
            this.$store.dispatch("setSearchText",this.searchText);
            console.log(value)
        }
    },
    mounted() {
      this.getUser();
    }
}
</script>
<style lang="scss">
    ul,li{
     
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
    //  background-color: pink;
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
    //  width: 100%;
     display:flex;
     justify-content: space-around;
     font-size:0.3466666666666667rem;
     align-items:center;
     text-align: center;
     margin:.3rem;
     float: left;
}
 .attract .photo{
     display: block;
     width: 1.6rem;
     height: 1.6rem;
     border-radius: 50%;
    //  background-color: pink;
     img{
         width: 100%;
         height: 100%;
         border-radius: 50%;
     }
}
 .attract .center{
    //  background-color:yellow;
     width: 5rem;
     padding:.2rem;
     height: 1.6rem;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     .introduce{
         overflow:hidden;
         height: 40px;
         line-height: 40px;
     }
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
.banner{
    .b_pic{
        width: 600px;
        height: 350px;
        img{
            width:100%;
            height:100%;
        }
    }
    .myname{
        font-size:40px;
        color:#75A45D;
    }
}
</style>
