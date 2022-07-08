import {
  Register,
  Login,
  Landing,
  Profile,
  Users,
  User,
  UserUnis,
  Tasks,
  Task,
  ComingSoon,
  Unis,
  Uni,
  Unauthorized,
  NotFound
} from './pages'
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './components'

function App() {

  return (
    <div className='h-full'>
    <Routes>
      {/* Normal Routes that all can access  */}
      <Route path='/' element={<ComingSoon />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/unauthorized' element={<Unauthorized />} />
      <Route path='/*' element={<NotFound />} />

      {/* Admin Routes  */}
      <Route element={<RequireAuth allowedRoles={['admin', 'dev']} />}>
        <Route path='/create/admin' element={<ComingSoon />} />
        <Route path='/create/agent' element={<ComingSoon />} />
        <Route path='/create/task' element={<ComingSoon />} />
        <Route path='/create/university' element={<ComingSoon />} />

        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User />} />
      </Route>

      {/* Authenticated user */}
      <Route element={<RequireAuth allowedRoles={['admin', 'user', 'agent', 'dev']} />}>
        <Route path='/dashboard' element={<ComingSoon />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user/unis' element={<UserUnis />} />
        <Route path='/unis' element={<Unis />} />
        <Route path='/unis/:id' element={<Uni />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/tasks/:id' element={<Task />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
