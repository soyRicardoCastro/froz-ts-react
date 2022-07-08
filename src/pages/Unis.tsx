import { Link } from 'react-router-dom'
import { Table, Checkbox } from 'flowbite-react'
import { Layout } from '../components'
import { useUnis } from '../query'

function Unis() {
  const {
    data: unis,
    error,
    isFetching,
    isLoading
  } = useUnis()

  return (
    <Layout
      title='Universities'
      category='Users'
      error={error}
      isFetching={isFetching}
      isLoading={isLoading}
    >
      <Table hoverable={true} className='w-4/5 mx-auto border-lg dark'>
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox />
        </Table.HeadCell>
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
        {unis?.map((uni) => (
          <Table.Row key={uni._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Link to={`/unis/${uni._id}`}>
                {uni.name}
              </Link>
            </Table.Cell>
            <Table.Cell>
              {uni.state}
            </Table.Cell>
            <Table.Cell>
              {uni.division}
            </Table.Cell>
            <Table.Cell>
              {uni.academicRank}
            </Table.Cell>
            <Table.Cell>
              {uni.coachs.map((item, i) => (
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

export default Unis
