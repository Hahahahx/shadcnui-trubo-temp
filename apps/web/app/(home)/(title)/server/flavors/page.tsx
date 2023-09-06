'use client'
import { useRequest } from 'ahooks'
import React from 'react'
import { columns } from '@/components/tables/columns'

// import { z } from 'zod'

// import { taskSchema } from '@/components/data/schema'
import { DataTable } from '@/components/tables/data-table'

// Simulate a database read for tasks.
// async function getTasks() {
//   // const data = await fs.readFile(
//   //   path.join(process.cwd(), 'app/examples/tasks/data/tasks.json'),
//   // )

//   const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }

export default function Index() {
  // const tasks = await getTasks()

  const {
    data, loading, refreshAsync,
  } = useRequest(() => fetch('/tasks.json'))

  React.useEffect(() => {
    console.log(data)
  }, [])

  return (
    <>
      <DataTable data={[]} columns={columns} />
    </>
  )
}
