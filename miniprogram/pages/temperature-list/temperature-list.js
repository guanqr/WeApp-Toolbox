// pages/temperature-list/temperature-list.js
//import * as echarts from '../../ec-canvas/echarts'; 调用echart绘制图像
var echarts = require("../../ec-canvas/echarts.js");

var name = [];
var date = [];
var temperature = [];
var Chart = null;

/*const app = getApp();

var option = {
  title: {
    text: '近七日温度统计（℃）',
    left: 'center'
  },
  color: ["#37A2DA"],
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
};

function initChart(canvas, width, height, dpr) {

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);*/

  //从云端获取数据
  /*const db = wx.cloud.database({});
  const cont = db.collection('temp');
  cont.get({
    success: function(res) {
      res.data.reverse();
      console.log(res.data);
      const name = [];
      const date = [];
      const temperature = [];
      for(var i=0; i<3; i++) {
        name.push(res.data[i].name);
        date.push(res.data[i].date);
        temperature.push(res.data[i].temperature);
      }
      option.xAxis[0].data = date;
      option.series[0].name = name;
      option.series[0].data = temperature;
      console.log(temperature)
      chart.setOption(option);
      //return chart;
    }
  });*/

/*  chart.setOption(option);
  return chart;
}*/

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      //onInit: initChart
      lazyLoad: true
    },
    temp: [],
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
    this.echartsComponnet = this.selectComponent('#mychart-dom-line');
    this.getData(); //获取数据
  },

  getData: function () {
  	/**
  	 * 此处的操作：
  	 * 获取数据json
  	 */
    //name = ["关其锐"];
    //date = ["2020-07-05", "2020-07-06", "2020-07-07", "2020-07-08", "2020-07-09", "2020-07-10", "2020-07-11"];
    //temperature = ["36.6", "36.2", "36.5", "36.5", "36.5", "36.5", "36.5"];

    //如果是第一次绘制
    if (!Chart){
      this.init_echarts(); //初始化图表
    }else{
      this.setOption(Chart); //更新数据
    }

    //从云端获取数据
    const db = wx.cloud.database();
    db.collection('temp').get({
      success: res => {
        name = [];
        date = [];
        temperature = [];
        res.data.reverse();
        //console.log(res.data);
        name.push(res.data[0].name);
        for(var i=6; i>=0; i--) {
          date.push(res.data[i].date);
          temperature.push(res.data[i].temperature);
        }
        //console.log(name);
        //console.log(date);
        //console.log(temperature);
        this.init_echarts();
      }
    });
  /*  wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: data,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        dataList = res.data;
        this.init_echarts();//初始化图表
      }
    });  */
  },
  //初始化图表
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      // Chart.setOption(this.getOption());
      this.setOption(Chart);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  setOption: function (Chart) {
    Chart.clear();  // 清除
    Chart.setOption(this.getOption());  //获取新数据
  },
  getOption: function () {
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '近七日温度统计（℃）',
        left: 'center'
      },
      color: ["#37A2DA"],
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
        data: date,
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
        name: name,
        type: 'line',
        smooth: true,
        data: temperature,
      }]
    };
    //console.log(name);
    //console.log(date);
    //console.log(temperature);
    return option;
  },

  refresh: function () {
    this.setOption(Chart); //更新数据
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