import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
import { useCatActions, catsSelectors } from '../redux'
import { Spinner } from '../components/ui'
import { useGetCatsQuery } from '../redux/cats/api/catsApi'
import CatsFilter from './components/CatsFilter'
import UploadCatImage from './components/UploadCatImage'

const Home = () => {
    const { handleChangeFilter } = useCatActions()
    const filter = useSelector(catsSelectors.getCatsFilter)
    const [cats, setCats] = useState([])

    const [page, setPage] = useState(1)

    const { data } = useGetCatsQuery({
        limit: 10,
        page,
        hasBreeds: true,
        ...filter,
    })

    useEffect(() => {
        if (data) {
            setCats((prevState) => [...prevState, ...data])
        }
    }, [data])

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleFilter = useCallback(
        ({ target: { name, value } }) => {
            handleChangeFilter({ ...filter, [name]: value })
            setPage(1)
            setCats([])
        },
        [filter, handleChangeFilter]
    )

    return (
        <div className="w-full">
            <div className="bg-yellow-600 py-4 flex">
                <CatsFilter filter={filter} handleFilter={handleFilter} />
            </div>
            <UploadCatImage />
            <div className="flex justify-center">
                <InfiniteScroll
                    dataLength={cats.length}
                    next={handleChangePage}
                    hasMore={true}
                    loader={<Spinner />}
                    endMessage={
                        <p className="text-center">
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {cats.map(({ url, id }) => (
                        <Link
                            href={`/cat/${id}`}
                            key={id}
                            className="cursor-pointer m-5 max-w-sm bg-white rounded-lg"
                        >
                            <img
                                className="object-cover h-80 w-full rounded-lg"
                                src={url}
                                alt="image description"
                            />
                        </Link>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Home
