import { useParams } from 'react-router-dom'
import { Layout } from '../components'
import { useUser } from '../query'

function User() {
  const params = useParams()
  const id = params.id as string

  const { data: user, isLoading, isFetching, error } = useUser(id)

  return (
    <Layout
      title='User'
      category='Admin'
      isLoading={isLoading}
      isFetching={isFetching}
      error={error}
    >
      <div>
        <h1 className='text-2xl text-center'>Info of {user?.firstName}</h1>

        <p>{user?.age}</p>
        <p>{user?.gender}</p>
        <p>{user?.address}</p>
        <p>{user?.phone}</p>
        <p>{user?.email}</p>
      </div>
    </Layout>
  )
}

export default User
