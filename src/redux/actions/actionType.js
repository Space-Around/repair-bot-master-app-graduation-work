import {
    GET_SET_MASTER_ID
} from "./actionTypes";

export const getSetMasterID = (masterID) => ({
    type: GET_SET_MASTER_ID,
    payload: {
        masterID: masterID,
    },
  });