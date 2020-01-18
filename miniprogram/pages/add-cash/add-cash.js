// pages/add-cash/add-cash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'income', value: '收入' },
      { name: 'pay', value: '支出' },
    ],
  },

  titleInput: function (e) {
    let title = '生活费';
    this.setData({
      title: e.detail.value
    })
    //console.log('收支名称：', this.data.title)
  },

  radioChange: function (e) {
    let incomeOrPay = 'income';
    let fontColor = '#00aa00';
    let mark = '+';
    this.setData({
      incomeOrPay: e.detail.value
    })
    //console.log('收支类型：', this.data.incomeOrPay)
    if (this.data.incomeOrPay == 'income') {
      this.setData({
        fontColor: '#00aa00',
        mark: '+'
      })
    } else {
      this.setData({
        fontColor: '#aa0000',
        mark: '-'
      })
    }
    //console.log('收支颜色：', this.data.fontColor)
  },

  moneyInput: function (e) {
    let money = 0;
    this.setData({
      money: e.detail.value
    })
    //console.log('收支金额：', this.data.money)
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
    db.collection('cashbook').add ({
      data: {
        title: this.data.title,
        incomeOrPay: this.data.incomeOrPay,
        fontColor: this.data.fontColor,
        mark: this.data.mark,
        money: this.data.money,
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
        //console.log('添加成功，记录 _id:', res._id)
      },
      fail: err => {
        wx.showToast ({
          icon: 'none',
          title: '添加失败'
        })
        //concole.error('添加失败', err)
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