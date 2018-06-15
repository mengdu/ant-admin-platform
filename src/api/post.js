import axios from '../utils/axios'

const baseApi = 'https://cnodejs.org/api/v1'
export default class Post {
  static getList (options) {
    return axios.get(baseApi + '/topics')
  }
}
