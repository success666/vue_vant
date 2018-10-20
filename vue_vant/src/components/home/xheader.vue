<template>
    <div>
        <div class="head">
            <div class="h_left">
                <van-icon name="arrow-left" />
                <span class="round">
                    <!-- <img src="../../assets/imgs/favicon.jpg" alt="">     -->
                </span>
            </div>
            <div class="h_right">
                <van-icon name="search" @click="connect()" :data-num='0' />
                <van-icon name="chat"  />
                <van-icon name="add-o" />
            </div>
        </div> 
       
    </div>
</template>



<script>
    import Vue from 'vue'

    import { Icon } from 'vant';

    Vue.use(Icon);
    
    import http from "./../../utils/HttpClient";
  

export default {
    
    data() {
        return {
        
        }
    },
    methods: {
       connect(){
            location.href ="#/search"
       }
    },
    mounted() {
      
    }
}
</script>

<style>
.head{
     background-color: #75A45D;
     height: 1.3333333333333333rem;
     width: 100%;
     font-size:0.4rem;
     display:flex;
     justify-content: space-between;
     color:#fff;
}
 .round{
     diaplay:block;
     width:1.0666666666666667rem;
     height: 1.0666666666666667rem;
     background:pink;
     border-radius: 50%;
}
 .round img{
     width: 100%;
     height: 100%;
     border-radius: 50%;
}
 .h_left{
     height: 1.3333333333333333rem;
     width:2rem;
     display:flex;
     justify-content: space-around;
     align-items:center;
}
 .h_right{
    
     width: 2.333333333333333rem;
     display:flex;
     justify-content: space-around;
     align-items:center;
}
 
 
 
</style>