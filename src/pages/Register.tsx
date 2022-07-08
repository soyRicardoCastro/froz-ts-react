import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from '../services/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@nextui-org/react'

import { registerSchema, RegisterUserInput } from '../schema/auth.schema'

function Register() {
  const [registerError, setRegisterError] = useState<any|null>(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(registerSchema)
  })

  const nav = useNavigate()

  async function onSubmit(values: RegisterUserInput) {
    try {
      console.log(values)
      console.log('Enviando..xd')
      const res = await axios.post('/api/users', values);
      console.log(res)
      nav('/', { replace: true })
    } catch (e: any) {
      setRegisterError(e.message);
    }
  }

  console.log({ errors });

  return (
    <div>
      <p>{registerError}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <Input
            label='email'
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-element">
          <Input
            label='First Name'
            type="text"
            placeholder="Jane Doe"
            {...register("firstName")}
          />
          <p>{errors.firstName?.message}</p>
        </div>

        <div className="form-element">
          <Input
            label='Last Name'
            type="text"
            placeholder="Jane Doe"
            {...register("lastName")}
          />
          <p>{errors.lastName?.message}</p>
        </div>

        <div className="form-element">
          <Input
            label='Age'
            type="text"
            placeholder="19"
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
        </div>

        <div className="form-element">
          <Input
            label='Gender'
            type="text"
            placeholder="Female"
            {...register("gender")}
          />
          <p>{errors.gender?.message}</p>
        </div>

        <div className="form-element">
          <Input
            label='Address'
            type="text"
            placeholder="Street +12 Venecia -a"
            {...register("address")}
          />
          <p>{errors.address?.message}</p>
        </div>

        <div className="form-element">
          <Input
            label='Phone'
            type="text"
            placeholder="+1 123 132 567"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
        </div>

        <div className="form-element">
          <Input.Password
            label='Password'
            // type="password"
            placeholder="*********"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className="form-element">
          <Input.Password
            label='Confirm Password'
            // type="password"
            placeholder="*********"
            {...register("passwordConfirmation")}
          />
          <p>{errors.passwordConfirmation?.message}</p>
        </div>
        <button type="submit" className='px-5 py-2 bg-slate-200 text-blue-900 rounded-full'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Register
