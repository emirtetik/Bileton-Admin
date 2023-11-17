import {store} from "../index"
import { _setLoginStatus } from "."

export const setCurrentLogin = (data:unknown) => store.dispatch(_setLoginStatus(data))