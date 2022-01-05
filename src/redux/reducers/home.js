import actionType from '../actions';

var initialState = {
    home_banner_title: "",
}

function reducer(state = initialState, action){
    switch (action.type) {
        case actionType.SET_HOME_BANNER_TITLE:
            return {
                ...state,
                home_banner_title: action.title
            }
        default:
            return state
    }
}

export default reducer;