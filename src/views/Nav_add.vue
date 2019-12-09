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
                                <b-form-select  v-model="selected" @change="change(selected)" :options="options"></b-form-select>
                            </b-form-group>
                        </b-col>

                        <b-col sm="4">
                            <b-form-group
                                    label-cols-sm="3"
                                    label="名字"
                                    label-align-sm="right"
                                    label-for="name"
                            >
                                <b-form-input id="name" v-model="name"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
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
                                        id="link_type"
                                        label-cols-sm="4"
                                        label-cols-lg="3"

                                        label="链接类型"
                                        label-for="link_type"
                                >
                                    <b-form-select  v-model="selects" @change="change(selects)" :options="option"></b-form-select>
                                </b-form-group>
                            </b-col>
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
                            <b-col>
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
                        <b-row>
                            <b-col>
                                <div class="update">
                                    <!-- 通过input获取文件 ，为了美观使用v-show="false" 将input隐藏 通过input的change事件绑定fileChange-->
                                    <input type="file" v-show="true" accept="image" ref="input" @change="fileChange($event.target.files)">
                                    <!-- 通过$refs操作input的点击事件，调起文件选择 -->
<!--                                    <div @click="$refs.input.click()">-->
                                        <!-- 通过slot内容分发将头像的显示交给父组件,父组件可以自定义图片样式 -->
<!--                                        <slot>-->
                                            <img :src="img" alt="" class="info">
<!--                                        </slot>-->
<!--                                    </div>-->
                                </div>
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


    export default {
        name:'Nav_add',
        props:[''],
        data () {
            return{
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
                img:{},
                formData:{},
                name:'',
                sort:'',
                link_target:'',
                status:'',
                path:'',

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
                url: 'http://127.0.0.1:8080/laravel/public/api/category',

                headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            })
                .then((res)=>{
                    console.log(res);






                })
                .catch(function(error){
                    console.log(error)//错误处理 相当于error
                })
        },

        methods: {
            change(){

            },
            fileChange(files) {
                /* 通过FormData对象可以组装一组用 XMLHttpRequest发送请求的键/值对。
                它可以更灵活方便的发送表单数据，因为可以独立于表单使用。如果你把表单
                的编码类型设置为multipart/form-data ，则通过FormData传输的数据格式
                和表单通过submit() 方法传输的数据格式相同*/
                // 你可以自己创建一个FormData对象，然后通过调用它的append()方法添加字段，就像这样：
                // console.log(files[0]);
                this.formData = new FormData();
                this.formData.append('picture', files[0]);
                console.log(this.formData.get('picture'));
                axios({
                    method: 'post',
                    url: this.$store.state.domain+'/api/nav/img_up',
                    data: this.formData,
                    headers: { 'Content-Type':'multipart/form-data' },
                })
                    .then((res)=>{
                        console.log(res);
                        if (res.data.code == 0){
                            this.path = res.data.path;
                            this.formData.append('picture',this.path)
                        }

                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })







                this.formData.append('type_id',this.selected)
                this.formData.append('sort',this.sort)
                this.formData.append('title',this.name)
                this.formData.append('link_type',this.selects)
                this.formData.append('link_target',this.link_target)
                this.formData.append('status',this.status)

                // console.log(this.formData.get('picture'));
                // this.img  = files[0];
                // formData.append('thumb', files[0]);
                //由于我的请求接口需要openid所以需要再次向FormData对象添加openid字段，如果你们不需要可以不用此操作
                // formData.append('openid', localStorage.getItem('openid'));
                // 向父组件传递参数，事件为fileChange，参数为formData对象
                // this.$emit('fileChange', formData)
            },
            Submit(){
                axios({
                    method: 'post',
                    url: this.$store.state.domain+'/api/nav/add',
                    data: this.formData,
                    // headers: { 'Content-Type':'application/json' },
                })
                    .then((res)=>{
                        console.log(res);
                        if (res.data.code == 0){
                            location. reload()
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
