/**
 * Created by rajanmaharjan on 7/18/17.
 */

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
