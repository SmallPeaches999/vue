<template>
  <div id="app">
    <h1 v-text="msg"></h1>
    <h1 v-html="msg"></h1>
    <input  v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{ li :item.isFinished}" v-on:click="toggleFinish(item)">
        {{ item.label }}
      </li>

    </ul>

  </div>
</template>

<script>
import Stor from './stor'
console.log(Stor)
export default {
    data : function() {
      return {
        msg: '<span>+++</span>this is a todo  list------',
        items:Stor.fetch(),
        newItem:''
      }
    },
    methods:{
      toggleFinish:function (item) {
        item.isFinished = !item.isFinished
      },
      addNew:function (){
        this.items.push({
          label: this.newItem,
          isFinished: false
        }),
        this.newItem = ''
      }
    },
    watch : {
      items : {
        handler : function (items){
          Stor.save(items)
        },
        deep :true
      }
    }
}
</script>

<style>
.li {
  text-decoration: underline;
}
.liC {
  color:red;
}
.liF{
  font-size:30px;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
