export default function counter (state = {count: 0}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        count: state.count + ~~action.val
      })
    case 'REDUCE_TODO':
      return Object.assign({}, state, {
        count: state.count - ~~action.val
      })
    default:
      return state
  }
}
