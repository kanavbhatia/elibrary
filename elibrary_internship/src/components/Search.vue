<template>
 <div id="search">
  <div class="input-group mb-3">
    <input type="text" class="form-control"  v-model="bookName" placeholder="Enter Book name"  aria-describedby="button-addon2">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" @click='this.Search' type="button" id="button-addon2" >Add</button>
    </div>
  </div>
</div>
</template>

<script>
// eslint-disable-next-line 
/* eslint-disable */
/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/
export default {
  name: 'search',
  data () {
    return {
      bookName: ''
    }
  },
  methods: {
  Search() {
    console.log(this.bookName)
    let a =  this.bookName.split(' ')
    var i
    var len = a.length
    let arr = ''
    for (i = 0; i<len -1 ; i++)
    {
      arr = arr + a[i] + '+';
    } 
    arr = arr + a[len-1]
    console.log(arr)
    let url = 'http://openlibrary.org/search.json?q=' + arr
    console.log(url)
    this.$http.get(url).then(function (response) {
      console.log(response.body.docs)
      this.$parent.info.push(response.body.docs)
      this.$router.push('/display')
      })
    }
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
