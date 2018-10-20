<template>
    <div style="widht:100%;height:100px;">
       <div class="head">
           <van-icon name="arrow-left" />
           <span>注册</span>
           <span></span>
       </div>
       <div class="pannel">
           
            <div class="p_input">
                
                <input type="text">
                <van-cell-group>
                <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
                </van-cell-group>
                <input type="password">
               <input type="submit" value=" 提交" class="submit">
               
            </div>
            <!--文字 -->
            <div class="content">
                <p>点击【确定】代表你已经阅读并同意用户使用协议</p>

                <p>
                    <span>如果你还没有收到短信，请确认：</span>
                    <br>
                    <span>1、手机号码正确，话费充足</span>
                    <br>
                    <span>2、请到【广告短信】箱查看；可能被误判为广告</span>
                    <br>
                    <span>3、同一号码或手机，1小时内不能申请5次，12小时内不能申请10次</span>
                </p>
            </div>
        </div>
      
    </div>
</template>


<script>
import Vue from 'vue'

import { Field } from 'vant';

Vue.use(Field);
export default {
    
    data() {
        return {
           sms:''
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
 .pannel{
     background-color:#f3f4f4;
     font-size:0.3466666666666667rem;
     text-align: center;
     min-height: 15.333333333333334rem;
     padding-top:1.3333333333333333rem;
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
 .van-cell{
    width: 6rem!important;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding: 0.13333333333333333rem 0.2rem;
    height: 0.9333333333333333rem;
}
 .van-cell-group{
     background-color: #f3f4f4;
     position: relative;
     height: 0.9333333333333333rem;
}
 .content{
     text-align: left;
     padding:0 1.3333333333333333rem;
}
 .content p{
     margin-bottom:2rem;
}
 
</style>