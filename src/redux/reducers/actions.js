
export const doAdd = (val) => {
  return {type: 'ADD_TODO', val}
}

export const doReduce = (val) => {
  return {type: 'REDUCE_TODO', val}
}
