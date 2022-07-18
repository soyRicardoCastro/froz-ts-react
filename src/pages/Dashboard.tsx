import { Layout } from '../components'
import useStore from '../store'

const Dashboard = () => {
  const { user } = useStore()

  return (
    <Layout title={`Dashboard of ${user?.firstName}`} category="User">
      <div className="w-full gap-3 h-full grid grid-cols-2">
        <div className="h-[120px] shadow-lg rounded-2xl bg-slate-500 w-full">
          a
        </div>
        <div className="h-20 shadow-lg rounded-2xl bg-slate-500 w-full">a</div>
      </div>
    </Layout>
  )
}

export default Dashboard
