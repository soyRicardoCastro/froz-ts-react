import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../components'
import axios from '../services/axios'
import { User } from '../types'
import { loginSchema, LoginInput } from '../schema/auth.schema'
import useStore from '../store'
import logo from '../assets/logo.png'

function Login() {
  const [loginError, setLoginError] = useState<any | null>(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  const { setUser } = useStore()

  const nav = useNavigate()

  async function onSubmit(values: LoginInput) {
    try {
      console.log(values)
      const { data }: AxiosResponse<User['body']> = await axios.post(
        '/api/login',
        values
      )
      console.log(data)
      setUser(data)
      nav('/', { replace: true })
    } catch (e: any) {
      setLoginError(e.message)
    }
  }

  console.log({ errors })

  return (
    <main className="relative min-h-screen w-full bg-slate-800">
      <div className="p-6">
        <header className="flex w-full justify-end">
          <div>
            <Link
              to="/register"
              className="rounded-2xl border-b-2 border-b-lime-300 bg-lime-400 py-3 px-4 font-bold text-white ring-2 ring-lime-300 hover:bg-lime-600 active:translate-y-[0.125rem] active:border-b-lime-200 transition"
            >
              REGISTER
            </Link>
          </div>
        </header>
        <section className="flex flex-col items-center justify-center mx-auto max-w-sm">
          <img src={logo} alt="Froz logo" className="my-14" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Log in</h1>

            <p className="text-center text-red-500 text-md">{loginError}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  id="email"
                  label="Email"
                  placeholder="janedoe@example.com"
                  type="text"
                  {...register('email')}
                />
                <p>{errors.email?.message}</p>
              </div>

              <div>
                <Input
                  id="password"
                  label="Password"
                  placeholder="******"
                  type="password"
                  {...register('password')}
                />

                <p>{errors.password?.message}</p>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl border-b-4 border-b-lime-600 bg-lime-500 py-3 font-bold text-white hover:bg-lime-400 active:translate-y-[0.125rem] active:border-b-lime-700 my-4"
              >
                LOG IN
              </button>
            </form>
            <p className="text-white text-sm">
              Go to{' '}
              <Link to="/register" className="text-lime-500 hover:underline">
                Register Page
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login
