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
			}
	}
	return state
}

export default rootReducer;