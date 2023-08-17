import { create } from "zustand";
import Cookies from "js-cookie";
import {produce} from "immer";

// 로그인 유저에 대한 정보를 저장하는 훅
export const useAuth = create(set => ({
  aToken: "",
  email: "",
  name: "",
  profileURL: "",
  role: 0, // 1: user, 2: manager
  emailAuth: false, // 이메일인증
  userInfo: null,
  setAuth: (auth) => set(auth),
  setUserInfo: (userInfo) => set({userInfo}),
  userInfoRefetch: () => {},
  setUserInfoRefetch: (userInfoRefetch) => set({userInfoRefetch}),
  resetAuth: () => set({aToken: "", email: "", name: "", role: 0, emailAuth: false, userInfo: null, userInfoRefetch: () => {}}),
}))