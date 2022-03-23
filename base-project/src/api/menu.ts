// 暂时性侧边栏导航列表

export default {
  msg: 'success',
  menuList: [
    {
      menuId: 1,
      parentId: 0,
      parentName: null,
      name: '云服务',
      url: '',
      perms: '',
      type: 0,
      icon: 'component',
      orderNum: 1,
      open: null,
      list: [
        {
          menuId: 2,
          parentId: 1,
          parentName: null,
          name: 'ECS',
          url: 'cloud/ecs',
          perms: '',
          type: 1,
          icon: '',
          orderNum: 5,
          open: null,
          list: null
        },
        {
          menuId: 3,
          parentId: 1,
          parentName: null,
          key: 'cloud',
          name: '阿里云',
          url: 'cloud/aliyun',
          perms: '',
          type: 1,
          icon: '',
          orderNum: 1,
          open: null,
          list: null
        }
      ]
    }
  ],
  code: 0
};
