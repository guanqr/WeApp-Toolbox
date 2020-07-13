// pages/edit-information/edit-information.js
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

  locationInput: function (e) {
    let location = '杭州';
    this.setData({
      location: e.detail.value
    })
    //console.log('地点：', this.data.location)
  },
  addBtn: function(){
    const db = wx.cloud.database()
    db.collection('user').add ({
      data: {
        name: this.data.name,
        location: this.data.location,
      },
      success: res => {
        this.setData ({
          counterId: res._id,
          count: 1
        })
        wx.showToast ({
          title: '编辑成功'
        })
        console.log('编辑成功，记录 _id:', res._id)
      },
      fail: err => {
        wx.showToast ({
          icon: 'none',
          title: '编辑失败'
        })
        concole.error('编辑失败', err)
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