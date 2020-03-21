import { WEBSITECOLOR } from "../action.types";

const initState = null;

const reducers = (state = initState, { type, values, error }) => {
  switch (type) {
    case WEBSITECOLOR:
      return values;
    default:
      return state;
  }
};
export default reducers;
