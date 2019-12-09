<template>
    <div class="home">


        <TopNav></TopNav>

        <b-container class="bv-example-row" fluid>
            <b-row class="text-center">
                <b-col cols="2" class="caidan">
                    <LeftNav></LeftNav>
                </b-col>
                <b-col cols="10" class="neirong">

                    <b-container class="bv-example-row">
                        <br><br>


                        <b-table :items="items" :fields="fields" id="my-table"  striped outlined responsive="sm">
                            <template v-slot:cell(action)="row" >
                                <b-button size="sm"  variant="outline-primary" class="mr-2" @click="edit(items[row.index].id)" >
                                    编辑
                                </b-button>
                                <b-button size="sm"  variant="danger" class="mr-2" @click="del(items[row.index].id)">
                                    删除
                                </b-button>


                            </template>
                        </b-table>


                    </b-container>
                </b-col>

            </b-row>


        </b-container>



    </div>
</template>

<script>
    import axios from 'axios'
    import TopNav from '../components/top-nav';
    import LeftNav from '../components/left-nav';


    export default {
        name:'Nav_menu',
        props:[''],
        data () {
            return{
                items:[],
                fields: ['id','type_id','link_target', 'link_type','sort','status','action'],
            }
        },

        components: {
            TopNav,
            LeftNav,

        },

        computed: {},

        beforeMount() {},

        mounted() {
            axios({
                method: 'get',
                url: this.$store.state.domain+'/api/nav',

                // headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            })
                .then((res)=>{
                    console.log(res);
                    this.items = res.data.data;





                })
                .catch(function(error){
                    console.log(error)//错误处理 相当于error
                })
        },

        methods: {
            del(par){
                console.log(par)
                axios({
                    method: 'get',
                    url: this.$store.state.domain+'/api/nav/del/'+par,

                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                })
                    .then((res)=>{
                        console.log(res);
                        if (res.data.code == 0 ){
                            location. reload()
                        }
                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })
            },
            edit(par){
                console.log(par)
                axios({
                    method: 'get',
                    url: this.$store.state.domain+'/api/nav/read/'+par,

                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                })
                    .then((res)=>{
                        console.log(res);
                        if (res.data.code == 0 ){
                            this.$router.push({path : '/nav_update', query : { info:res.data.data }})
                        }
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
