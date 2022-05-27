// 获取所有子集路由
const getChildrenRoutes = (routes) => {
  const res = [];
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      res.push(...route.children);
    }
  });
  return res;
};

// 处理脱离层级的路由
export const filterRoutes = (routes) => {
  // eslint-disable-next-line no-unused-vars
  const childrenRoutes = getChildrenRoutes(routes);
};

// 根据 routes 数据，返回相应的 menu 规则数据
