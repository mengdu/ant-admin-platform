import {getValueByPath} from './index'

/**
* 双向绑定实现
* <input className="form-control" {...this.model('text')} />
* @param {string} path 属性路径；如: 'query.keyword'
* @param {object} options 配置
* @param {function} options.onChange 用于onChange事件
* @param {string} options.field 用于指定赋值字段，默认value
* @return {objec} {value: any, onChange: function}
**/
export default function model (path, options = {field: 'value'}) {
  let paths = path.split('.')
  let defaultValue = getValueByPath(this.state, paths)
  let top = [].concat(paths)
  let tkey = top.pop()
  let target = top.length === 0 ? this.state : getValueByPath(this.state, top)
  return {
    [options.field]: defaultValue,
    onChange: (val) => {
      let value = val.target ? val.target[options.field] : val
      target[tkey] = value
      this.setState({
        [paths[0]]: this.state[paths[0]]
      })
      options.onChange && options.onChange(value)
    }
  }
}
