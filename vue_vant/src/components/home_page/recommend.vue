<template>
    <div style="height:100%; margin-bottom:2rem;" >
        <section>
            <div v-for="f in first" class="big_pic">
                <img :src="f.hybrid_cover_std" >
                <p class="title">{{f.hybrid_title}}</p>
            </div>
            <ul class="content">    
                <li v-for="(s,index) in some" :key="index">
                <p class="title">{{s.hybrid_title}}</p> 
                <div class="c_left">
                    <img :src="s.hybrid_cover_std" alt="">

                </div>
                <div class="c_right">
                    <div class="c_top"><span class="small_pic"><img :src="s.usercover" alt=""></span><span class="username">{{s.user_name}}</span></div>
                    <div class="article">{{s.post_summary}}</div>
                </div>
                </li>
            </ul>
        </section>
        <section>
            <div>
                <span>旅游话题</span>
                <span>白墙黛瓦的徽州之旅</span>
            </div>
             <van-swipe :width="600">
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                            <img :src="swipwer[0].posts[0].postcover" alt="">

                        </div>
                        <p class="s_title">{{swipwer[0].posts[0].title}}</p>
                    </div>
                    </van-swipe-item>
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                        <img :src="swipwer[0].posts[1].postcover" alt="">
                        </div>
                        <p class="s_title">{{swipwer[0].posts[1].title}}</p>
                    </div>
                    </van-swipe-item>
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                        <img :src="swipwer[0].posts[2].postcover" alt="">
                         </div>
                        <p class="s_title">{{swipwer[0].posts[2].title}}</p>
                    </div>
                    </van-swipe-item>
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                        <img :src="swipwer[0].posts[3].postcover" alt="">
                        </div>
                        <p class="s_title">{{swipwer[0].posts[3].title}}</p>
                    </div>
                    </van-swipe-item>
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                        <img :src="swipwer[0].posts[4].postcover" alt="">
                        </div>
                        <p class="s_title">{{swipwer[0].posts[4].title}}</p>
                    </div>
                    </van-swipe-item>
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                        <img :src="swipwer[0].posts[5].postcover" alt="">
                        </div>
                        <p class="s_title" >{{swipwer[0].posts[5].title}}</p>
                    </div>
                    </van-swipe-item>
                <van-swipe-item>
                    <div class="s_pic">
                        <div class="s_pic_img">
                        <img :src="swipwer[0].posts[6].postcover" alt="">
                        </div>
                        <p class="s_title">{{swipwer[0].posts[6].title}}</p>
                    </div>
                </van-swipe-item>
            </van-swipe>

        </section>
        <section>
            <ul class="content">    
                <li v-for="(s,index) in second_some" :key="index">
                <p class="title">{{s.hybrid_title}}</p> 
                <div class="c_left">
                    <img :src="s.hybrid_cover_std" alt="">

                </div>
                <div class="c_right">
                    <div class="c_top"><span class="small_pic"><img :src="s.usercover" alt=""></span><span class="username">{{s.user_name}}</span></div>
                    <div class="article">{{s.post_summary}}</div>
                </div>
                </li>
            </ul>
        </section>
        <div>
            <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <p>刷新次数: {{ count }}</p>
            </van-pull-refresh> -->

        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'vant';

    Vue.use(Swipe).use(SwipeItem);
    
    import { PullRefresh } from 'vant';

    Vue.use(PullRefresh);



    import http from "./../../utils/HttpClient";
  

export default {
    props:["type"],
    data() {
        return {
            total:"",
            some:"",
            first:"",
            second_some:"",
            swipwer:"",
            count: 0,
            isLoading: false
        }
    },
   methods: {
        getNew(){
            var self = this;
            $.ajax({
                url:"http://localhost:3000/index",
                type:"get",
                data:{
                
                },
                success(data){
                    // console.log(JSON.parse(data));
                    var data =  JSON.parse(data);
                    var res = data.data;
                    console.log(res);
                    self.total = res;
                    var first = res.slice(0,1);
                    var some = res.slice(1,5);
                    var second_some = res.slice(5,);
                    self.some = some;
                    self.first = first;
                    self.second_some = second_some;
                    // console.log(some);
                }
            })
        },
        getswiper(){
            var self = this;
            $.ajax({
                url:"http://localhost:3000/swiper",
                type:"get",
                data:{
                
                },
                success(data){
                    
                    var data =  JSON.parse(data);
                    var res = JSON.parse(data).data;
                    self.swipwer = res;
                    console.log(self.swipwer)
                   
                
                }
            })
        },
        // onRefresh() {
        //     setTimeout(() => {
        //         this.$toast('刷新成功');
        //         this.isLoading = false;
        //         this.count++;
        //     }, 500);
        // }

    },
    mounted() {
        this.getNew();
        this.getswiper();
        // this.onRefresh();
    }
}
</script>


<style lang="scss">
*{
    margin:0;
    padding:0;
}

/* 轮播图 */
 .van-swipe__track{
     width:400rem!important;
}
 .van-swipe-item{

     margin-right:0.13333333333333333rem;
}
 .van-swipe__indicators{
     display: none;
}
.big_pic{
    position:relative;
    img{
        width: 100%;
    }
    .title{
        background: rgba(0,0,0,0.5);
        // margin:0 0.2rem;
        color:#fff;
        font-size:0.4rem;
        position:absolute;
        bottom:0;
        left:0;
        white-space:nowrap;
        overflow:hidden;
        letter-spacing:0.10666666666666667rem;
        height:1.3333333333333333rem;
        line-height: 1.3333333333333333rem;
        text-align:center;
        width: 100%;

    }
}
.content{
    background-color: #ECECEC;
    li{
        margin:20px;
        background-color: #fff;
        overflow:hidden;
    }
    .title{
        width: 100%;
        font-size:40px;
        height: 70px;
        line-height: 70px;
        overflow: hidden;
    }
    .c_left{
        width: 300px;
        height: 250px;
        float: left;
        img{
            width: 100%;
            height: 100%;
            border-radius: 25px;
        }
    }
    .c_right{
        width: 380px;
        height: 250px;
        float: right;
        .small_pic{
            display:block;
            width: 80px;
            height: 80px;
            float: left;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .c_top{
            height: 80px;
        }
        .username{
            font-style: normal;
            display: inline-block;
            height: 80px;
            line-height: 80px;
            text-align:center;
            color:#75A45D;
            font-size:40px;
        }
        .article{
            height: 150px;
            font-size:40px;
            // padding-bottom:10px;
            overflow:hidden;
        }
    }

    
}
.s_pic{
    width: 600px;
    .s_pic_img{
        width: 600px;
        height: 350px;
    }
    img{
        width: 100%;
        height:100%;
    }
    .s_title{
        white-space:nowrap;
        overflow: hidden;
        font-size:40px;
        height: 60px;
        line-height: 60px;
    }
}
</style>
