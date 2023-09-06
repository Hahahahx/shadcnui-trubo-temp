import fs from 'node:fs'
import path from 'node:path'
import { faker } from '@faker-js/faker'

import {
  labels, priorities, statuses,
} from './data'

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.datatype.number({
    min: 1000, max: 9999,
  })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}))

fs.writeFileSync(
  path.join(__dirname, 'tasks.json'),
  JSON.stringify(tasks, null, 2),
)

console.log('✅ Tasks data generated.')
