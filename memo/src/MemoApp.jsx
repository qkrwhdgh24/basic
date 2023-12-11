import React, { useState } from 'react'

function MemoApp() {
    /*
    state 로 메모장 관리
    1. 내용의 변경사항을 저장할 수 있는 
    state(초기값의 내용은 아무것도 없다가 작성하게 되기 때문)

    2. 메모의 리스트를 저장할 수 있는 배열 형태의 state
    (메모가 추가되면 배열형태로 계속 추가되기 때문)

    value값 받아오는 이벤트 = e.target.value;
    
    */

    const [memo, setMemo] = useState('')//텍스트를 받아올 state
    const [updateMemo, setUpdateMemo] = useState([])//메모의 리스트를 받아올 state

    const onChangeEvent = (e)=>{
        setMemo(e.target.value);
        console.log(e.target.value);
    }

    const onClickEvent=()=>{
        setUpdateMemo([...updateMemo,memo]);
        console.log(updateMemo);
        
    }
    return (
        <div>
            <h1>메모장</h1>
            <input type='text' value={memo} onChange={onChangeEvent}/>
            <button onClick={onClickEvent}>저장하기!</button>

            <h2>메모장 리스트</h2>
            <ul>
                {updateMemo.map((el, index)=>(
                    <li>{index}.{el}</li>
                ))}
            </ul>
        </div>
    )
}

export default MemoApp
