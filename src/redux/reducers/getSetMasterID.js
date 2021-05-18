import { GET_SET_MASTER_ID } from "../actions/actionTypes";

const initialState = {
    masterID: null
};

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_SET_MASTER_ID: {
            const { masterID } = action.payload;

            return {
                ...state,
                masterID: masterID
            }
        }

        default:
            return state;
    }
}