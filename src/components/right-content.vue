<template>
    <b-container class="bv-example-row">
        <br><br>

        <b-table :items="items" :fields="fields" id="my-table"  striped outlined responsive="sm">
            <template v-slot:cell(action)="row" >
                <b-button size="sm"  variant="outline-primary" class="mr-2" @click="edit(row.index)" >
                    编辑
                </b-button>
                <b-button size="sm"  variant="danger" class="mr-2" @click="del(row.index)">
                    删除
                </b-button>


            </template>
        </b-table>


    </b-container>

</template>

<script>
    import axios from 'axios'


    export default {
        name:'right-content',
        props:['items'],
        data () {
            return{
                item: [

                ],
                fields: ['id','name', 'sort','status','action'],
            }
        },

        components: {

        },

        computed: {

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

                    this.item = res.data.data;

                    console.log(this.items);





                })
                .catch(function(error){
                    console.log(error)//错误处理 相当于error
                })
        },

        methods: {
            del(a){
                // console.log(a)
                this.$emit('del',this.item[a].id);
            },
            edit(a){
                this.$emit('edit',this.item[a].id);
            },
        },

        watch: {}

    }


</script>

<style scoped>

</style>