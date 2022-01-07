import { loginStart, loginFailure, loginSuccess, signUpSuccess} from "./userRedux";
import { publicRequest } from "../requestMethods"


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailure())
    }
}
export const signUp = async (dispatch, user) => {
    try{
        const res = await publicRequest.post("/auth/register", user)
        dispatch(signUpSuccess(res.data))
    }catch(err){
    }
}

