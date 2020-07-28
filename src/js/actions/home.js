export const loadPageData = (payload) => {
  return {
    type: 'LOAD_PAGE_DATA',
    payload
  }
}

export const loadPageDataSuccess = (res) => {
  const hiddenList = JSON.parse(localStorage.getItem('hidden')) || []
  return {
    type: 'LOAD_PAGE_DATA_SUCCESS',
    data: res.hits.filter((item) => hiddenList.indexOf(item.objectID) === -1),
    prevPage: res.page > 0,
    nextPage: res.page < res.nbPages - 1
  }
}

export const updatePageData = (res) => {
  // const hiddenList = JSON.parse(localStorage.getItem('hidden')) || [];
  return {
    type: 'UPDATE_PAGE_DATA',
    data: res
  }
}

export const loadPageDataFailure = (err) => {
  return {
    type: 'LOAD_PAGE_DATA_FAILURE',
    err
  }
}

export const upvoteArticle = (id) => {
  return {
    type: 'UPVOTE_ARTICLE',
    payload: id
  }
}

export function fetchNews (pageNum) {
  const page = parseInt(pageNum) - 1
  return (dispatch) => {
    dispatch(loadPageData())
    return fetch(
      `https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=15&page=${page}`
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(loadPageDataSuccess(json))
        return json.hits
      })
      .catch((error) => dispatch(loadPageDataFailure(error)))
  }
}

export function hideArticle (id) {
  // currently hiding using localstorage which could be easily replaced by any API
  return (dispatch) => {
    const arr = JSON.parse(localStorage.getItem('hidden')) || []
    arr.push(id)
    localStorage.setItem('hidden', JSON.stringify(arr))
    dispatch(updatePageData(arr))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
