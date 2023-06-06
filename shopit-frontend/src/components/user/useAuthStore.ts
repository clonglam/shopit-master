import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { create } from 'zustand'

export interface User {
  id: number
  name: string
  email: string
  cartId: number
  role: 'USER' | 'ADMIN'
}

export interface UserResponse {
  JWT: string
}

interface LoginRequest {
  email: string
  password: string
}

interface SignupRequest {
  email: string
  name: string
  password: string
}

interface AuthStore {
  user: User | null
  JWT: string | null
  login: (req: LoginRequest) => Promise<User>
  signup: (req: SignupRequest) => Promise<User>
  getUserByToken: () => User | null
  logout: () => void
}
const baseQueryURL = import.meta.env.VITE_BACKEND_DOMAIN

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  JWT: null,
  getUserByToken: () => {
    const token = sessionStorage.getItem('token')
    return token ? jwt_decode(token) : null
  },

  login: async (req: LoginRequest) => {
    const res = await axios.post<string>(baseQueryURL + '/login', req)

    const JWT = res.data

    sessionStorage.setItem('token', JWT)

    const user = jwt_decode<User>(JWT)

    set(() => ({ user }))
    set(() => ({ JWT }))

    return user
  },

  signup: async (req: SignupRequest) => {
    const res = await axios.post<UserResponse>(baseQueryURL + '/signup', req)

    const JWT = res.data.JWT
    const user = jwt_decode<User>(JWT)

    set(() => ({ user }))
    set(() => ({ JWT }))

    return user
  },
  logout: () => set(() => ({ user: null })),
}))

export default useAuthStore
