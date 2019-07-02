<template>
  <div id="app">
    <div class="btn-group">
      <button
        v-for="(item, index) in buttonList"
        :key="'button_' + index"
        @click="choose(index)">{{ item.name }}</button>
    </div>
    <h3 class="title">{{ currentName }}</h3>
    <div class="notice-wrapper">
      <NoticeBar
        v-if="update"
        :text="isHtml ? htmlList : list"
        :isRoll="isRoll"
        :isRollComplete="isRollComplete"
        :isHtml="isHtml" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import NoticeBar from 'vue-simple-noticebar'
Vue.use(NoticeBar)

export default {
  name: 'app',
  data () {
    return {
      list: [
        '这是一条很长很长的信息。。。。不信你看完啊啊啊啊。。。是不是真的很长。。。',
        '这是第一条信息哦',
        '这是第二条信息哦',
        '这是第三条信息哦',
        '这是第四条信息哦',
        '这是第二条很长很长的信息。。。。不信你看完啊啊啊啊。。。是不是真的很长。。。',
      ],
      htmlList: [
        '这是一条很<span style="font-weight: bold; color: #000;">长很长的</span>信息。。。。不信你看完啊啊啊啊。。。是不是真的很长。。。',
        '这是<span style="font-weight: bold;color:blue;">第一条</span>信息哦',
        '这是<span style="font-weight: bold;color:blue;">第二条</span>信息哦',
        '这是<span style="font-weight: bold;color:blue;">第三条</span>信息哦',
        '这是<span>第四条</span>信息哦',
        '这是第二条很<span style="font-weight: bold;">长很长的</span>信息。。。。不信你看完啊啊啊啊。。。是不是真的很长。。。',
      ],
      buttonList: [
        {
          name: '默认模式',
        },
        {
          name: '超出全滚动模式',
        },
        {
          name: '超出可视滚动模式',
        },
        {
          name: 'HTML模式',
        }
      ],
      currentName: '默认模式',
      isRoll: false,
      isRollComplete: true,
      update: true,
      isHtml: false,
    }
  },
  methods: {
    choose (index) {
      this.update = false
      this.$nextTick(() => {
        this.currentName = this.buttonList[index].name
        this.isRoll = (index === 1 || index === 2)
        this.isRollComplete = !(index === 2)
        this.isHtml = (index === 3)
        this.update = true
      })
    },
  },
}
</script>

<style lang="scss">
#app {
  .btn-group {
    margin-left: 40px;

    button {
      margin: 10px;
    }
  }

  h3.title {
    padding-left: 50px;
  }

  .notice-wrapper {
    width: 800px;
    height: 80px;
    padding: 0 20px;
    margin: 0 auto;
    font-size: 14px;
    background: #fd0;
    color: #f08080;
    border: 1px dashed #f08080;
  }
}
</style>
