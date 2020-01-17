// components/toolCard/toolCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTool: function () {
      setTimeout(function () {
          wx.navigateTo({
            url: '/pages/relationship-calculator/relationship-calculator',
        })
      }, 50)
    },
  }
})
