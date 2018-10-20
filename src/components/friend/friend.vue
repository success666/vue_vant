<template>
    <div>
        <xheader />
        <tab_friend />
        <!-- <tab type="friend"/> -->
        <xfooter /> 
    </div>
</template>


<script>

    import http from "./../../utils/HttpClient"
    import xheader from "../home/xheader.vue"
    
    //  import tab from "../home/tab.vue"
    import xfooter from "../home/xfooter.vue"
    import tab_friend from "./tab_friend.vue"
export default {
    
    data() {
        return {
           
        }
    },
    components: {
        xheader,
        tab_friend,
        // tab,
        xfooter
        },
    methods: {
      
    },
    mounted() {
      
    }
}
</script>











