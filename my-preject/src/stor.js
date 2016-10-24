const STORAGE_KAY = 'todos-vue';
export default {
    // fetch () {}  => fetch: function(){}
  fetch ()  {
    return JSON.parse(window.localStorage.getItem(STORAGE_KAY) || '[]')
  },
  save  (items)  {
    window.localStorage.setItem(STORAGE_KAY,  JSON.stringify(items))
  }
}
