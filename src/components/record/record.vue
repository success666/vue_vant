<template>
    <div>
        <xheader />
        <Tab_record />
        <!-- <tab type="record"/> -->
        <xfooter /> 
    </div>
</template>


<script>

    import http from "./../../utils/HttpClient"
     import xheader from "../home/xheader.vue"
    //   import tab from "../home/tab.vue"
    import xfooter from "../home/xfooter.vue"
    import  Tab_record from "./tab_record.vue"

export default {
    
    data() {
        return {
           
        }
    },
    components: {
        xheader,
        // tab,
        Tab_record,
        xfooter
    },
    methods: {
      
    },
    mounted() {
      
    }
}
</script>