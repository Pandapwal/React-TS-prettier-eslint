import { ReactNode, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { ItemState, set, remove, clear, itemsList } from '../slices/ItemsSlice'

import data from '../data/items.json'
import { Link } from 'react-router-dom'

function ItemsPage() {
    const [list, setList] = useState<ReactNode[]>([])
    const items = useAppSelector(itemsList)
    const dispatch = useAppDispatch()

    function displayItems(): ReactNode[] {
        const arr: ReactNode[] = []

        items.forEach((item: ItemState, index: number) => {
            arr.push(
                <div className='card bg-dark shadow-sm col-12 col-sm-6 col-md-4' key={'item-'+item.id}>
                    <svg
                        className='bd-placeholder-img card-img-top'
                        width='100%'
                        height='225'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                        aria-label='Placeholder: Thumbnail'
                        preserveAspectRatio='xMidYMid slice'
                        focusable='false'
                    >
                        <title>Placeholder</title>
                        <rect width='100%' height='100%' fill={item.color} />
                        <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
                            Thumbnail
                        </text>
                    </svg>

                    <div className='card-body'>
                        <p className='card-text'>Item {item.id}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='btn-group'>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-outline-secondary'
                                >
                                    <Link to={`/items/${item.id}`}>View</Link>
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-outline-primary'
                                >
                                    Edit
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-outline-danger'
                                    onClick={() => dispatch(remove(index))}
                                >
                                    Delete
                                </button>
                            </div>
                            <small className='text-muted'>{item.shape}</small>
                        </div>
                    </div>
                </div>,
            )
        })

        return arr
    }

    useEffect(() => {
        setList(displayItems())
    }, [items])

    useEffect(() => {
        if (items.length === 0) {
            dispatch(set(data as ItemState[]))
        }
    }, [])

    return (
        <div>
            <h1 className='text-center w-100 my-4'>ITEMS</h1>
            <div className='album py-5'>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>{list}</div>
                </div>
            </div>
            <div className='d-flex justify-content-center p-4'>
                <button className='btn btn-danger' onClick={() => dispatch(clear())}>
                    Remove all items
                </button>
            </div>
        </div>
    )
}

export default ItemsPage
