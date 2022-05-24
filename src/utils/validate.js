/**
 * 判断一个svg是否是外部图标
 * @param {*} path 图标路径
 * @returns isExternal
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
