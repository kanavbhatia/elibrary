<template>
    <div>
      <ol>
        <div v-for="result in data" v-bind:key="result.author_key">
            <div v-for="a in result" v-bind:key="a.author">
                <li class="list-group-item" ><h2>Title : {{a.title_suggest}}</h2></li>
                <li class="list-group-item" ><h3>Author(s):</h3></li>
                <ul class="list-group">
                <div  v-for="b in a.author_name" v-bind:key="b.authr">
                 <li class="list-group-item" ><h4>
                 {{b}}
                 </h4>
                 </li>
                </div>
                <li class="list-group-item" ><h3>Publisher(s) :</h3></li>
                <div  v-for="d in a.publisher" v-bind:key="d.authr">
                 <li class="list-group-item" ><h4>
                 {{d}}
                 </h4>
                 </li>
                </div></ul><hr>
            </div>
        </div>
      </ol>
    </div>
</template>
<script>
export default {
  name: 'display',
  data () {
    return {
      data: this.$parent.info
    }
  }
}
</script>
<style scoped>
hr{
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  height: 5px;;
}
ol{
    margin-right: 10%;
    margin-left: 10%;
    border-radius: 4px;
}
h2{
  background: #8D8741
}
.list-group-item{
  padding: 0px;
  border: 0px;
}
h3{
  background: #daad86
}
h4{
  background: #fbeec1
}
</style>
