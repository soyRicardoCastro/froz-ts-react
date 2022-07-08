import { useParams } from 'react-router-dom'
import { useTask } from '../query'
import { Layout } from '../components'

function Task() {
  const params = useParams()
  const id = params.id as string

  const {
    data: task,
    error,
    isLoading,
    isFetching
  } = useTask(id)

  return (
    <Layout
      title={task?.name ? task.name : 'Task'}
      category='Users'
      error={error}
      isLoading={isLoading}
      isFetching={isFetching}
    >
      <div className='w-4/5 mx-auto h-auto'>
        <h1 className='text-2xl text-white'>{task?.name}</h1>
        <h3 className='text-xl font-semibold text-gray-200'>{task?.short}</h3>
        <p className='m-5'>{task?.description}</p>
        <button className='px-5 py-2 my-10 rounded-full bg-lime-600 hover:bg-lime-200 transition'>Done</button>
      </div>
    </Layout>
  )
}

export default Task
