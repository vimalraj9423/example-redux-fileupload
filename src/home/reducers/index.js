import bioDataList from "./reducerBioData.jsx";
import persion from "./reducerSelectedPerson.jsx";
import {combineReducers} from 'redux';
const allReducers=combineReducers({
    persion:persion,
    bioDataList:bioDataList
});
export default allReducers