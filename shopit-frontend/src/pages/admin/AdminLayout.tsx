import { Grid, GridItem } from '@chakra-ui/react'

import {
  AdminNavMenu,
  Sider,
  useAdminLayoutStore,
} from '../../components/UI-Components/admin'
import Footer from '../../components/UI-Components/Footer/Footer'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useAdminLayoutStore((s) => s.isOpen)

  return (
    <Grid
      className="admin-layout"
      minHeight="100vh"
      width="100%"
      transition="ease-in-out 0.5"
      gridTemplateColumns={isOpen ? '204px 1fr' : '64px 1fr'}
      gridTemplateRows={'auto 1fr auto'}
      templateAreas={{
        base: `"header header"
                  "content content"
                  "content content"
                  "footer footer"`,
        md: `"header header"
                  "asider content"
                  "aside content"
                  "aside footer"`,
      }}
    >
      <GridItem area={'header'} className="header">
        <AdminNavMenu />
      </GridItem>

      <GridItem area="asider" className={`aside ${isOpen && 'open'}`}>
        <Sider />
      </GridItem>

      <GridItem area="content" className={`main ${isOpen && 'open'} `}>
        {children}
      </GridItem>

      <GridItem area="footer" className="footer">
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default AdminLayout
