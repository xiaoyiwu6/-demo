// pages/home/home.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    "categories":[
      {
        "name":"文学名著",
        "icon":"../../image/实物-书.png",
        "url":"../category/category",
        "code":1
      },
      {
        "name": "经管励志",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      },
      {
        "name": "悬疑科幻",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      },
      {
        "name": "考试教辅",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      },
      {
        "name": "生活休闲",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      },
      {
        "name": "人文社科",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      },
      {
        "name": "文学名著",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      },
      {
        "name": "更多好书",
        "icon": "../../image/实物-书.png",
        "url": "../category/category"
      }
    ],
    search_route:"../search/search",
    books: [
      {
        "name": "一个世纪儿的忏悔",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url":"../book/book"
      },
      {
        "name": "恋恋北京",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book"
      },
      {
        "name": "情未了",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book"
      },
      {
        "name": "台前幕后",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book"
      },
      {
        "name": "从头到脚说健康",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book"
      },
      {
        "name": "星期一是礼拜几",
        "integral": "1.00",
        "icon": "../../image/实物-书.png",
        "url": "../book/book"
      }
    ],
    discount:"../discount/discount"
  },
  onLoad: function(e){
    wx.request({
      url: '',
      data:{
        code: 1 //random
      },
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
  }
})
