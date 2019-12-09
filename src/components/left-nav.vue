<template>
    <div class="menu" >
        <ul class="daohang">
            <li>分类管理</li>
            <li><router-link to="/about">分类列表</router-link></li>
            <li><router-link to="/category_add">分类添加</router-link></li>
            <li>商品管理</li>
            <li><router-link to="/product_read">商品列表</router-link></li>
            <li><router-link to="/product_add">商品添加</router-link></li>
            <li><router-link to="/Nav_menu">导航菜单</router-link></li>
            <li><router-link to="/Nav_add">导航添加</router-link></li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "left-nav"
    }
</script>

<style scoped >
    .menu{
        /*z-index: 100;*/
        /*position: absolute;*/
        width: 100%;
        /*height: 500px;*/
    }
    .daohang{
        list-style: none;
        text-align: center;
        padding-left: 0px;
        margin-top: 30px;
    }
    .daohang li{
        width: 100%;
        height: 40px;
        border: 1px solid #ddd;
        line-height: 40px;
    }
</style>