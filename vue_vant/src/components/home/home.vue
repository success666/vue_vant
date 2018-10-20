<template>
    <div>
        <div class="demo">
          <xheader/>
          <tab  type="home"/>
          <xfooter /> 
        </div>
    </div>
</template>


<script>
// import http from "./../../utils/HttpClient";

import xheader from "./xheader.vue";
import tab from "./tab.vue";
import xfooter from "./xfooter.vue"

export default {
  data() {
    return {
        getTopicEditorFeeds:[]
    };
  },
  components: {
    xheader,
    tab,
    xfooter
  },

  methods: {
    
  },

  mounted() {
   
  }
};
</script>
<style>
 

</style>
