import { UserRegisterState } from "./";
import { UserLoginState } from "./";

export interface ReduxState {
  userLogin: UserLoginState;
  userRegister: UserRegisterState;
}
