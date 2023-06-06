import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import BarChart from '../../components/UI-Components/charts/BarChart'
import DashCard from '../../components/UI-Components/DashCard'

const AdminDashboard = () => {
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 2, md: 4, xl: 4 }}
        spacing={6}
        padding="10px"
        width="100%"
      >
        <DashCard title="Revenue yesterday" data="$ 332.50" />
        <DashCard title="Revenue Monthly" data="$ 9120.30" />
        <DashCard title="Revenue Yearly" data="$ 39,123.42" />
        <DashCard title="Client Reach" data="423" />
      </SimpleGrid>
      <BarChart />
    </div>
  )
}

export default AdminDashboard
