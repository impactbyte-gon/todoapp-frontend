import { request } from '../helpers'

// insertTodo is the action thunk
// this functions is called in the component
// when onSubmit happens
export const insertTodo = ({ text }) => {
  // thunk will return the dispatch function
  // we can use async here, because this is not a reducer
  return async dispatch => {
    // 1st STEP
    dispatch(insertTodoStarted())

    // Start to request to the backend API
    try {
      const response = await request({
        method: 'post',
        url: '/todos',
        data: {
          text: text
        }
      })
      // 2nd STEP
      dispatch(insertTodoSuccess(response))
    } catch (error) {
      // 3rd STEP
      dispatch(insertTodoError(error))
    }
  }
}

const insertTodoStarted = () => ({
  type: 'INSERT_TODO'
})

const insertTodoSuccess = response => ({
  type: 'INSERT_TODO_SUCCESS',
  payload: {
    todo: response.data.todo
  }
})

const insertTodoError = error => ({
  type: 'INSERT_TODO_ERROR',
  payload: {
    error
  }
})
