// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    id:null,
    integral:1.00 //null default
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name,
      id: options.id
    });
    console.log(options.name);
    
    var request_data = this.data;
    wx.request({
      url: '',
      data:{
        id: request_data.id,
      },
      success(res){
        this.setData({
          integral: res.integral
        });
        console.log("Book info request successfully.")
      },
      fail(res){
        console.log(res.errMsg);
      }
    })
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

  }
})