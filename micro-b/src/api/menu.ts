// 侧边栏

export default {
  msg: 'success',
  menuList: [
    {
      menuId: 37,
      parentId: 0,
      parentName: null,
      name: '资源申请',
      url: '',
      perms: '',
      type: 0,
      icon: 'component',
      orderNum: 1,
      open: null,
      list: [
        {
          menuId: 43,
          parentId: 37,
          parentName: null,
          name: '主页',
          url: 'cloud/ecs',
          perms: '',
          type: 1,
          icon: '',
          orderNum: 5,
          open: null,
          list: null
        }
      ]
    },
    {
      menuId: 165,
      parentId: 0,
      parentName: null,
      name: '工单管理',
      url: '',
      perms: '',
      type: 0,
      icon: 'table',
      orderNum: 6,
      open: null,
      list: [
        {
          menuId: 166,
          parentId: 165,
          parentName: null,
          name: '我的工单',
          url: 'order/my-order',
          perms: '',
          type: 1,
          icon: '',
          orderNum: 0,
          open: null,
          list: null
        },
        {
          menuId: 167,
          parentId: 165,
          parentName: null,
          name: '待办工单',
          url: 'order/doing-order',
          perms: '',
          type: 1,
          icon: '',
          orderNum: 0,
          open: null,
          list: null
        },
        {
          menuId: 168,
          parentId: 165,
          parentName: null,
          name: '已办工单',
          url: 'order/done-order',
          perms: '',
          type: 1,
          icon: '',
          orderNum: 2,
          open: null,
          list: null
        }
      ]
    }
  ],
  code: 0
};
