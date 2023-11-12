import { useRouter } from 'next/router'
import { useGetCatQuery } from '../../redux/cats/api/catsApi'
import { Spinner } from '../../components/ui'

const Cat = () => {
    const { query } = useRouter()
    const { data } = useGetCatQuery(query?.id || '')

    return (
        <div className="w-full flex justify-center items-center h-screen">
            {data ? (
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img
                            className="object-cover h-80 w-full rounded-lg"
                            src={data.url}
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {data.breeds[0].name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {data.breeds[0].description}
                        </p>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

export default Cat
