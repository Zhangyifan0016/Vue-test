import Layout from '../../layout'
export default {
  path: '/tools',
  component: Layout,
  name: 'sys:dict:list',
  meta: {
    title: '系统工具',
    icon: 'el-icon-s-tools'
  },
  children: [
    {
      path: '/tools/dicts',
      component: () => import('../../views/sysDictList'),
      meta: {
        title: '数字字典',
        icon: 'el-icon-s-order'
      }
    }
  ]
}
