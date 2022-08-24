import { createSlice } from '@reduxjs/toolkit'
import { fetchIntroCard } from '../http/introCardApi'
const initialState = {
  enteties: [],
  count: 0,
  error: null,
  isLoading: true,
}
const introCardSlice = createSlice({
  name: 'introCard',
  initialState,
  reducers: {
    introCardsRequested: (state, action) => {
      state.isLoading = true
    },
    introCardsUploaded: (state, action) => {
      state.enteties = action.payload
      state.isLoading = false
    },
    introCardsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: introCardReducer, actions } = introCardSlice
const { introCardsRequested, introCardsRequestFailed, introCardsUploaded } =
  actions

export const uploadIntroCards = () => async dispatch => {
  dispatch(introCardsRequested())
  try {
    const { data } = await fetchIntroCard()
    dispatch(introCardsUploaded(data))
  } catch (error) {
    introCardsRequestFailed(error.message)
    console.log(error.message)
  }
}
export const getAllIntroCards = () => state => state.introCard.enteties
export const getIntroCardsLoadingState = () => state =>
  state.introCard.isLoading

export default introCardReducer
