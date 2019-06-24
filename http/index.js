function http(url, data, method) {
  wx.showToast({
    title: "加载中...",
    icon: "loading"
  })
  return new Promise((resolve, reject) => {
    console.log("data",data)
    wx.request({
      url,
      data:JSON.stringify(data),
      method: method || 'get',
      success: function (res) {//成功
          resolve(res);
      },
      fail: function (err) {//失败
        console.log("=========",err)
        reject(err);
      },
      complete: function (res) {//完成
        wx.hideToast();
      }
    })
  })
}
module.exports = http;