const app = getApp()

Page({
  data: {
    vender: [
      { id: 1, vender_pic: "/pic_resource/interior.jpg", vender_name: "Product Section 1", vender_product: ["/pic_resource/interior.jpg", "/pic_resource/modification.png", "/pic_resource/fix.png"] },
      { id: 2, vender_pic: "/pic_resource/modification.png", vender_name: "Product Section 2", vender_product: ["/pic_resource/modification.png"] },
      { id: 3, vender_pic: "/pic_resource/fix.png", vender_name: "Fix Car", vender_product: ["/pic_resource/interior.jpg", "/pic_resource/modification.png", "/pic_resource/fix.png"] },
    ],
    indicator_dots: true,
    autoplay: true,
    circular: true,
    autoplay: true,
    interval: 2500,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
   onLoad(){
     wx.request({
       url: 'https://exautotech.applinzi.com/ExAM/vender.php',
       data: {
         type: "get"
       },
       success(res){
         console.log(res)
       },
       fail(e){
         console.log("fail to connect")
       }
     })
     
   },
  GoTOVender:function(e){
    var vender_id = e.currentTarget.id
    var vender = this.data.vender
    for (var i = 0; i < vender.length; i++) {
      if (vender_id == vender[i].id) {
        var vender_info = wx.setStorageSync("vender_info", vender[i])
      }
    }
    wx.navigateTo({
      url: '../client/clientpage'
    })
  }
})