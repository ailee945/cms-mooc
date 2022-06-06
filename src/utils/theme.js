import formula from '@/constant/formula.json';
import rgbHex from 'rgb-hex';
import color from 'css-color-function';
import axios from 'axios';

/**
 * 把生成的样式表写入style中
 * @param {string} newStyle
 */
export const writeNewStyle = (newStyle) => {
  const style = document.createElement('style');
  style.innerHTML = newStyle;
  document.head.append(style);
};

/**
 * 根据主题色生成新的样式表
 * @param {string} parimaryColor
 */
export const generateNewStyle = async (primaryColor) => {
  // 1. 根据主色生成色值表
  const colors = generateColors(primaryColor);
  // 2. 获取当前element-plus默认样式表，并把需要进行替换的色值打上标记
  let cssTags = await getOriginStyles();
  // 3. 遍历生成的色值表，在默认样式表进行全局替换
  Object.keys(colors).forEach((key) => {
    cssTags = cssTags.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    );
  });
  return cssTags;
};

export const generateColors = (primaryColor) => {
  if (!primaryColor) return;
  const colors = { primaryColor };
  Object.keys(formula).forEach((item) => {
    const value = formula[item].replace(/primary/g, primaryColor);
    colors[item] = '#' + rgbHex(color.convert(value));
  });
  return colors;
};

/**
 * 获取默认样式表
 * @returns
 */
export const getOriginStyles = async () => {
  const version = require('element-plus/package.json').version;
  const url = `https://unpkg.com/element-plus@${version}/dist/index.css`;
  const { data } = await axios(url);
  return getStyleTemplate(data);
};

/**
 * 需要的色值打上标记
 * @param {*} data
 */
const getStyleTemplate = (data) => {
  // element-plus 默认色值
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9',
  };
  // 打标记
  Object.keys(colorMap).forEach((item) => {
    const value = colorMap[item];
    data = data.replace(new RegExp(item, 'ig'), value);
  });
  return data;
};
