import { configureStore, createSlice } from '@reduxjs/toolkit'

let name = createSlice({
  name: 'name',
  initialState: 'son',
  reducers: {
    changeName(state, input) {
      return input.payload
    },
  },
})

export let { changeName } = name.actions

let pw = createSlice({ name: 'pw', initialState: 'x' })
let email = createSlice({ name: 'email', initialState: 'ssz' })
let id = createSlice({
  name: 'id',
  initialState: 'sds',
  reducers: {
    changeId(state, id) {
      return id.payload
    },
  },
})
export let { changeId } = id.actions
export default configureStore({
  reducer: {
    name: name.reducer,
    pw: pw.reducer,
    email: email.reducer,
    id: id.reducer,
  },
})
