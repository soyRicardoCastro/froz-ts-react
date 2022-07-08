import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../components'
import { registerSchema, RegisterUserInput } from '../schema/auth.schema'
import axios from '../services/axios'
import logo from '../assets/logo.png'

function Register() {
  const [registerError, setRegisterError] = useState<any | null>(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(registerSchema),
  })

  const nav = useNavigate()

  async function onSubmit(values: RegisterUserInput) {
    try {
      console.log(values)
      console.log('Enviando..xd')
      const res = await axios.post('/api/users', values)
      console.log(res)
      nav('/', { replace: true })
    } catch (e: any) {
      setRegisterError(e.message)
    }
  }

  console.log({ errors })

  return (
    <main className="relative min-h-screen w-full bg-slate-800">
      <div className="p-6">
        <header className="flex w-full justify-end">
          <div>
            <Link
              to="/login"
              className="rounded-2xl border-b-2 border-b-lime-300 bg-lime-400 py-3 px-4 font-bold text-white ring-2 ring-lime-300 hover:bg-lime-600 active:translate-y-[0.125rem] active:border-b-lime-200 transition"
            >
              LOGIN
            </Link>
          </div>
        </header>
        <section className="flex flex-col items-center justify-center mx-auto max-w-sm">
          <img src={logo} alt="Froz logo" className="my-14" />
          <div className="space-y-4">
            <h1 className="mb-6 text-4xl font-bold">Create your profile</h1>

            <p>{registerError}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="jane.doe@example.com"
                  {...register('email')}
                />
                <p>{errors.email?.message}</p>
              </div>

              <div>
                <Input
                  id="email"
                  label="First Name"
                  type="text"
                  placeholder="Jane Doe"
                  {...register('firstName')}
                />
                <p>{errors.firstName?.message}</p>
              </div>

              <div>
                <Input
                  id="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Jane Doe"
                  {...register('lastName')}
                />
                <p>{errors.lastName?.message}</p>
              </div>

              <div>
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="*********"
                  {...register('password')}
                />
                <p>{errors.password?.message}</p>
              </div>

              <div>
                <Input
                  id="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="*********"
                  {...register('passwordConfirmation')}
                />
                <p>{errors.passwordConfirmation?.message}</p>
              </div>

              <div>
                <Input
                  id="age"
                  label="Age"
                  type="text"
                  placeholder="19"
                  {...register('age')}
                />
                <p>{errors.age?.message}</p>
              </div>

              <div>
                <Input
                  id="gender"
                  label="Gender"
                  type="text"
                  placeholder="Female"
                  {...register('gender')}
                />
                <p>{errors.gender?.message}</p>
              </div>

              <div>
                <Input
                  id="address"
                  label="Address"
                  type="text"
                  placeholder="Street +12 Venecia -a"
                  {...register('address')}
                />
                <p>{errors.address?.message}</p>
              </div>

              <div>
                <Input
                  id="phone"
                  label="Phone"
                  type="text"
                  placeholder="+1 123 132 567"
                  {...register('phone')}
                />
                <p>{errors.phone?.message}</p>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl border-b-4 border-b-lime-600 bg-lime-500 py-3 font-bold text-white hover:bg-lime-400 active:translate-y-[0.125rem] active:border-b-lime-700 my-4"
              >
                REGISTER
              </button>
            </form>
            <p className="text-white text-sm">
              Go to{' '}
              <Link to="/login" className="text-lime-500 hover:underline">
                Login Page
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register
