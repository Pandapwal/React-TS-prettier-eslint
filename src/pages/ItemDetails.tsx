import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../hooks'
import { ItemState, get, itemsSelected } from '../slices/ItemsSlice'

type RouteParams = {
    id: string
}

function ItemDetails() {
    const params = useParams<RouteParams>()
    const item = useAppSelector(itemsSelected)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(get(params.id))
    },[])

    return (
        <div>
        {item
        ?
            <div>
                <h1>Item {item.id}</h1>
            </div>
        :
            <div>
                <p>empty</p>
            </div>
        }
        </div>
    )
}

export default ItemDetails
