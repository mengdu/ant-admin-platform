import axios from '../utils/axios'

const baseApi = '/api/v1'
export default class Post {
  static getList (options) {
    return axios.get(baseApi + '/topics')
  }
}
