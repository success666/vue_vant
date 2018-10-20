<template>
    <div style="height:100%; margin-bottom:2rem;" >
        <section>
            <ul class="content">
                <li v-for="(t,index) in total" :key="index">
                    <div class="all_top">
                        <p>
                            <span class="pic">
                                <img :src="t.usercover" alt="">
                                </span>
                           <p>
                               <span>{{t.user_name}}</span>
                               <span>{{t.time.slice(5,10)}}</span>
                            </p> 
                       
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                    <p class="title">{{t.title}}</p>
                    <div class="a_right">
                        <div class="picture">
                            <img :src="t.poststd" alt="">
                        </div>
                        <div class="article">
                            {{t.summary}}
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <div class="many">
            <p @click="add()">点击加载更多</p>
        </div>
    </div>
</template>


<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);

import http from "./../../utils/HttpClient";

export default {
  props: ["type"],
  data() {
    return {
      total: "",
      num:""
    };
  },
  methods: {
    getall() {
      var self = this;
      $.ajax({
        url: "http://localhost:3000/all",
        type: "get",
        data: {},
        success(data) {
          var data = JSON.parse(data);
          // console.log(JSON.parse(data));

          // console.log(JSON.parse(data).data);
          var res = JSON.parse(data).data;
          self.total = res;

          console.log(res);
        }
      });
    },
    add(){
       var self = this;
        $.ajax({
            url: "http://localhost:3000/all",
            type: "get",
            data: {
                num:20
            },
            success(data) {
            var data = JSON.parse(data);
            // console.log(JSON.parse(data));

            // console.log(JSON.parse(data).data);
            var res = JSON.parse(data).data;
            self.total = res;

            console.log(res);
            }
      });
        
    }
   
  }, 
  mounted() {
    this.getall();
    
  },
 
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.all_top {
  width: 100%;
  height: 100px;
  p{
      float: left;
  }
  .pic {
    width: 100px;
    height: 100px;
    img {
      border-radius: 50%;
      width:100%;
      height: 100%;
    }
  }
}
.title{
    font-size:40px;
}
.a_right{
    overflow: hidden;
    .picture{
        float: left;
        width: 300px;
        height: 200px;
        img{
            width:100%;
            height: 100%;
        }
    }
.article{
    float:right;
    width: 380px;
    height: 200px;
    overflow: hidden;
    font-size:40px;
}
}
.content{
    background-color: #ECECEC;
    li{
        margin:20px;
        background-color: #fff;
        overflow:hidden;
        padding:15px 0;
    
    }
}
.many{
    p{
        width: 100%;
        height: 60px;
        line-height: 60px  ;
        background-color: #bcfcfc;
        text-align:center;
        font-size:30px;

    }
}     
</style>
