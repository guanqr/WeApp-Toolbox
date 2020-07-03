// pages/bmi-calculator/bmi-calculator.js

Page({
  STANDARD: 22,
  rules: [
    [18.5, 24, 28],
    [18.5, 25, 30, 35, 40],
    [18.5, 23, 25, 30]
  ],
  ruleConfig: ['偏瘦', '正常', '偏胖', '肥胖', '重度肥胖', '极重度肥胖'],
  /**
   * 页面的初始数据
   */
  data: {
    bmi: {
      height: 170,
      weight: 60
    },
    score: 20.8,
    height: 0,
    weight: 0,
    index: 0,
    weightStandard: 63.6,
    physicalCondition: '正常',
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

  },

  changeHeight: function (e) {
    this.data.bmi.height = e.detail.value;
    this.setData(this.data);
  },

  changeWeight: function (e) {
    this.data.bmi.weight = e.detail.value;
    this.setData(this.data);
  },

  calculateBtn: function (e) {
    this.calculate();
    this.weightStandardCalculate();
    this.physicalConditionCalculate();
  },

  calculate: function () {
    let score = 0;
    let height = this.data.bmi.height / 100;
    let weight = this.data.bmi.weight;
    score = (weight / (height * height)).toFixed(1);
    this.setData({
      score: score
    })
  },

  weightStandardCalculate: function () {
    let weight = 0;
    let height = this.data.bmi.height / 100;
    weight = (this.STANDARD * (height * height)).toFixed(1);
    this.setData({
      weightStandard: weight
    })
  },

  //身体状况计算
  physicalConditionCalculate: function () {
    let rule = this.rules[0];
    let value = 0;
    let score = + this.data.score;
    let length = rule.length;
    if (score >= rule[length - 1]) {
      value = length;
    } else {
      for (let length = rule.length, i = length; i >= 1; --i) {
        if (score < rule[i] && score >= rule[i - 1])
          value = i;
      }
    }
    this.setData({
      physicalCondition: this.ruleConfig[value]
    })
  }
})