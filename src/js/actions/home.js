export const loadPageData = (payload) => {
	return {
		type: 'LOAD_PAGE_DATA',
		payload
	}
}

export const loadPageDataSuccess = (res) => {
	const hiddenList = localStorage.getItem('hidden') || [];
	return {
		type: 'LOAD_PAGE_DATA_SUCCESS',
		data: res.filter(item => hiddenList.indexOf(item.objectID) === -1),
		// data: res
	}
}

export const loadPageDataFailure = (err) => {
	return {
		type: 'LOAD_PAGE_DATA_FAILURE',
		err,
	}
}

export const hideArticle = (id) => {
	return {
		type: 'HIDE_ARTICLE',
		payload: id,
	}
}

export const upvoteArticle = (id) => {
	return {
		type: 'UPVOTE_ARTICLE',
		payload: id,
	}
}

export function fetchNews(page=0) {
  return dispatch => {
    dispatch(loadPageData());
    return fetch(`http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10&page=${page}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(loadPageDataSuccess(json.hits));
        return json.hits;
      })
      .catch(error => dispatch(loadPageDataFailure(error)));
  };
}

// export function hideArticle() {
// 	return (dispatch, getState) => {
// 		// localStorage.setItem('')
// 	}
// }

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}