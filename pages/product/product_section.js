//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    product:"",
    image_path:""
  },
  onLoad: function (options) {
    var image_path = wx.getStorageSync("image_path")
    var product_name = wx.getStorageSync("product_name")
    this.setData({
      product: product_name,
      image_path: image_path
    })
    wx.setNavigationBarTitle({
      title: product_name,
    })
  }
  
})