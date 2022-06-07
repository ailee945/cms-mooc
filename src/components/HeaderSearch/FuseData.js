import path from 'path';
import i18n from '@/i18n';

/**
 * 筛选出可供搜索的路由对象
 * @param {*} routes 路由表
 * @param {*} basePath 基础路径
 * @param {*} prefixTitle
 */
export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  // 创建 res 数据
  let res = [];
  for (const route of routes) {
    // 创建包含path和title的item
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle],
    };
    // 当meta时，实用i18n进行国际化解析，合成新的title
    // 动态路由是不允许被检索的
    // 正则
    const reg = /.*\/:.*/;
    if (route.meta && route.meta.title && reg.exec(route.path)) {
      const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`);
      data.title = [...data.title, i18nTitle];
      res.push(data);
    }
    // 存在children，进行迭代处理
    if (route.children) {
      const temRoutes = generateRoutes(route.children, data.path, data.titlt);
      if (temRoutes.length > 0) {
        res = [...res, ...temRoutes];
      }
    }
  }
  return res;
};
