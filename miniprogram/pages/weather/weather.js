// pages/weather/weather.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['北京', '上海', '杭州'],
    city: '',
    cityName: '',
    cityTemp: '',
    cityWea: '',
    updateTime: ''
  },

  bindPickerChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
    this.data.city = this.data.array[e.detail.value]
    this.setData(this.data)
    if (e.detail.value == 0){
      this.data.city = 'beijing'
    }
    if (e.detail.value == 1){
      this.data.city = 'shanghai'
    }
    if (e.detail.value == 2){
      this.data.city = 'hangzhou'
    }
    //console.log('设定：', this.data.city)
    this.setData(this.data)
  },
  
  getWeather: function() {
    if (this.data.city == "") {
      wx.showToast({
        title: '请先选择城市！',
        icon: 'loading',
        duration: 1500
      })
    }
    else {
      const weatherApi = 'https://api.seniverse.com/v3/weather/now.json?&language=zh-Hans&unit=c'
      wx.request({
        url: weatherApi,
        data: {
          key: 'SVzUflQFz52yIkOVA',
          location: this.data.city
        },
        header: {
          'Content-Type': 'json'
        },
        success: res => {
          console.log(res.data.results[0])
          this.data.cityName = res.data.results[0].location.name
          this.data.cityTemp = res.data.results[0].now.temperature
          this.data.cityWea = res.data.results[0].now.text
          this.data.updateTime = res.data.results[0].last_update
          this.setData(this.data)
          //console.log(this.data)
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})