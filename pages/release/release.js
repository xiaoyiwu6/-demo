// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    description:null,
    files: [],
    select_route:"../select/select",
    category:null,
    index:-1,
    array:[1,2,3,4,5,6,7,8,9,10]
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        //console.log(that.data.files);
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files, // 需要预览的图片http链接列表,
      success(res){
        console.log(res);
        console.log(e);
      }
    });
  },
  uploaderTask: function(filePaths){
    for(var i=0; i<filePaths.length; i++){
      wx.uploadFile({
        url: '',
        filePath: filePaths[i],
        name: 'image',
        formData: {
          id: null //先生成唯一标识号再传图片
        },
        success(res) {
          console.log("Image upload successfully.")
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
    }
  },
  formSubmit(e) {
    var that = this;
    var value = e.detail.value;
    that.setData({
      name: value.book_name,
      description: value.description
    })
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(that.data);
    wx.request({
      url: '',
      method:"POST",
      data:{
        name: that.name,
        description: that.description
      },
      success(res){
        console.log("Form request successfully.");
      },
      fail(res){
        console.log(res.errMsg);
      }
    });
    this.uploaderTask(that.data.files);
  },
  formReset() {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindPickerChange: function(e){
    this.setData({
      index: e.detail.value
    })
  }

  
})