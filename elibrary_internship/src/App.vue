<template>
  <div id="app">
    <h1>
    {{u_name}}
    </h1>
    <router-view/>
  </div>
</template>

<script>
import search from './components/Search'
import login from './components/login'
import display from '@/components/display'
// let textnode = document.createTextNode(name)
// let node = document.createElement('p')
// node.appendChild(textnode)
// document.getElementById('name1').appendChild(node)
export default {
  name: 'App',
  components: {
    search,
    display,
    login
  },
  data () {
    return {
      info: []
    }
  },
  computed: {
    u_name: function () {
      return 'Welcome, ' + window.name
    }
  }

}

</script>

<style>
h1{
  text-align: center;
  /* background: #bc986a; */
  margin-left: 10%;
  margin-right: 8%;
  margin-top: 10px;
  border-color: black

}
body{
  background: #659DBD !important;
}
</style>
