import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant';
import { getItem, setItem } from './storage';

// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP);
}

// 设置时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now());
}

/**
 * 判断token是否超时
 * @returns true-超时；false-未超时
 */
export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now();
  // token生成时间
  const timeStamp = getTimeStamp();
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
}
