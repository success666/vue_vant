<template>
    <div style="height:100%;">
        <div>
            <van-tabs v-model="active" :calss="{'show_h':type==='home'}">
                <van-tab title="结伴广场" ><Recommend /></van-tab>
                <van-tab title="发现好友"><S_select /></van-tab>
                <van-tab title="附件驿友"><Square /></van-tab>
               
            </van-tabs>

        </div>
        
    </div>
</template>


<script>
    import Vue from 'vue'
    import { Tab, Tabs } from 'vant';

    Vue.use(Tab).use(Tabs);
    
    import http from "./../../utils/HttpClient";
    import  Recommend from "../home_page/recommend.vue";
    import  S_select from "../home_page/s_select.vue";
    import  Square from "../home_page/square.vue";
export default {
    props:["type"],
    data() {
        return {
           active: 0,
           title:['推荐','驿友','问答广场'],
           
        }
    },
    components:{ 
        Recommend,
        Square,
        S_select
        
    },
    methods: {
       
    },
    mounted() {
      console.log(this.type)
      if (this.type==="home") {
                  
        }
    }
}
</script>
<style>
.van-tab--active {
     color: #75A45D;
}
 .van-tabs__line{
     background-color: #75A45D;
}
 .van-tab__pane{
     font-size:0.66rem;
}
 
</style>
