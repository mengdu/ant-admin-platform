// 进入全屏
export function requestFullScreen () {
  var elem = document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen()
  } else if (elem.msRequestFullscreen) {
    // elem.msRequestFullscreen() 没有指定元素
    document.body.msRequestFullscreen()
  }
}
// 退出全屏
export function exitFullscreen () {
  var doc = document
  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  } else if (doc.webkitCancelFullScreen) {
    doc.webkitCancelFullScreen()
  } else if (doc.msExitFullscreen) {
    document.msExitFullscreen()
  }
}


/**
* 从属性路径获取值
* getValueByPath({err: {info: 'xxx'}}, ['err', 'info']) // xxx
* @param {object} data 对象
* @param {array} paths 路径数组；如: ['error', 'info']
* @return {any} 返回属性路径值，不存在返回undefined
**/
export const getValueByPath = (data, paths) => {
  function loop (obj, i) {
    if (i < paths.length - 1) {
      if (typeof obj[paths[i]] === 'undefined') {
        return undefined
      } else {
        return loop(obj[paths[i]], ++i)
      }
    } else {
      return obj[paths[i]]
    }
  }
  return loop(data, 0)
}
