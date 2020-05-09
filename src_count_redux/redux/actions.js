export const incrementAction = (data) => {
  return {
    type: 'increment',
    data
  }
}

export const decrementAction = (data) => {
  return {
    type: 'decrement',
    data
  }
}

export const changeValueAction = (data) => {
  return {
    type: 'changeValue',
    data
  }
}