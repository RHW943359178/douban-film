var API_URL = 'https://douban.uieee.com/v2/movie/subject/'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    mark: ' / '
    // #3377aa
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    // console.log(params)
    wx.request({
      url: API_URL + params.id,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          movie: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})