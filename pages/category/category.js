// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    code:null,
    books:[
      {
        "name":"一个世纪儿的忏悔",
        "integral":"1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id":123
      },
      {
        "name": "恋恋北京",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "情未了",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "台前幕后",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "从头到脚说健康",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "星期一是礼拜几",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "早餐桌旁",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "幽魂岛",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "燕市风云",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "时空之恋",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "沙丘",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "流浪地球",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "神的一百个名字",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "老无所依",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "艾希",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "老炮儿",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "追龙",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      },
      {
        "name": "瑞士军刀",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book",
        "id": 123
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      name: options.name,
      code: options.code
    });

    var request_data = this.data;
    wx.request({
      url: '',
      data:{
        name: request_data.name,
        code: request_data.code
      },
      method: "GET",
      success(res){
        this.setData({
          books: res.data
        });
        console.log("Request successfully.");
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