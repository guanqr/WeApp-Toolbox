// pages/add-temperature/add-temperature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  nameInput: function (e) {
    let name = '你的姓名';
    this.setData({
      name: e.detail.value
    })
    //console.log('姓名：', this.data.name)
  },

  temperatureInput: function (e) {
    let temperature = 36.5;
    this.setData({
      temperature: e.detail.value
    })
    //console.log('温度：', this.data.temperature)
  },

  locationInput: function (e) {
    let location = '杭州';
    this.setData({
      location: e.detail.value
    })
    //console.log('地点：', this.data.location)
  },

  bindDateChange: function (e) {
    let date = 0;
    this.setData({
      date: e.detail.value
    })
    //console.log('日期：', this.data.date)
  },

  addBtn: function(){
    const db = wx.cloud.database()
    db.collection('temp').add ({
      data: {
        name: this.data.name,
        temperature: this.data.temperature,
        location: this.data.location,
        date: this.data.date
      },
      success: res => {
        this.setData ({
          counterId: res._id,
          count: 1
        })
        wx.showToast ({
          title: '添加成功'
        })
        console.log('添加成功，记录 _id:', res._id)
      },
      fail: err => {
        wx.showToast ({
          icon: 'none',
          title: '添加失败'
        })
        concole.error('添加失败', err)
      }
    })
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