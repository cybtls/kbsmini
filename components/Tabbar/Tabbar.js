// component/Tabbar/Tabbar.js
const BaseComponent= require("../../behaviors/BaseComponent")
Component({
  // 引入拓展
  behaviors: [BaseComponent],
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTabTap(e){
      const data = e.currentTarget.dataset
      const { index } = data
      const currentTab = this.data.list[index]
      if(!currentTab.action){
        this.setData({
          active: data.index
        })
        this.triggerEvent("change",{...currentTab, index})
      }else{

      }
    
    }   
  }
})
