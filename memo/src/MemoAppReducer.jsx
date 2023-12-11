import React, { useReducer } from 'react'

function MemoAppReducer() {
    //reducer버전으로 메모장 만들기

    //초기값 설정

    //실행함수 작성(switch , case값은 대문자로 설정);

    //const useReducer로 초기값과 실행함수 불러오기

    const init = {
        memo: '',
        updateMemo: [],
        //state처럼 모든 값을 초기값을 설정
        itemIndex: -1,
        //index값에 따라 새 메모를 저장하거나 기존 메모를 수정하는데 사용할 매개변수
        //다른 숫자는 정상적인 순번을 출력하지만 -1은 없는 인덱스 번호를 출력할때 나오는 오류

    }

    function memoReducer(state, action) {
        console.log(state);
        console.log(state.memo)
        
        switch (action.type) {

            case 'SET_MEMO': //case문은 대문자로 만드는것이 암묵적인 룰
                return {
                    ...state, memo: action.payload
                    //payload = state를 가져오기 위한 매개변수 암묵적인 룰
                    /*
                    reducer의 문법중에서 스프레드 연산자는 현재 상태에서 새 객체에 
                    복사해주는 역할을 한다. 스프레드를 이용해 객체를 복사해 놓으면
                    명시적으로 변경되는 부분이 업데이트 되지 않은 상태를 유지해준다.
                    reducer에서는 상태를 직접 변경하기 않고 업데이트 되는 속성으로 객체를
                    생성하는 방법을 사용하도록 하고 있다.
                    
                    리액트 자체에서 스프레드 연산자는 상태객체를 직접 수정하지 않고
                    상태객체를 직접 제어하지 않으며, 변경되는 객체의 상태를 제외한 나머지
                    변경되지 않는 객체들을 보호(유지)할 수 있다
                    
                    */
                }
            case 'SAVE_MEMO':
                return {
                    ...state, updateMemo: [...state.updateMemo, state.memo], memo: ''
                }
            case 'DELETE_MEMO':
                return {
                    ...state, updateMemo: state.updateMemo.filter((el, index) => index !== action.payload)
                }

            //내가 전달받은 index번호와 list안에 있는 index번호가 서로 일치하지 않는 요소만 정리
            //해당 값을 걸러주는 array 메서드

            case 'EDIT_MEMO':
                return {
                    ...state, memo: state.updateMemo[action.payload], itemIndex: action.payload
                }

            case 'SAVE_EDIT_MEMO':
                console.log(state.itemIndex)
                const editMemo = [...state.updateMemo];
                editMemo[state.itemIndex] = state.memo;
                
                return {
                    ...state, updateMemo: editMemo, memo: '', itemIndex : -1

                }
        }
    }

    const [state, dispatch] = useReducer(memoReducer, init);



    const onChangeEvent = (e) => {
        dispatch({ type: 'SET_MEMO', payload: e.target.value })

    }
    const onClickEvent = () => {
        // dispatch({ type: 'SAVE_MEMO' })
        if (state.itemIndex === -1) {
            dispatch({ type: 'SAVE_MEMO' })
        } else {
            dispatch({ type: 'SAVE_EDIT_MEMO' })
        }
    }

    const onDelete = (index) => {
        dispatch({ type: 'DELETE_MEMO', payload: index })
    }

    const onEdit = (index) => {
        dispatch({ type: 'EDIT_MEMO', payload: index })
    }



    return (
        <div>
            <h1>메모장</h1>
            <input type='text' value={state.memo} onChange={onChangeEvent} />
            <button onClick={onClickEvent}>저장하기!</button>

            <h2>메모장 리스트</h2>
            <ul>
                {state.updateMemo.map((el, index) => (
                    <li>
                        {index}.{el}
                        <button onClick={() => onDelete(index)}>삭제하기</button>
                        <button onClick={() => onEdit(index)}>수정하기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MemoAppReducer
