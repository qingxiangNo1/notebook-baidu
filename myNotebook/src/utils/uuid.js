// uuid-util.js
import { v4 as uuidv4 } from 'uuid'

/**
 * 获取uuid
 * @returns 字符串
 */
export default function getUUID() {
  return uuidv4()
}
