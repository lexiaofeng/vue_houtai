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
                    <!--          //右边内容-->
                        <b-form   @reset="onReset" v-if="show">
                        <b-card bg-variant="light">


                            <b-row>
                                <b-col sm="1"></b-col>
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
                                <b-col sm="1"></b-col>
                                <b-col sm="5">
                                    <b-form-group
                                            id="fieldset-horizontal"
                                            label-cols-sm="4"
                                            label-cols-lg="3"

                                            label="商品名称"
                                            label-for="input-horizontal"
                                    >
                                        <b-form-input id="input-horizontal" v-model="product.name"></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col sm="1"></b-col>
                                <b-col sm="3">
                                    <b-form-group
                                            id="paixu"
                                            label-cols-sm="4"
                                            label-cols-lg="3"

                                            label="排序"
                                            label-for="input-horizontal"
                                    >
                                        <b-form-input id="paixu" v-model="product.sort"></b-form-input>

                                    </b-form-group>
                                </b-col>
                                <b-col sm="3">
<!--                                    <b-form-group-->
<!--                                            id="sale_num"-->
<!--                                            label-cols-sm="4"-->
<!--                                            label-cols-lg="3"-->

<!--                                            label="销量"-->
<!--                                            label-for="input-horizontal"-->
<!--                                    >-->
<!--                                        <b-form-input id="sale_num" v-model="product.sale_num" disabled></b-form-input>-->

<!--                                    </b-form-group>-->
                                </b-col>
                                <b-col sm="3">
                                    <b-form-group
                                            id="status"
                                            label-cols-sm="3"
                                            label-cols-lg="3"

                                            label="状态"
                                            label-for="status"
                                    >


                                        <b-form-input v-model="product.status" ></b-form-input>


                                    </b-form-group>
                                </b-col>
                            </b-row>






<!--                            <b-form-group-->
<!--                                    id="sale_num"-->
<!--                                    label-cols-sm="4"-->
<!--                                    label-cols-lg="3"-->

<!--                                    label="商品的销量"-->
<!--                                    label-for="input-horizontal"-->
<!--                            >-->
<!--                                <b-form-input id="sale_num" ></b-form-input>-->
<!--                            </b-form-group>-->
                        <b-row>
                            <b-col sm="1"></b-col>
                            <b-col sm="10">
                                <b-form-group
                                        id="content"
                                        label-cols-sm="1"
                                        label-cols-lg="1"

                                        label="描述"
                                        label-for="input-horizontal"
                                >
                                    <b-form-input id="content" v-model="product.content"></b-form-input>
                                </b-form-group>
                            </b-col>

                        </b-row>


<!--                            onchange事件触发-->
                            <b-row>
                                <b-col sm="1"></b-col>
                                <b-col sm="5">
                                    <div  v-show="this.display">
                                        <b-form-group
                                                id="attr1"
                                                label-cols-sm="4"
                                                label-cols-lg="3"

                                                :label="this.proper[0]"
                                                label-for="attr1"
                                        >
                                            <b-row><b-col sm="6" ><b-form-input id="content"  v-model="value_first"></b-form-input></b-col>

                                                <b-button variant="outline-primary" @click="add1()" >add</b-button>
                                            </b-row>
                                        </b-form-group>
                                    </div>
                                </b-col>
                                <b-col sm="1"></b-col>
                                <b-col sm="5">
                                    <div  v-show="this.display">
                                        <b-form-group
                                                id="attr2"
                                                label-cols-sm="4"
                                                label-cols-lg="3"

                                                :label="this.proper[1]"
                                                label-for="attr2"
                                        >
                                            <b-row>
                                                <b-col sm="6">
                                                    <b-form-input id="content" v-model="value_second"></b-form-input>
                                                </b-col>


                                                <b-button variant="outline-primary" @click="add2()">add</b-button>
                                            </b-row>
                                        </b-form-group>
                                    </div>
                                </b-col>

                            </b-row>


