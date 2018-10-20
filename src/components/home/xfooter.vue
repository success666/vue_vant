<template>
    <div>
        
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home" @click="change(0)">关注</van-tabbar-item>
            <van-tabbar-item icon="chat" @click="change(1)">驿友</van-tabbar-item>
            <van-tabbar-item icon="share" @click="change(2)">发现</van-tabbar-item>
        </van-tabbar>
 
    </div>
</template>


<script>
import http from "./../../utils/HttpClient";

export default {
  data() {
    return {
      page: 0,
      active: 2,
      name: [
        {
          title: "关注",
          icon: "home"
        },
        {
          title: "驿友",
          icon: "chat"
        },
        {
          title: "发现",
          icon: "share"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.page = index;
      switch (index) {
        case 0:
          location.href = "#/friend";
          break;
        case 1:
          location.href = "#/record";
          break;
        case 2:
          location.href = "#/home";
          break;
      }
    }
  },
  mounted() {}
};
</script>
<style scoped>
.van-tabbar {
  height: 2rem;
  border-top: 0.033rem solid #ccc;
}
.van-tabbar-item {
  font-size: 0.5rem;
}
.van-tabbar-item__icon {
     font-size: 0.6666666666666666rem;
     position: relative;
     margin-bottom: 0.06666666666666667rem;
}
 

</style>
