// pages/moviesDetail/moviesDetail.js
const api = require("../../config.js");
const http = require('../../http/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentMovie: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http(api.detail+options.itemindex).then(res => {//电影详情
      console.log("怎么肥事",res.data);
      this.setData({
        currentMovie:res.data
      })
    })
    // http(api.detail + "3").then(res => {//临时
    //   console.log("怎么肥事", res.data);
    //   this.setData({
    //     currentMovie: res.data,
    //   })
    // })

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