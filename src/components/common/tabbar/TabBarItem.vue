<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive" >
      <slot name="item-icon-active"></slot>
    </div>

    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>

</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'pink'
    },

  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      // indexOf 检查 this.$route.path（活跃的路径）里面有没有当前的path
      // 没有找到 当前的，那么返回 -1
      // 找到了 ，不是-1
      // 只有当前活跃的路径，才配拥有 isActive 状态
      // return this.$route.path.indexOf(this.path) !== -1

      // 这样用也可以
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /* .active {
    color: rgb(255, 58, 91);
  } */

</style>