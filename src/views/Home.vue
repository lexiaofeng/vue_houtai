<template>
  <div class="home">


    <TopNav></TopNav>

    <b-container class="bv-example-row" fluid>
      <b-row class="text-center">
        <b-col cols="2" class="caidan">
          <LeftNav></LeftNav>
        </b-col>
        <b-col cols="10" class="neirong">

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

export default {
  name:'home',
  props:[''],
  data () {
        return{

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
