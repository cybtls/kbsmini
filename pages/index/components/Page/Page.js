//是否显示 默认不显示
var isShow = false,
  //动画对象实例
  animation,
  //获取当前设备的高度
  height = wx.getSystemInfoSync().windowHeight;
const BaseComponent = require("../../../../behaviors/BaseComponent") //定义了一些基础变量
Component({
  // 混入  类似Vue的mixins
  behaviors: [BaseComponent],
  options: {
    // addGlobalClass: true,  //true则表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面
    multipleSlots: true // 在组件定义时的选项中启用多slot支
  },
  properties: {
    // customTitleBar:{
    //   type:Boolean,
    //   value:false,
    // },
    customTabbar: {
      type: Boolean,
      value: false
    },
    // titleBarOptions:Object,
    tabBarOptions: {
      type: Object,
      observer(newValue) {
        console.log(`调试:observer触发`, newValue)
        this.setData({
          activePage: newValue.list[newValue.active]['page']
        })
      }
    }
  },
  attached: function (options) {
    //初始化动画
    animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    })
  },
  data: {
    activePage: '',
    hidden: true, //默认为隐藏
    isShow,
    //默认为圆形    宽高为设备高度÷15      
    myStyle: "border-radius: " +
      height + "px;height: " +
      height / 15 + "px;width: " +
      height / 15 + "px;",
    nav: [{
      navigation: [{
          name: '动态',
          src: '../../../../assets/images/1.png'
        },
        {
          name: '酷图',
          src: '../../../../assets/images/2.png'
        },
        {
          name: '应用集',
          src: '../../../../assets/images/3.png'
        },
        {
          name: '扫一扫',
          src: '../../../../assets/images/4.png'
        },
        {
          name: '分享',
          src: '../../../../assets/images/5.png'
        },
      ],
    }]
  },
  methods: {
    handleTabChange(e) {
      this.setData({
        activePage: e.detail.page
        //  'titleBarOptions.title':e.detail.text
      })
    },
    handleshowAdd() {
      this.onClickAdd()
    },
    onClickAdd(e) {
      let that = this
      that.animation = animation
      that.setData({
        hidden: false //隐藏白色面板(ripple)
      })
      //判断是否显示
      if (!isShow) {
        that.animation.scale(height / 10).step()
        //加号按钮执行打开动画
      } else {
        //已显示 则执行动画 缩放回0
        that.animation.scale(0).step()
        //加号按钮执行关闭动画
      }
      isShow = !isShow //存储显示状态
      that.setData({
        animationData: that.animation.export(), //动画赋值
      }, () => {
        console.log(that.data.animationData)
      })
      //如果显示状态为true 延时200毫秒后执行内容显示 否则立即隐藏
      isShow ?
        setTimeout(function () {
          that.setData({
            isShow
          })
        }, 200) : that.setData({
          isShow
        })
    },
    closeModal() {
      this.onClickAdd()
    },
    selectItem(e) {
      console.log(e)
    }
  },
})