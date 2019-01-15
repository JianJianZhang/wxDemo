// pages/my/my.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    subject: [{
      url:'/pages/images/item_map.png',
      name: '我的账号',
      arrow: '/pages/images/g_right.png'
    },

      {
        url: '/pages/images/item_map.png',
        name: '我的位置',
        arrow: '/pages/images/g_right.png'
      },

    {
      url: '/pages/images/item_msg.png',
      name: '健康档案',
      arrow: '/pages/images/g_right.png'
    }, 
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("myPage--监听页面加载")
    console.log(app.globalData)
    this.setData({
      userInfo: app.globalData.userInfo,
    })
  },

  /**
    * 生命周期函数--监听页面初次渲染完成
    */
  onReady: function () {
    console.log("myPage--监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("myPage--监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("myPage--监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("myPage--监听页面卸载")
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

  /**
   * 列表的点击事件
   */
  itemclick: function (event) {
    console.log(event.currentTarget.dataset.item.name)
    console.log(event.currentTarget.dataset.index)
    var name = event.currentTarget.dataset.item.name
    var pageUrl=null

    if (name =="我的账号"){
      pageUrl ='../account/account'
    } else if (name == "我的位置") {
      pageUrl = '../healthrecords/healthRecords'
    }else if (name == "健康档案"){
      pageUrl = '../healthrecords/healthRecords'
    }

    wx.navigateTo({
      url: pageUrl,
    })
   
  }

})