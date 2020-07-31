import { types } from '../../actions/types'
export default (state = [], action) => {
    switch (action.types) {
        case types.GET_POSTS:
            return action.payload;


        default:
            return state;
    }
}