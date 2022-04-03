import { combineReducers } from "redux";
import loginReducer from "./Login/login-reducer";
import shoppingReducer from './Shopping/shopping-reducer'

// state: trạng thái của ứng dụng redux, nơi lưu trữ data của redux
const rootReducer = combineReducers({
    shop: shoppingReducer,
    user: loginReducer
});

export default rootReducer;