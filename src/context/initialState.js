import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser()

export const initalState = {
    talentitems: [],
    user: userInfo, 
}

export default initalState;
