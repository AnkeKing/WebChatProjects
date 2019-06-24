function http(url, data, method) {
  wx.showToast({
    title: "加载中...",
    icon: "loading"
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: method || 'get',
      success: function (res) {//成功
        if (res.statusCode == 200) {
          resolve(res);
        }

      },
      fail: function (err) {//失败
        reject(err);
      },
      complete: function (res) {//完成
        wx.hideToast();
      }
    })
  })
}
module.exports = http;