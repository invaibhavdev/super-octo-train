const initialState = {
	isLoading: false,
	pageData: [],
}

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case 'LOAD_PAGE_DATA':
			return {...state, isLoading: true}
		case 'LOAD_PAGE_DATA_SUCCESS':
			return {
				...state,
				isLoading: false,
				pageData: action.data,
				prevPage: action.prevPage,
				nextPage: action.nextPage,
			}
		case 'UPDATE_PAGE_DATA':
			return {
				...state,
				pageData: state.pageData.filter((item) => action.data.indexOf(item.objectID) === -1 )
			}
		case 'UPVOTE_ARTICLE':
			return {
				...state,
				pageData: state.pageData.map((item) => {
					if(item.objectID === action.payload) {
						item.points = item.points + 1;
					}
					return item
				})
			}
		// case ''
		default:
			return state
	}
}

export default rootReducer;