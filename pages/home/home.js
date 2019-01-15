Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    consultionIconUrl: "/pages/images/item_family.png",
    consultionName:"快速咨询",
    consultionDesc: "名医在线",


    customIconUrl: "/pages/images/item_family.png",
    customName: "健康助理",
    customDesc: "专属客服",


    consultionArrowUrl:"/pages/images/g_right.png",

    findDoctorIconUrl: "/pages/images/item_family.png",
    findDoctorName: "找医生",
    findDoctorDesc: "全国名医",


    picConsultionIconUrl: "/pages/images/item_map.png",
    picConsultionName: "图文急诊",
    picConsultionDesc: "60秒内快速回复",

    phoneConsultionIconUrl: "/pages/images/item_msg.png",
    phoneConsultionName: "快捷电话",
    phoneConsultionDesc: "10分钟专家回电",

    oneConsulation:"一键咨询",

    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ]

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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击快速提问
   */
  quickInquiry: function () {
    wx.navigateTo({
      url: '../inquiry/quiry',
    })
  },

  /**
     * 用户点击找医生
     */
  findDoctor: function () {
   
  },

  /**
   * 用户点击快捷电话
   */
   phoneConsultion: function () {
    wx.navigateTo({
      url: '../phone/phone',
    })
  },

   /**
    * 用户点击图文急诊
    */
   pictureConsultion: function () {
    wx.showToast({
      title:'此功能暂未开通',
      icon:'none',
      duration: 2000,
    })
   },

   onShareAppMessage: function (res) {
     if (res.from === 'button') {
       // 来自页面内转发按钮
       console.log(res.target)
     }
     return {
       title: '自定义转发标题',
       path: '/page/user?id=123',
       success: function (res) {
         // 转发成功
       },
       fail: function (res) {
         // 转发失败
       }
     }
   }

})