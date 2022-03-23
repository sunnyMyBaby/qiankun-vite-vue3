export default [
  {
    menuId: 'micro-a',
    parentId: 10,
    parentName: null,
    name: 'Vue A 微服务',
    url: '',
    perms: '',
    type: 0,
    icon: 'component',
    orderNum: 1,
    open: null,
    list: [
      {
        menuId: 'micro-a/order/my-order',
        parentId: 'micro-a',
        parentName: null,
        key: 'micro-a/order/my-order',
        name: '我的工单',
        url: 'micro-a/order/my-order',
        perms: '',
        type: 1,
        icon: '',
        orderNum: 5,
        open: null,
        list: null
      },
      {
        menuId: 'micro-a/order/doing-order',
        parentId: 'micro-a',
        parentName: null,
        key: 'micro-a/order/doing-order',
        name: '待办工单',
        url: 'micro-a/order/doing-order',
        perms: '',
        type: 1,
        icon: '',
        orderNum: 1,
        open: null,
        list: null
      },
      {
        menuId: 'micro-a/order/done-order',
        parentId: 'micro-a',
        parentName: null,
        key: 'micro-a/order/done-order',
        name: '已办工单',
        url: 'micro-a/order/done-order',
        perms: '',
        type: 1,
        icon: '',
        orderNum: 1,
        open: null,
        list: null
      }
    ]
  },
  {
    menuId: 'micro-b',
    parentId: 11,
    parentName: null,
    name: 'Vue B 微服务',
    url: '',
    perms: '',
    type: 0,
    icon: 'component',
    orderNum: 1,
    open: null,
    list: [
      {
        menuId: 'micro-b/order/my-order',
        parentId: 'micro-b',
        parentName: null,
        key: 'micro-b/order/my-order',
        name: '我的工单',
        url: 'micro-b/order/my-order',
        perms: '',
        type: 1,
        icon: '',
        orderNum: 5,
        open: null,
        list: null
      },
      {
        menuId: 'micro-b/order/doing-order',
        parentId: 'micro-b',
        parentName: null,
        key: 'micro-b/order/doing-order',
        name: '待办工单',
        url: 'micro-b/order/doing-order',
        perms: '',
        type: 1,
        icon: '',
        orderNum: 1,
        open: null,
        list: null
      },
      {
        menuId: 'micro-b/order/done-order',
        parentId: 'micro-b',
        parentName: null,
        key: 'micro-b/order/done-order',
        name: '已办工单',
        url: 'micro-b/order/done-order',
        perms: '',
        type: 1,
        icon: '',
        orderNum: 1,
        open: null,
        list: null
      }
    ]
  }
];
