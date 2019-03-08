// pages/client/clientpage.js
Page({
  data: {
    vender_info:[]
  },
  onLoad(){
    var vender_info = wx.getStorageSync("vender_info")
    this.setData({
      vender_info: vender_info
    })
    wx.setNavigationBarTitle({
      title: vender_info.vender_name
    })
  }
})