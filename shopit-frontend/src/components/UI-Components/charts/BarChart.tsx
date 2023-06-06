import { faker } from '@faker-js/faker'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Order',
    },
  },
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augest',
  'September',
  'October',
  'November',
  'December',
]

export const data = {
  labels,
  datasets: [
    {
      label: ' Orders',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 427 })),
      backgroundColor: '#dbb385',
    },
  ],
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}
