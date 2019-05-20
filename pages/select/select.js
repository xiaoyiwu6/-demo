// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[
      "文学名著","经济管理","悬疑科幻","生活百科",
      "散文随笔","考试教辅","人文社科","热血励志"
    ],
    isCategory:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.code == "category"){
      this.setData({
        isCategory: true
      })
    }
  },
  turnBack: function(e){
    var pages = getCurrentPages();
    var currPage = pages[pages.length-1];
    var prevPage = pages[pages.length-2];
    var dataset = e.currentTarget.dataset;
    prevPage.setData({
      category: dataset.category
    });
    wx.navigateBack({
      delta: 1
    })
  }
})