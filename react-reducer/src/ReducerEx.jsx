import React, { useReducer, useState } from 'react'

function ReducerEx() {

    //카운트 관리 state ver
    // const [count, setCount] = useState(0);

    // const countPlus = ()=>{
    //     setCount((prev)=>prev +1);
    // }
    // const countMinus = () =>{
    //     setCount((prev)=>prev -1);
    // }

    //reducer ver

    
    //state = 상태값을 가질 변수
    //dispatch = 상태값을 변경하기 위해 일어나는 이벤트
    //useReducer(reducer, init)
    //reducer는 reducer함수 자체를 의미,
    //init은 초기값을 의미
    const init = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'countPlus':
                return { count: state.count + 1 };
            case 'countMinus':
                return { count: state.count - 1 };
        }
    }
    const [state, dispatch] = useReducer(reducer, init);
   
    return (
        <div>
            count : {state.count};
            {/* <button onClick={countPlus}>+</button>
            <button onClick={countMinus}>-</button> */}
            <button onClick={()=>dispatch({type : 'countPlus'})}>+</button>
            <button onClick={()=>dispatch({type : 'countMinus'})}>-</button>
        </div>
    )
}

export default ReducerEx
