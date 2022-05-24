// 1. 导入所有svg图标

// 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。
// 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标
const svgRequire = require.context('./svg', false, /\.svg$/);
// 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入
svgRequire.keys().forEach((icon) => svgRequire(icon));

// 2. 完成SvgIcon的全局注册
import SvgIcon from '@/components/SvgIcon/Index';
export default (app) => {
  app.component('svg-icon', SvgIcon);
};