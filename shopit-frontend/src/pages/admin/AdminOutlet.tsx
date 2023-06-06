import { Navigate, Outlet, useLocation } from 'react-router-dom'

import useAuthStore from '../../components/user/useAuthStore'
import AdminLayout from './AdminLayout'

const AdminOutlet = () => {
  const getUserByToken = useAuthStore((a) => a.getUserByToken)
  const user = getUserByToken()
  const location = useLocation()

  return !user || user.role != 'ADMIN' ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

export default AdminOutlet
