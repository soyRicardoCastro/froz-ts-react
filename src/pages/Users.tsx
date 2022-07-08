import { Layout } from '../components'
import { useUsers } from '../query'
import { Table, Checkbox } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Users() {
  const {
    data: users,
    error,
    isFetching,
    isLoading
  } = useUsers()

  return (
    <Layout
      title='Users'
      category='Admin'
      isFetching={isFetching}
      isLoading={isLoading}
      error={error}>
      <Table hoverable={true} className='w-4/5 mx-auto border-lg dark'>
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>
          Fullname
        </Table.HeadCell>
        <Table.HeadCell>
          Email
        </Table.HeadCell>
        <Table.HeadCell>
          Age
        </Table.HeadCell>
        <Table.HeadCell>
          Gender
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {users?.map((user) => (
          <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Link to={`/users/${user._id}`}>
                {`${user.firstName} ${user.lastName}`}
              </Link>
            </Table.Cell>
            <Table.Cell>
              {user.email}
            </Table.Cell>
            <Table.Cell>
              {user.age}
            </Table.Cell>
            <Table.Cell>
              {user.gender}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </Layout>
  )
}

export default Users
