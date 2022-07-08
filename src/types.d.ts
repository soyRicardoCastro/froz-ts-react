export interface University {
  body: {
    _id: string
    name: string
    state: string
    careers: [{
      _id: string
      name: string
    }]
    academicRank: string
    division: string
    coachs: [{
      _id: string
      name: string
      phone: string
      email: string
      gender: string
    }]
    createdAt: Date
    updatedAt: Date
    __v: number
  }
}

type Role = 'user' | 'admin' | 'dev' | 'agent'

export interface User {
  body: {
    _id: string
    firstName: string
    lastName: string
    age: number | string
    email: string
    phone: string
    address: string
    gender: string
    universities?: University[]
    completedTask: number
    role: Array<Role>
    createdAt: Date
    updatedAt: Date
    __v: number
  }
}

interface Task {
  body: {
    _id: string
    name: string
    short: string
    description: string
    createdAt: Date
    updatedAt: Date
    __v: number
  }
}

interface UserTask {
  body: {
    _id: string
    user: User
    task: Task
    createdAt: Date
    updatedAt: Date
  }
}
