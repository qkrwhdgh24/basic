import React from 'react'
import { Link } from 'react-router-dom'


const item = [
    {id : 1, name : 'item1'},
    {id : 2, name : 'item2'},
    {id : 3, name : 'item3'},
]
function ItemList() {
    return (
        <div>
            <h1>아이템 리스트</h1>
            <ul>
                {item.map((el)=>(
                    <li key={item.id}>
                        <Link to={`/items/${el.id}`}>{el.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList
