<template>
    <div>
        <div>
            <van-tabs v-model="active" :calss="{'show_h':type==='home'}" >
                <van-tab title="推荐热点" ><Recommend /></van-tab>
                <van-tab title="驿友精选"><S_select /></van-tab>
                <van-tab title="问答广场"><Square /></van-tab>
            </van-tabs>

        </div>
        
    </div>
</template>


<script src="../../../../static/jquery-3.2.1.js">
    
</script>
<script>
    import Vue from 'vue'
    import { Tab, Tabs } from 'vant';

    Vue.use(Tab).use(Tabs);
    
    import http from "./../../utils/HttpClient";
    import  Recommend from "../home_page/recommend.vue";
    import  S_select from "../home_page/s_select.vue";
    import  Square from "../home_page/square.vue";
    import $ from 'jquery'
    window .$ = $

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
        // getNew(){
        //     $.ajax({
        //         url:"http://localhost:3000/index",
        //         type:"get",
        //         data:{
                
        //         },
        //         success(data){
        //             console.log(JSON.parse(data))
        //         }
        //     })
        // }
       

    },
    mounted() {
        // this.getNew();
    }
}
</script>
<style scoped>
.van-tab--active {
     color: #75A45D;
}
 .van-tabs__line{
     background-color: #75A45D;
}
 .van-tab__pane{
     font-size:0.66rem;
}
.van-tab{
    font-size: 1rem!important;
}

</style>
