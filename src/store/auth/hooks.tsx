import { useSelector } from "react-redux"
import { Account } from "../../types";

 interface AuthState {
    auth:{
    account: Account
    isLoggedIn: boolean
}

}

export const useAccount = () => {return useSelector((state:AuthState) => state.auth.account);}
export const useLogin = () => {return useSelector((state:AuthState) => state.auth.isLoggedIn );}