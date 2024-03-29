// pages/movies/movies.js
const api = require("../../config.js");
const http = require('../../http/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据
    mySwiper: {
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    },
    movies_list: [],
    movies_title: ['正在热映', "即将上映", "豆瓣top250"],
    hasTxt: false,
    keyword: "",
  },
  entryDetail(event) {
    wx.navigateTo({ url: '/pages/moviesDetail/moviesDetail?itemindex=' + event.currentTarget.dataset.itemindex })
  },
  setValue(event){
    this.setData({
      keyword: event.detail.value
    })
    if (event.detail.value != "") {
      this.setData({
        hasTxt: true
      })
    } else {
      this.setData({
        hasTxt: false
      })
    }
  },
  toSearch() {
    if(this.data.keyword!=""){
      wx.navigateTo({ url: '/pages/search/search?keyword=' + this.data.keyword });
    }
  },
  clearTxt() {
    this.setData({
      keyword: "",
      hasTxt: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var that = this;
    let movies_list = that.data.movies_list;
    http(api.in_theaters).then(res => {//正在热映
      movies_list.push(res.data);
      this.setData({
        movies_list: movies_list
      })
    }).then(res=>{
      http(api.coming_soon).then(res => {//即将上映
        movies_list.push(res.data);
        this.setData({
          movies_list: movies_list
        })
      })
    }).then(res=>{
      http(api.top250).then(res => {//top250
        movies_list.push(res.data);
        this.setData({
          movies_list: movies_list
        })
      })
    })
    app.globalData.movies_list = this.data.movies_list;
  },
  entryArea(event) {
    var areamsg = event.currentTarget.dataset.areamsg;
    wx.navigateTo({ url: '/pages/moviesSpecialArea/moviesSpecialArea?areamsg=' + areamsg + "&title=" + this.data.movies_title[areamsg] });
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
  getMoviesData() {

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