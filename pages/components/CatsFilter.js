import { memo } from 'react'
import { Select } from '../../components/ui'
import { sizes, mimeTypes, orders } from '../../constants/cats'

const CatsFilter = ({ handleFilter, filter }) => {
    return (
        <>
            <Select
                name="mimeTypes"
                value={filter.mimeTypes}
                handleChange={handleFilter}
                options={mimeTypes}
                title="Choose a mime type"
            />
            <Select
                name="size"
                value={filter.size}
                handleChange={handleFilter}
                options={sizes}
                title="Choose a size"
            />
            <Select
                name="order"
                value={filter.order}
                handleChange={handleFilter}
                options={orders}
                title="Choose a order"
            />
        </>
    )
}

export default memo(CatsFilter)
