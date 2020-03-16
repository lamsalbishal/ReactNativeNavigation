export function loadNews(data) {
    return function (dispatch) {
        dispatch({ type: 'LOAD_NEWS', payload: data })
    }
}