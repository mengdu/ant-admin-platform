const state = {
  count: 0
}

export default function counter (data = state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, data, {
        count: data.count + ~~action.val
      })
    case 'REDUCE_TODO':
      return Object.assign({}, data, {
        count: data.count - ~~action.val
      })
    default:
      return data
  }
}
