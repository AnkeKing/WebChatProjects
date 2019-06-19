Component({
  behaviors: [],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    rating: {
      type: Object,
      value: {}
    },
  },

  data: {
    starActiveArr: [],
    starGrayArr: []
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      // console.log("rating", this.data.rating);
      let max=Math.floor(this.data.rating.max/2);
      for (let s = 0; s < Math.floor(this.data.rating.average / 2); s++) {
        this.data.starActiveArr.push({"activeImg":"../../images/star-active.png"});
      }
      for (let s = 0; s < max - Math.floor(this.data.rating.average / 2); s++) {
        this.data.starGrayArr.push({"grayImg":"../../images/star.png"});
      }
      console.log("active", this.data.starActiveArr);
      console.log("gray", this.data.starGrayArr)
    },
    moved: function () { },
    detached: function () { },
  },
  created() {
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {

  }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {

    },
    hide: function () { },
    resize: function () { },
  },

  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function () {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function (newVal, oldVal) {

    },
  }

})

