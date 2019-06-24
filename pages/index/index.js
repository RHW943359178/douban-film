//获取应用实例
const app = getApp()
const API_URL = 'https://douban.uieee.com/v2/movie/top250'

Page({
  data: {
    movies: [],
    title: '加载中'
  },
  onLoad: function () {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: API_URL,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: res => {
        let title = res.data.title
        wx.hideToast()
        this.setData({
          title,
          movies: res.data.subjects
        })
        console.log(res, 11111)
      },
      fail: err => {
        console.log(err)
      },
      complete: function() {
        // complete
      }
    })
  }
})
