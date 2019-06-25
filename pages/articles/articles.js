// pages/articles/articles.js
const api = require("../../config.js");
const http = require('../../http/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData: [],
    //轮播图数据
    mySwiper: {
      imgUrls: [],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    },
    delData: [
      {
        img: "https://hbimg.huabanimg.com/bcb5fe6e024110b5607c1bbc3d91ee15a024a5a81e400-XrmA18_fw658",
        txt: "差不多先生",
        magRigth: "0rpx"
      },
      {
        img: "https://hbimg.huabanimg.com/6323b803b534ae03e93d1a3aff709893820c451e91844-RFGRvV_fw658",
        txt: "如果的事",
        magRigth: "0rpx"
      },
      {
        img: "https://hbimg.huabanimg.com/47342a0c226d9582a09d912484b34cb2ea25bcd634c58-jFLBBm_fw658",
        txt: "情话微甜",
        magRigth: "0rpx"
      }, {
        img: "https://hbimg.huabanimg.com/985335b39b00026da0158c49b7c867f20a5195513cc05-d5qe1Y_fw658",
        txt: "望",
        magRigth: "0rpx"
      },
      {
        img: "https://hbimg.huabanimg.com/dfd4bc9a9d23c60556de43ba3f501e65be1a1c8821bb7-jCyB7U_fw658",
        txt: "后来",
        magRigth: "0rpx"
      },
      {
        img: "https://hbimg.huabanimg.com/d19f3cfd0ced89aa116dbea9aa919bcbc7765ccf30e69-13H2tK_fw658",
        txt: "南下",
        magRigth: "0rpx"
      }
    ]
    ,
    touchS: [0, 0],
    touchE: [0, 0],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    let imgUrls = [];
    // http(api.news_list).then(res => {//新闻列表
    // for(var i=0;i<3;i++){
    //   imgUrls.push(res.data[0].headImgSrc);
    //   var str ="mySwiper.imgUrls";
    //   this.setData({
    //     [str]: imgUrls,
    //     newsData: res.data,
    //   })
    // }
    // app.globalData.newsData = this.data.newsData;
    //   console.log("--",res.data);
    // })
    const ctx = wx.createCanvasContext("pie-chart");
    const grd = ctx.createCircularGradient(280, 170, 150);
    grd.addColorStop(0.79, '#fff')
    grd.addColorStop(0.81, '#8B00FF')
    grd.addColorStop(0.83, '#0000FF')
    grd.addColorStop(0.85, '#00FFFF')
    grd.addColorStop(0.87, '#00FF00')
    grd.addColorStop(0.89, '#FFFF00')
    grd.addColorStop(0.93, '#FF7F00')
    grd.addColorStop(0.95, '#FF0000')
    grd.addColorStop(1, '#fff')

    // Fill with gradient
    ctx.setFillStyle(grd)//将渐变色渲染入矩形
    ctx.fillRect(0, 70, 249, 520)//起点坐标为，长宽 矩形

    ctx.beginPath();
    ctx.arc(
      (wx.getSystemInfoSync().windowWidth - wx.getSystemInfoSync().windowWidth * 0.7) / 2 + wx.getSystemInfoSync().windowWidth / 2 * 0.7
      , 199,
      wx.getSystemInfoSync().windowWidth / 2 * 0.7,
      0,
      2 * Math.PI)
    ctx.setFillStyle('rgba(242,156,177,0.3)')
    ctx.fill();
    var array = [20, 50, 20, 30];
    var colors = ["#D6D6D6", "#AEEEEE", "rgba(0,0,0,0.5)", "#DDA0DD"];
    var total = 0;
    for (var val = 0; val < array.length; val++) {
      total += array[val];
    }
    var point = { x: (wx.getSystemInfoSync().windowWidth - wx.getSystemInfoSync().windowWidth * 0.7) / 2 + wx.getSystemInfoSync().windowWidth / 2 * 0.7, y: 199 };
    var radius = 100;

    for (var i = 0; i < array.length; i++) {
      ctx.beginPath();
      var start = 0;
      if (i > 0) {
        for (var j = 0; j < i; j++) {
          start += array[j] / total * 2 * Math.PI;
        }
      }
      ctx.arc(point.x, point.y, radius, start, start + array[i] / total * 2 * Math.PI, false);
      //圆饼边框
      ctx.setLineWidth(2)
      ctx.lineTo(point.x, point.y);
      ctx.setStrokeStyle('#F5F5F5');
      ctx.setFillStyle(colors[i]);
      ctx.fill();
      ctx.closePath();
      // var txt = array[j]+"";
      // ctx.setFontSize(17)
      // ctx.setFillStyle("#ccc");
      // ctx.fillText(txt, array[i]*2,70+array[i]*0.4);
      ctx.stroke();
    }
    ctx.draw();
  },
  entryDetail(event) {
    wx.navigateTo({ url: '/pages/articlesDetail/articlesDetail?itemindex=' + event.currentTarget.dataset.itemindex });

  },
  touchStart: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.setData({
      touchS: [sx, sy]
    })
  },
  touchMove: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.setData({
      touchE: [sx, sy]
    })
    let delData = this.data.delData;
    if (wx.getSystemInfoSync().windowWidth - sx > 100) {
      delData[e.currentTarget.dataset.moveindex].magRigth = "100px"
      this.setData({
        delData: delData
      })
    }else if(wx.getSystemInfoSync().windowWidth - sx <=0){
      delData[e.currentTarget.dataset.moveindex].magRigth = "0px"
      this.setData({
        delData: delData
      })
    }else {
      delData[e.currentTarget.dataset.moveindex].magRigth = wx.getSystemInfoSync().windowWidth - sx + "px"
      this.setData({
        delData: delData
      })
    }
  },
  touchEnd: function (e) {
    let start = this.data.touchS;
    let end = this.data.touchE;
    console.log("start", start);
    console.log("end", end);
    if (start[0] < end[0] - 50) {
      console.log('右滑')
    } else if (start[0] > end[0] + 50) {
      
    } else {
      console.log('静止')
    }
  },
  del(e){
    let delData = this.data.delData;
    delData.splice(e.currentTarget.dataset.moveindex,1);this.setData({
        delData: delData
      })
  },
  cancel(e){
    let delData = this.data.delData;
    delData[e.currentTarget.dataset.moveindex].magRigth = "0px";
      this.setData({
        delData: delData
      })
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