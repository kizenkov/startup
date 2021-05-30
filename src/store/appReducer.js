import {Api} from '../api/api';

const SET_DATA = 'app/SET_DATA';
const SET_REPOS = 'app/SET_REPOS';
const SET_IS_LOADING = 'app/SET_IS_LOADING';
const SET_IS_REQUEST = 'app/SET_IS_REQUEST';
const SET_CURRENT_PAGE = 'app/SET_CURRENT_PAGE';
const SET_IS_NOT_FOUND = 'app/SET_IS_NOT_FOUND';
const SET_DATA_NULL = 'app/SET_DATA_NULL';

let initialState = {
    data: null,
    repos: [],
    currentPage: 1,
    isLoading: false,
    isRequest: false,
    isNotFound: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: {...action.data}
            }
        case SET_REPOS:
            return {
                ...state,
                repos: action.data.map(repos => ({
                        name: repos.name,
                        description: repos.description,
                        url: repos.html_url,
                        id: repos.id
                    })
                )
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_IS_REQUEST:
            return {
                ...state,
                isRequest: true
            }
        case SET_IS_NOT_FOUND:
            return {
                ...state,
                isNotFound: action.isNotFound
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_DATA_NULL:
            return {
                ...state,
                data: null
            }
        default:
            return state
    }
}

export const setUser = (data) => ({type: SET_DATA, data})
export const setRepos = (data) => ({type: SET_REPOS, data})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setIsRequest = () => ({type: SET_IS_REQUEST})
export const isNotFound = (isNotFound) => ({type: SET_IS_NOT_FOUND, isNotFound})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setDadaNull = () => ({type: SET_DATA_NULL})

export const getUserThunk = (name) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        dispatch(isNotFound(false));
        dispatch(setIsRequest());
        let responseUser = await Api.getUserApi(name);
        dispatch(setUser(responseUser.data));
        let responseRepos = await Api.getReposApi(name);
        dispatch(setRepos(responseRepos.data));
    } catch {
        dispatch(setDadaNull());
        dispatch(isNotFound(true));
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const setRepositories = (name, page, per_page) => async (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentPage(page));
    try {
        let response = await Api.getReposApi(name, page, per_page);
        dispatch(setRepos(response.data))
    } finally {
        dispatch(setIsLoading(false));
    }
}