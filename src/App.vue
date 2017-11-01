<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
	margin:0;
	padding:0;
	list-style: none;
	text-decoration: none;
}
html,body,#app{
	background: #f1f1f1;
}
</style>