<!--                            库存-->
                            <div v-for="(user,index) in this.arr" :key="'info2-'+index">


                                <b-form-row class="row">
                                    <b-col sm="1">
                                        <b-form-input v-model="user.attr1"  disabled></b-form-input>
                                    </b-col>
                                    <b-col sm="1">
                                        <b-form-input v-model="user.attr2"  disabled></b-form-input>
                                    </b-col>
                                    <b-col sm="2">


                                    <b-form-group
                                            id="price"
                                            label-cols-sm="3"
                                            label-cols-lg="3"

                                            label="原价"
                                            label-for="price"
                                    >


                                                <b-form-input  v-model="sku_original_price[index]"></b-form-input>


                                    </b-form-group>
                                    </b-col>
                                    <b-col sm="2">

                                    <b-form-group
                                            id="sale"
                                            label-cols-sm="3"
                                            label-cols-lg="3"

                                            label="售价"
                                            label-for="sale"
                                    >


                                            <b-form-input  v-model="sku_price[index]"></b-form-input>


                                    </b-form-group>
                                    </b-col>
                                    <b-col sm="2">
                                        <b-form-group
                                                id="sku"
                                                label-cols-sm="3"
                                                label-cols-lg="3"

                                                label="库存"
                                                label-for="sku"
                                        >


                                            <b-form-input  v-model="sku_quantity[index]"></b-form-input>




                                        </b-form-group>
                                    </b-col>


                                    <b-col sm="2">

                                        <b-form-group
                                                id="sort"
                                                label-cols-sm="3"
                                                label-cols-lg="3"

                                                label="排序"
                                                label-for="sort"
                                        >


                                                <b-form-input v-model="sku_sort[index]" ></b-form-input>


                                        </b-form-group>
                                    </b-col>
                                    <b-col sm="2">
                                        <b-form-group
                                                id="sku_status"
                                                label-cols-sm="3"
                                                label-cols-lg="3"

                                                label="状态"
                                                label-for="sku_status"
                                        >


                                            <b-form-input v-model="sku_status[index]" @blur="getsku(index)"></b-form-input>


                                        </b-form-group>

                                    </b-col>


                                </b-form-row>
                            </div>

                            <div v-for="(user,index ) in this.tags" :key="index" v-show="display_tags">
                                <b-row>
                                    <b-col sm="1"></b-col>
                                    <b-col sm="4">
                                        <b-form-group
                                                id="tag_id"
                                                label-cols-sm="4"
                                                label-cols-lg="3"

                                                label="标签类型"
                                                label-for="tag_id"
                                        >
                                            <b-form-select  v-model="selecteds[index]" @change="exchange(selecteds,index)" :options="tag_options"></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col sm="4">
                                        <b-form-group
                                                id="tag_value"
                                                label-cols-sm="3"
                                                label-cols-lg="3"

                                                label="标签值"
                                                label-for="tag_value"
                                        >


                                            <b-form-input  v-model="tagval[index]"  @blur="getvalue(index)"></b-form-input>


                                        </b-form-group>
                                    </b-col>
                                    <b-col sm="3">
                                        <b-form-group
                                                id="tag_status"
                                                label-cols-sm="3"
                                                label-cols-lg="3"

                                                label="状态"
                                                label-for="tag_status"
                                        >


                                            <b-form-input  v-model="tagstatus[index]" @blur="getStatus(index)"></b-form-input>


                                        </b-form-group>
                                    </b-col>

                                </b-row>
                            </div>
<!--                            添加标签-->
<!--                            <b-row>-->
                                <b-button variant="outline-primary" @click="gettag()">add tags+</b-button>
<!--                            </b-row>-->







                                <br>
                                <br>
                                <b-button  variant="primary" @click="Submit()" >Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>




                        </b-card>

                    </b-form>

                    <!--          分页-->





                </b-col>
            </b-row>
        </b-container>


    </div>
</template>

