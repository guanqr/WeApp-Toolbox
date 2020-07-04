// pages/temperature-list/temperature-list.js
//import * as echarts from '../../ec-canvas/echarts';
var echarts = require("../../ec-canvas/echarts.js");

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '近七日温度统计',
      left: 'center'
    },
    color: ["#37A2DA"],
    //color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    //legend: {
    //  data: ['张三', '李四', '王五'],
    //  top: 30,
    //  left: 'center',
    //  backgroundColor: 'white',
    //  z: 100
    //},
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      min: 36,
      max: 37,
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '张三',
      type: 'line',
      smooth: true,
      data: [36.1, 36.5, 36.3, 36.7, 36.4, 36.5, 36.2]
    }]
    /*series: [{
      name: '张三',
      type: 'line',
      smooth: true,
      data: [36.1, 36.5, 36.3, 36.7, 36.4, 36.5, 36.2]
    }, {
      name: '李四',
      type: 'line',
      smooth: true,
      data: [36.3, 36.5, 36.5, 36.2, 36.4, 36.2, 36.7]
    }, {
      name: '王五',
      type: 'line',
      smooth: true,
      data: [36.6, 36.4, 36.7, 36.2, 36.3, 36.4, 36.6]
    }]*/
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },
  seeDetail: function () {
    setTimeout(function () {
        wx.navigateTo({
          url: '/pages/temperature-list-detail/temperature-list-detail',
      })
    }, 50)
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