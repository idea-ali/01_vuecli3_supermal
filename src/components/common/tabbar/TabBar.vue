<template>
  <div id="tab">
    <!-- 插槽 -->
    <slot></slot>
    
  </div>

</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  }

}
</script>

<style scoped>
  #tab {
    display: flex;
    background-color: #cee5f5;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  }

</style>