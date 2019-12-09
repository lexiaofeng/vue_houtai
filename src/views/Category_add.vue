<template>
    <div class="home">


        <TopNav></TopNav>

        <b-container class="bv-example-row" fluid>
            <b-row class="text-center">
                <b-col cols="2" class="caidan">
                    <LeftNav></LeftNav>
                </b-col>
                <b-col cols="10" class="neirong">
                    <br><br>
                    <b-form  @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-card bg-variant="light">
                            <b-form-group
                                    id="fieldset-horizontal"
                                    label-cols-sm="4"
                                    label-cols-lg="3"

                                    label="分类名称"
                                    label-for="input-horizontal"
                            >
                                <b-form-input id="input-horizontal" v-model="data.name"></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="attr1"
                                    label-cols-sm="4"
                                    label-cols-lg="3"

                                    label="属性1"
                                    label-for="input-horizontal"
                            >
                                <b-form-input id="attr1" v-model="data.property.attr1"></b-form-input>
                            </b-form-group>


                            <b-form-group
                                    id="attr2"
                                    label-cols-sm="4"
                                    label-cols-lg="3"

                                    label="属性2"
                                    label-for="input-horizontal"
                            >
                                <b-form-input id="attr2" v-model="data.property.attr2"></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="paixu"
                                    label-cols-sm="4"
                                    label-cols-lg="3"

                                    label="排序"
                                    label-for="input-horizontal"
                            >
                                <b-form-input id="paixu" v-model="data.sort"></b-form-input>
                            </b-form-group>


                            <b-form-group
                                    id="zhuangtai"
                                    label-cols-sm="4"
                                    label-cols-lg="3"

                                    label="状态"
                                    label-for="input-horizontal"
                            >
                                <b-form-input id="zhuangtai" v-model="data.status"></b-form-input>
                                <br>
                                <br>
                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form-group>
                        </b-card>

                    </b-form>


                </b-col>

            </b-row>


        </b-container>



    </div>
</template>

<script>
    import axios from 'axios'
    import TopNav from '../components/top-nav';
    import LeftNav from '../components/left-nav';
    import RightContent from '../components/right-content';
    import qs from 'qs';

    export default {
        name:'category_add',
        props:[''],
        data () {
            return{
                show: true,
                data:{
                    name:'',
                    property:{"attr1":"","attr2":""},
                    sort:'',
                    status:''
                },
            }
        },

        components: {
            TopNav,
            LeftNav,
            RightContent,
        },

        computed: {},

        beforeMount() {},

        mounted() {

        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                // console.log(this.data)
                this.data.property=JSON.stringify(this.data.property)
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8080/laravel/public/api/category/add',
                    data: qs.stringify(this.data),
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                })
                    .then((res)=>{
                        // console.log(res);
                        if(res.data.msg == 'success'){

                            this.$router.push({path : '/about', query : { }})

                        }
                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })



            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.data.name = ''
                this.data.property.attr1 = ''
                this.data.property.attr2 = ''
                this.data.sort = ''
                this.data.status = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },

        watch: {}

    }


</script>
<style scoped lang="scss">

    body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
    body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
    a{color:#2d374b;text-decoration:none}
    a:hover{color:#cd0200;text-decoration:underline}
    em{font-style:normal}
    li{list-style:none}
    img{border:0;vertical-align:middle}
    table{border-collapse:collapse;border-spacing:0}
    p{word-wrap:break-word}


    .caidan{
        background-color: #718498;
        height: 90vh;
    }






</style>
