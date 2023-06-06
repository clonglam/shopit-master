import { Navigate, Outlet, useLocation } from 'react-router-dom'

import useAuthStore from '../components/user/useAuthStore'

export function PrivateOutlet() {
  const getUserByToken = useAuthStore((a) => a.getUserByToken)
  const currentUser = getUserByToken()
  // const user = useAuthStore((a) => a.user)
  const location = useLocation()

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}
