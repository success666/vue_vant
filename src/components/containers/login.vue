<template>
    <div style="widht:100%;height:100px;">
       <div class="head">
           <van-icon name="arrow-left" />
           <span>登录</span>
           <span></span>
       </div>
       <div class="pannel">
           <div class="p_head">
                <span class="round"><img src="../../assets/imgs/favicon.jpg" alt=""></span>

           </div>

            <div class="p_input">
                
                <input type="text">
                <input type="password">
               <input type="submit" value=" 提交" class="submit">
               
            </div>
        </div>
       <div class="f_tab">
           <span>忘记密码</span>
           <span>社交账号登录</span>
           <span>新用户注册</span>
       </div>
    </div>
</template>


<script>
import Vue from 'vue'
import { Icon } from 'vant';

Vue.use(Icon);

export default {
    
    data() {
        return {
           
        }
    },
    components: {
        
        },
    methods: {
      
    },
    mounted() {
      
    }
}
</script>

<style  scoped>
   .head{
     width: 100%;
     height: 1.0666666666666667rem;
     display:flex;
     justify-content: space-between;
     font-size:0.3466666666666667rem;
     align-items:center;
     background-color: #75A45D;
     color:#fff;
}
 .round{
    display:block;
    width: 2.6666666666666665rem;
    height: 2.6666666666666665rem;
    background:pink;
    border-radius: 50%;
    margin:0.26666666666666666rem;
}
.round img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
 .p_head{
     display:flex;
     justify-content: center;
     align-items:center;
}
 .pannel{
     background-color:#f3f4f4;
     font-size:0.3466666666666667rem;
     text-align: center;
     min-height: 15.333333333333334rem;
}
 .p_input{
}
 input{
     width: 6rem;
     height: 0.9333333333333333rem;
     margin:0.26666666666666666rem;
     border:none 0;
}
 .submit{
     width: 5.333333333333333rem;
     border-radius: 0.5333333333333333rem;
     background-color: #75A45D;
}
 .f_tab{
     width: 100%;
     height: 1.3333333333333333rem;
     position:fixed;
     bottom: 0;
     left:0;
     font-size:0.3466666666666667rem;
     display:flex;
     justify-content: space-around;
     align-items:center;
}
 .f_tab span{
}
 
    
</style>