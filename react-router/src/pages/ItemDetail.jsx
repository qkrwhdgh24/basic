import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDeatil() {
    const {id} = useParams()
    
    //useParams() = 리액트 라우터에를 사용할 때 다른 곳에 있는 파라미터 정보를 활용해야
    //하는 경우 사용하는 리액트 라우터 구성요소
    const item = {id : id , name : `item${id}`}
    return (
        <div>
            <h1>상품 디테일 페이지</h1>
            <p>{item.id}</p>
            <p>{item.name}</p>
            
        </div>
    )
}

export default ItemDeatil
