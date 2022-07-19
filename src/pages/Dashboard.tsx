import { Layout } from '../components'
import useStore from '../store'
import { useTasks } from '../query'

const Dashboard = () => {
  const { user } = useStore()
  const { data } = useTasks()
  return (
    <Layout title={`Welcome back ${user?.firstName}`} category="User">
      <div className="w-full gap-3 h-full grid grid-cols-2">
        <div className="h-[120px] shadow-lg rounded-2xl bg-slate-500 w-full">
          <h2 className="text-2xl text-white">
            {user?.firstName} {user?.lastName}
          </h2>
        </div>
        <div className="h-auto shadow-lg rounded-2xl bg-slate-500 w-full">
          <h4 className="text-md text-white">Tasks</h4>
          <ul>
            {data?.map((t, i) => (
              <li key={i}>
                {i}. {t.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
