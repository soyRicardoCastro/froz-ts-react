import { Loading } from '@nextui-org/react'

interface Props {
  body: {
    isFetching?: boolean
    isLoading?: boolean
    error?: unknown
  }
}

function Loader({ isFetching, isLoading, error }: Props['body']) {
  if (isLoading) return <Loading color="secondary">Loading data...</Loading>
  if (isFetching) return <Loading color="secondary">Refreshing data...</Loading>
  if (error) return <h1 className="text-2xl text-red-600 font-bold">Internal server error :/</h1>

  return <div></div>
}

export default Loader
