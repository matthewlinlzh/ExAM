//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    product:[
      {id:1, image: "/pic_resource/interior.jpg", product_name: "Product Section 1"},
      {id:2, image: "/pic_resource/modification.png", product_name: "Product Section 2"},
      {id: 3, image: "/pic_resource/fix.png", product_name: "Fix Car"},
      { id: 4, image: "/pic_resource/change.png", product_name: "Change" }
    ],
  },
  // 跳转页面并携带该页面的信息
  GoTOProduct:function(e){
    var product = this.data.product
    var product_length = product.length
    var image = ""
    var product_name = ""
    var id = e.currentTarget.id
    for (var i = 0; i < product_length; i++){
      if (id == product[i].id){
        image = product[i].image
        product_name = product[i].product_name
      }
    }
    wx.setStorageSync("image_path",image)
    wx.setStorageSync("product_name", product_name)
    wx.navigateTo({
      url: '/pages/product/product_section',
    })
  }
})
