import { useEffect, useReducer, createContext } from "react";

const initialState = {
  user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  loading: false,
  error: null,

};
export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        token:null,
        role:null,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading:false,
        error:null,
        token:action.payload.token,
        role:action.payload.token
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading:false,
        token:null,
        role:null,
        error: action.payload,
      };

    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading:false,
        token:null,
        role:null,
        error:null,
      };

    case "LOGOUT":
      return {
        user: null,
        loading:false,
        token:null,
        role:null,
        error:null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        token:state.token,
        role:state.role,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
