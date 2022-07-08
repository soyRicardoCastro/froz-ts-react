import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { Layout } from '../components'
import useStore from '../store'

function UserUnis() {
  const { user } = useStore()

  if (user?.universities?.length === 0) return <Layout title={`Universities list of ${user?.firstName}`} category='Users'>
    <h1>You don't have universities yet</h1>
  </Layout>

  return (
    <Layout
      title={`Universities list of ${user?.firstName}`}
      category='Users'
    >
      <Table hoverable={true} className='w-4/5 mx-auto border-lg dark'>
      <Table.Head>
        <Table.HeadCell>
          Name
        </Table.HeadCell>
        <Table.HeadCell>
          State
        </Table.HeadCell>
        <Table.HeadCell>
          Division
        </Table.HeadCell>
        <Table.HeadCell>
          Academic Rank
        </Table.HeadCell>
        <Table.HeadCell>
          Coachs
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {user?.universities?.map((uni) => (
          <Table.Row key={uni.body._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Link to={`/unis/${uni.body._id}`}>
                {uni.body.name}
              </Link>
            </Table.Cell>
            <Table.Cell>
              {uni.body.state}
            </Table.Cell>
            <Table.Cell>
              {uni.body.division}
            </Table.Cell>
            <Table.Cell>
              {uni.body.academicRank}
            </Table.Cell>
            <Table.Cell>
              {uni.body.coachs.map((item, i) => (
                <div key={i} className="mb-2">
                  <div className="text-gray-400">{item.name}</div>
                  <div className="text-gray-200">{item.email}</div>
                  <div className="text-gray-200">{item.phone}</div>
                </div>
              ))}
              </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </Layout>
  )
}

export default UserUnis
