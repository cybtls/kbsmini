const BaseComponent = require("../../../../behaviors/BaseComponent")//定义了一些基础变量
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
    customTabbar:{
      type:Boolean,
      value:false
    },
    // titleBarOptions:Object,
    tabBarOptions:{
      type:Object,
      observer(newValue){
        console.log(`调试:observer触发`, newValue)
        this.setData({
          activePage: newValue.list[newValue.active]['page']
        })
      }
    }
  },
  data: {
    activePage:'',
  },
  methods: {
    handleTabChange(e){
      this.setData({
        activePage:e.detail.page
      //  'titleBarOptions.title':e.detail.text
      })
    }
  },
})
