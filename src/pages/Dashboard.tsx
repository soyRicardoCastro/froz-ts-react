import { Layout } from '../components'
import useStore from '../store'
import { Link } from 'react-router-dom'
import {
  AcademicCapIcon,
  LibraryIcon,
  MailIcon,
  ArchiveIcon,
} from '@heroicons/react/outline'

const Dashboard = () => {
  const { user } = useStore()

  return (
    <Layout title={`Welcome back ${user?.firstName}`} category="User">
      <div className="w-[90%] mx-auto gap-3 h-full grid grid-cols-2">
        <div className="h-[220px] shadow-lg rounded-2xl w-full">
          <h2 className="text-3xl text-white">
            {user?.firstName} {user?.lastName}
          </h2>
        </div>
        <div className="h-[220px] overflow-hidden shadow-lg rounded-2xl bg-slate-500 w-full p-3">
          <h4 className="text-md font-bold text-center text-white">
            My Universities
          </h4>
          <ul className="gap-1">
            {user?.universities?.map((u, i) => (
              <li key={i} className="m-0 p-1">
                {i}. {u.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[100px] w-full p-4 rounded-md bg-yellow-400 flex items-center justify-start text-2xl font-bold text-white hover:cursor-pointer">
          <AcademicCapIcon className="h-[60px] w-[60px] text-white" />
          <Link to="/unis">Universities</Link>
        </div>
        <div className="h-[100px] w-full p-4 rounded-md bg-blue-600 flex items-center justify-start text-2xl font-bold text-white hover:cursor-pointer">
          <MailIcon className="h-[60px] w-[60px] text-white" />
          <Link to="/sendMessages">Contact a University</Link>
        </div>
        <div className="h-[100px] w-full p-4 rounded-md bg-green-400 flex items-center justify-start text-2xl font-bold text-white hover:cursor-pointer">
          <LibraryIcon className="h-[60px] w-[60px] text-white" />
          <Link to="/user/unis">My Universities</Link>
        </div>
        <div className="h-[100px] w-full p-4 rounded-md bg-red-400 flex items-center justify-start text-2xl font-bold text-white hover:cursor-pointer">
          <ArchiveIcon className="h-[60px] w-[60px] text-white" />
          <Link to="/tasks">Tasks</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard

