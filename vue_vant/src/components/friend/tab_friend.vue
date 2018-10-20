<template>
    <div style="height:100%;">
        <div>
            <van-tabs v-model="active">
                <van-tab title="全部" ><all /></van-tab>
                <van-tab title="游记"><S_select /></van-tab>
                <van-tab title="问答"><Square /></van-tab>
                <van-tab title="攻略"><Square /></van-tab>
            </van-tabs>

        </div>
        
    </div>
</template>


<script>
    import Vue from 'vue'
    import { Tab, Tabs } from 'vant';

    Vue.use(Tab).use(Tabs);
    
    import http from "./../../utils/HttpClient";
    import  all from "../friend_page/all.vue";
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
        all,
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
/* .van-tabs__nav--line{
    height: 6.25rem;
}
.van-tab{
    font-size: 24px!important;
} */
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
