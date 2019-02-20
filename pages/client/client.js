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
     
   },
  GoTOVender:function(e){
    console.log(e)
  }
})