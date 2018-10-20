<template>
    <div class="page">
         <div class="head">
           <van-icon name="arrow-left" />
           <span>正文页</span>
           <van-icon name="share" />
       </div>
        <div class="conent"></div>
        <div class="f_content">
            <div class="foot">
                <span class="iconfont icon-weixinpengyouquan"></span>
                <span class="iconfont icon-dianzan"></span>
                <span class="iconfont icon-xinxi"></span>
                <span class="iconfont icon-gengduo"></span>
            
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
           active:0
        }
    },
    methods: {
       
    },
    mounted() {
      
    }
}
</script>
<style scoped>
    .head{
     width: 100%;
     height: 1.0666666666666667rem;
     display:flex;
     justify-content: space-around;
     font-size:0.3466666666666667rem;
     align-items:center;
     background-color: #75A45D;
     color:#fff;
}
 .foot{
     height: 1.3333333333333333rem;
     display:flex;
     justify-content: space-around;
     align-items:center;
}
 .f_content{
     width: 100%;
     position: absolute;
     bottom:0;
     left:0;
}
 .foot span{
     font-size:0.3466666666666667rem;
}
 
</style>
