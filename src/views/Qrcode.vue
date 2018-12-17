<template>
    <!-- https://cdn.youlianyc.com/image/static/19da57ec3a6893d71cc858f5dade21a6df6cefed.jpg -->
    <div v-longpress="longtap" class="img_"><img :src="'https://cdn.youlianyc.com/image/static/' + qrcode_path + '.jpg'"></div>
</template>
<style lang="scss" scoped>
    .img_ {
        img {
            width: 100%;
            height: auto;
        }
    }
</style>
<script>
    import api from '../utils/api'
    export default {
        data () {
            return {
                qrcode_path: '',
                longpress: 0
            }
        },
        mounted () {
            this.qrcode_path = this.$route.params.id
            // wx && wx.miniProgram && wx.miniProgram.postMessage({data: {
            //     longpress: this.longpress
            // }})
        },
        methods: {
            longtap () {
                console.log(wx, 'wx: ')
                this.longpress = 1
                wx && wx.miniProgram && wx.miniProgram.postMessage({data: {
                    longpress: this.longpress
                }})
            }
        }
    }
</script>
