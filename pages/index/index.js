const app = getApp()

Page({
  data: {
    // titleBarOptions: {
    //   title: 'options设置的标题',
    //   center: true,
    //   'class': 'custom-class'
    // },
    tabBarOptions: {
      active: 0,
      list: [{
          icon: 'icon-homefill',
          page: 'MyBill',
          text: '账单'
        },
        // {
        //   icon: 'icon-add',
        //   page: 'home',
        //   text: '',
        //   action: true,
        //   actionClass: 'bg-green'
        // },
        {
          icon: 'icon-peoplefill',
          page: 'MySetting',
          text: '我的'
        },
      ],

    }
  },
  onLoad: function () {}
})