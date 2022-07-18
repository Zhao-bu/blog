import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo:{},
    tabIndex: '1',
    tabList: [
      {
        id: "1",
        title: "首页",
        haveSub: false,
        submenu: []
      },
      {
        id: "2",
        title: "内容",
        haveSub: false,
        submenu: []
      },
      {
        id: "3",
        title: "专区",
        haveSub: false,
        submenu: []
      },
      {
        id: "4",
        title: "提问",
        haveSub: false,
        submenu: []
      },
      {
        id: "5",
        title: "工作台",
        haveSub: true,
        submenu: []
      }
    ],
    dropList:[{
      id:'1',
      title:'个人中心',
      path:'personal'
    },{
      id:'2',
      title:'内容管理',
      path:'contents'
    },{
      id:'3',
      title:'我的学习',
      path:'myStudy'
    },{
      id:'4',
      title:'退出登录',
      path:'signOut'
    }]
  },
  actions: {
    setTabIndex(content) {
      // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
      
    },
  },
  mutations: {
    setTabIndex(state,payload) {
      console.log(state,payload)
      state.tabIndex = payload
    },
    setUserInfo(state,payload){
      state.userInfo = payload
    }
  },
  getters: {
    getTabIndex(state) {
      // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
      return state.tabIndex
    },
  },
});

export default store;
