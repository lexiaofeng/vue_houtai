<template>
    <div class="home">


        <TopNav></TopNav>

        <b-container class="bv-example-row" fluid>
            <b-row class="text-center">
                <b-col cols="2" class="caidan">
                    <LeftNav></LeftNav>
                </b-col>
                <b-col cols="10" class="neirong">
                    <br>
                    <br>

                    <b-form>
                        <b-card bg-variant="light">
                            <b-row>
                                <b-col sm="4">
                                    <b-form-group
                                            id="category_id"
                                            label-cols-sm="4"
                                            label-cols-lg="3"

                                            label="分类id"
                                            label-for="category_id"
                                    >
                                        <b-form-select  v-model="selected" :options="options"></b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="3">
                                    <b-form-group
                                            label-cols-sm="3"
                                            label="排序"
                                            label-align-sm="right"
                                            label-for="sort"
                                    >
                                        <b-form-input id="sort" v-model="sort">

                                        </b-form-input>
                                    </b-form-group>
                                </b-col>

                            </b-row>
                            <b-row>
                                <b-col sm="4">
                                    <b-form-group
                                            label-cols-sm="3"
                                            label="名字"
                                            label-align-sm="right"
                                            label-for="name"
                                    >
                                        <b-form-input id="name" v-model="title"></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="4">
                                    <b-form-group
                                            id="link_type"
                                            label-cols-sm="4"
                                            label-cols-lg="3"

                                            label="链接类型"
                                            label-for="link_type"
                                    >
                                        <b-form-select  v-model="selects" :options="option"></b-form-select>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col sm="6">
                                    <b-form-group
                                            label-cols-sm="3"
                                            label="链接目标"
                                            label-align-sm="right"
                                            label-for="link_address"
                                    >
                                        <b-form-input id="link_address" v-model="link_target"></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="3">
                                    <b-form-group
                                            label-cols-sm="3"
                                            label="状态"
                                            label-align-sm="right"
                                            label-for="status"
                                    >
                                        <b-form-input id="status" v-model="status"></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-button  variant="primary" @click="Submit()" >Submit</b-button>
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
    import qs from 'qs'

    export default {
        name:'Nav_update',
        props:[''],
        data () {
            return{
                info:{},
                options:[
                    {value:1, text: '顶部导航'},
                    {value:2, text: 'banner图'},
                    {value:3, text: 'icon'},
                    {value:4, text: '4张大图'},
                ],
                selected:'',
                selects:'',
                option:[
                    {value:1, text: '商品分类页面'},
                    {value:2, text: '商品购买页面'},
                    {value:3, text: '商品活动页面'},
                    {value:4, text: '店铺'},
                ],


                sort:'',
                title:'',
                link_target:'',
                status:'',
                link_type:'',
            }
        },

        components: {
            TopNav,
            LeftNav,

        },

        computed: {},

        beforeMount() {},

        mounted() {
            this.info = this.$route.query.info;
            console.log(this.info)
            this.selected = this.info['type_id']
            this.sort = this.info['sort']
            this.title = this.info['title']
            this.link_target = this.info['link_target']
            this.status =this.info['status']
            this.selects=this.info['link_type']

        },

        methods: {
            Submit(){
                    let data = {};
                    data['type_id']=this.selected
                    data['sort'] = this.sort
                    data['title'] = this.title
                    data['link_type'] = this.selects
                    data['link_target'] = this.link_target
                    data['status'] = this.status
                    console.log(data['type_id'])
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8080/laravel/public/api/nav/update/'+this.info['id'],
                    data: qs.stringify(data),
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                })
                    .then((res)=>{
                        console.log(res);






                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })
            },
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
