import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface StatsCardProps {
  value: number | string
  description: string
}

const StatsCard: React.FC<StatsCardProps> = ({ value, description }) => {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {typeof value === 'number' ? `$${value.toLocaleString()}` : value}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export default StatsCard