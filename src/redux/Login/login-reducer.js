const INIT_STATE = {
    user: [
        {email: 'thanh@gmail.com', password: '123456'}
    ],
    isLogin: "false"
}

const loginReducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "LOGIN_PAGE":
           console.log('sdfghjgggewrtyuirrrop[]',action.payload)         
        default:
            break;
    }
    return state;
}

export default loginReducer;