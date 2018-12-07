//index.js
//获取应用实例
const app = getApp()

Page({
  data:{},
  onShareAppMessage:function(e){
    return {
      title: 'ExAM',
      desc: 'Excerlsior Auto Modification',
      path: '/pages/index/index'
    }
  },
  GoTOinterior:function(res){
    wx.navigateTo({
      url: '/pages/interior/interior',
      success:function(e){
        console.log("success to interior")
      }
    })
  },
  GoTomodification:function(res){
    wx.navigateTo({
      url: '/pages/modification/modification',
      success:function(e){
        console.log("success to modification")
      }
    })
  }
})