<script>
    import axios from 'axios'
    import TopNav from '../components/top-nav';
    import LeftNav from '../components/left-nav';
    import qs from 'qs';

    export default {
        name:'Product_add',
        props:[''],
        data () {
            return{
                // perPage: 2,
                // currentPage: 2,
                items:[],
                data:'',
                show: true,
                selected: null,
                options: [
                    // { value: null, text: 'Please select an option' },


                ],
                attr:'lel ',
                proper:[],
                display:null,
                value_first:'',
                value_second:'',
                attr1_value:[],
                attr2_value:[],
                arr:[],
                tags:[],
                display_tags:false,
                tag_options:[
                    {value:1,text:'保质期'},
                    {value:2,text:'促销宣传语'},
                ],
                sku_original_price:[],
                sku_price:[],
                sku_quantity:[],
                sku_sort:[],
                sku_status:[],



                // product_tag
                tag_data:[],



                tagval:[],
                selecteds:[],
                tagstatus:[],

                //product
                product:{"category_id": '', "name": '',"sale_num":0,"content":"","sort":'',"status":''},

                //sku
                sku:[],
            }
        },

        components: {
            TopNav,
            LeftNav,

        },

        computed: {
            rows() {
                return this.items.length
            }
        },

        beforeMount() {},

        mounted() {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:8080/laravel/public/api/category',

                headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            })
                .then((res)=>{
                    // console.log(res.data.data);

                    this.items = res.data.data;

                    // console.log(this.items);

                    for (let index in this.items){

                        this.options.push({value:this.items[index].id,text:this.items[index].name})
                    }
                    // console.log( this.options)



                })
                .catch(function(error){
                    console.log(error)//错误处理 相当于error
                })




        },

        methods: {
            getsku(index){
                // console.log(this.arr)
                this.sku.push({"original_price":this.sku_original_price[index],"price":this.sku_price[index],"attr1":{[this.proper[0]]:this.arr[index].attr1}, "attr2":{[this.proper[1]]:this.arr[index].attr2},"quantity":this.sku_quantity[index],"sort":this.sku_sort[index],"status":this.sku_status[index]})
                console.log(this.sku)
            },
            getStatus(index){
                this.tag_data[index].status=this.tagstatus[index]
                this.tag_data[index].category_id = this.product.category_id
                console.log(this.tag_data)
                console.log(this.product)
            },
            getvalue(index){

                this.tag_data[index].value=this.tagval[index]
                console.log(this.tag_data)
            },
            gettag(){

                this.tags.push('')
                this.display_tags = true
            },
            add1() {
                this.attr1_value.push(this.value_first)
              // console.log(this.attr1_value)
                if (this.attr2_value!=null){
                    if (this.attr1_value.length==1){
                        this.arr = [];
                        for (let ind in this.attr2_value){
                            this.arr.push({"attr1":this.attr1_value[0],"attr2":this.attr2_value[ind]})
                        }

                    }
                    if(this.attr1_value.length>1){
                        this.arr = [];
                        for (let ind in this.attr2_value){
                            for (let a in this.attr1_value){
                                this.arr.push({"attr1":this.attr1_value[a],"attr2":this.attr2_value[ind]})
                            }
                        }
                    }


                }

                console.log(this.arr)
            },
            add2() {
                this.attr2_value.push(this.value_second)
                // console.log(this.attr2_value)
                if (this.attr1_value!=null){
                    if (this.attr2_value.length==1){
                        this.arr = [];
                        for (let ind in this.attr1_value){
                            this.arr.push({"attr1":this.attr1_value[ind],"attr2":this.attr2_value[0]})
                        }
                    }
                    if(this.attr2_value.length>1){
                        this.arr = [];
                        for (let ind in this.attr2_value){
                            for (let a in this.attr1_value){
                                this.arr.push({"attr1":this.attr1_value[a],"attr2":this.attr2_value[ind]})
                            }
                        }
                    }



                }

                console.log(this.arr)

            },
            exchange(val,index){
                console.log(val[index])
                this.tag_data.push({"tag_id":val[index]});
                // console.log(this.tag_data);
            },
            change(a){
                //product 和 tag 添加
                this.product.category_id = a

                console.log(this.product)




                this.proper =[];


                console.log(a)
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8080/laravel/public/api/category/read/'+a,

                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                })
                    .then((res)=>{
                        // console.log(res);
                        let datas = JSON.parse(res.data.data.property);
                        // console.log(datas);

                        for(let a in datas ){
                            this.proper.push(datas[a]);
                        }
                        console.log(this.proper);
                        this.display = true;






                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })
            },
            del(par){

                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8080/laravel/public/api/category/del?id='+par,

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
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8080/laravel/public/api/category/read/'+par,

                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                })
                    .then((res)=>{
                        // console.log(res);
                        this.data = res.data.data;
                        console.log(this.data);
                        this.$router.push({path : '/category_read', query : { info:this.data }})





                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })
            },
            Submit(){
                // return false
                let data={};
                data['product']=this.product;
                data['tag']=this.tag_data;
                data['sku']=this.sku;
                // console.log(data.product)
                axios({
                    method: 'post',
                    url: this.$store.state.domain+'/api/product/add',
                    data: qs.stringify(data),
                    // headers: { 'Content-Type':'application/json' },
                })
                    .then((res)=>{
                        console.log(res);
                        // if (res.data.code == 0){
                        //     location. reload()
                        // }

                    })
                    .catch(function(error){
                        console.log(error)//错误处理 相当于error
                    })



            },
            onReset(){

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
    .edit{
        background-color: #718498;
        color: white;
    }
    .del{
        background-color: #42b983;
        color: white;
    }






</style>
