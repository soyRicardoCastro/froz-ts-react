import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@nextui-org/react'
import axios from '../services/axios'

import { User } from '../types'

import { loginSchema, LoginInput } from '../schema/auth.schema'

import useStore from '../store'
import { AxiosResponse } from 'axios'

function Login() {
  const [loginError, setLoginError] = useState<any|null>(null)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  })

  const { setUser } = useStore()

  const nav = useNavigate()

  async function onSubmit(values: LoginInput) {
    try {
      console.log(values)
      const { data }: AxiosResponse<User['body']> = await axios.post('/api/login', values)
      console.log(data)
      setUser(data)
      nav('/', { replace: true })
    } catch (e: any) {
      setLoginError(e.message)
    }
  }

  console.log({ errors })

  return (
    <div>
      <p>{loginError}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label='Email'
            placeholder='janedoe@example.com'
            type='text'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <Input.Password
            label='Password'
            placeholder='******'
            type='password'
            {...register('password')}
          />

          <p>{errors.password?.message}</p>
        </div>

        <button type="submit" className='px-5 py-2 bg-slate-200 text-blue-900 rounded-full'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login
