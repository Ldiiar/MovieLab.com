import { createSlice } from "@reduxjs/toolkit";

let initialState = {
	watchlist: [],
	quantityWatchlist: 0,
	likes: [],
	quantityLikes: 0,
}

const detailsSlice = createSlice({
	name: 'detailsPage',
	initialState,
	reducers: {
		//Watchlist
		addToWatchlist: (state, action) => {
			const [id, cover, message] = action.payload
			state.watchlist = [...state.watchlist, {id: id, cover: cover, message: message === 'tv' ? 'tv' : 'movie'}]
			state.quantityWatchlist++
		},
		removeFromWatchlist: (state, action) => {
			const [id, cover] = action.payload
			const mathingItem = state.watchlist.find((el) => el.id === id)
			const filteredNewWatchlist = state.watchlist.filter((item) => item !== mathingItem)
			state.watchlist = [...filteredNewWatchlist]
			state.quantityWatchlist--
		},
		//Likes
		addToLikes: (state, action) => {
			const [id, cover, message] = action.payload
			state.likes = [...state.likes, {id: id, cover: cover, message: message === 'tv' ? 'tv' : 'movie'}] 
			state.quantityLikes++
		},
		removeFromLikes: (state, action) => {
			const [id, cover] = action.payload
			const mathingItem = state.likes.find((el) => el.id === id)
			const filteredNewLikes = state.likes.filter((item) => item !== mathingItem)
			state.likes = [...filteredNewLikes]
			state.quantityLikes--
		},
		
	}
})

export default detailsSlice.reducer
export const {addToWatchlist, removeFromWatchlist, addToLikes, removeFromLikes} = detailsSlice.actions
export const getAllWatchlist = (state) => state.detailsPage.watchlist