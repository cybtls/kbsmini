// component/Tabbar/Tabbar.js
const BaseComponent = require("../../../../behaviors/BaseComponent")
Component({
  // 混入  类似Vue的mixins
  behaviors: [BaseComponent],
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支
  },
  /**
   * 组件的属性列表
   */
  properties: {
    customTitleBar:{
      type:Boolean,
      value:false,
    },
    customTabbar:{
      type:Boolean,
      value:false
    },
    titleBarOptions:Object,
    tabBarOptions:{
      type:Object,
      observer(newValue,b){
        console.log(`调试:observer触发`, newValue,b)
        this.setData({
          activePage: newValue.list[newValue.active]['page']
        })
      }
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    activePage:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabChange(e,o){
      const context = e.detail
      this.setData({
        activePage:context.page,
       'titleBarOptions.title':context.text
      })
    },
    goto(page,data){
      this.setData({
        activePage:page
      })
    }
  },
})
