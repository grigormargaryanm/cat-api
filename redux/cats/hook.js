import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from './catsSlice'
export default function () {
    const dispatch = useDispatch()

    const handleChangeFilter = useCallback(
        (payload) => dispatch(changeFilter(payload)),
        [dispatch]
    )
    return {
        handleChangeFilter,
    }
}
