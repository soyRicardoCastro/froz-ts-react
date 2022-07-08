import { useParams } from 'react-router-dom'
import { Layout } from '../components'
import { useUser } from '../query'

function User() {
  const params = useParams()
  const id = params.id as string

  const { data: user, isLoading, isFetching, error } = useUser(id)

  return (
    <Layout
      title="User"
      category="Admin"
      isLoading={isLoading}
      isFetching={isFetching}
      error={error}
    >
      <div className="w-4/5 mx-auto h-full flex flex-col gap-5">
        <h1 className="text-2xl text-center">Info of {user?.firstName}</h1>

        <h2 className="text-2xl">
          Fullname:{' '}
          <span className="text-white font-semibold">{`${user?.firstName} ${user?.lastName}`}</span>
        </h2>

        <h2 className="text-2xl">
          Email: <span className="text-white font-semibold">{user?.email}</span>
        </h2>

        <h2 className="text-2xl">
          Age: <span className="text-white font-semibold">{user?.age}</span>
        </h2>

        <h2 className="text-2xl">
          Phone: <span className="text-white font-semibold">{user?.phone}</span>
        </h2>

        <h2 className="text-2xl">
          Address:{' '}
          <span className="text-white font-semibold">{user?.address}</span>
        </h2>

        <h2 className="text-2xl">
          Gender:{' '}
          <span className="text-white font-semibold">{user?.gender}</span>
        </h2>
      </div>
    </Layout>
  )
}

export default User
