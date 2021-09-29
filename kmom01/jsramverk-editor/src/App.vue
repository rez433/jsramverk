<template>
  <div>
    <TopMenu :savecntnt="savecntnt" />
    <TinyTxt :getcntnt="getcntnt" />
  </div>
</template>

 <script>
import TinyTxt from './components/TinyTxt.vue'
import topMenu from './components/TopMenu.vue'

export default {
  name: 'app',
  components: {
    'TinyTxt': TinyTxt,
    'TopMenu': topMenu
  },

  data: () => {
    return {
      editocntnt: null
    }
  },
  methods: {
    getcntnt(cnxt) {
      this.editocntnt = cnxt;
    },
    savecntnt() {
      console.log(this.editocntnt);
    }
  }
}
</script>

<style>
  body {
    background: #39516d;
    color: rgb(211, 201, 201);
  }
</style>
