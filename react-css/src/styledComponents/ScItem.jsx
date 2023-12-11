import React from 'react'
import styled,{css, keyframes} from 'styled-components';

function ScItem() {
    return (
        <Container className='item'>
            <ButtonItem sub>버튼</ButtonItem>
            <ButtonItem fontColor={'orange'}>버튼</ButtonItem>
            <ButtonItem>버튼</ButtonItem>
            <ButtonItem fontColor={'coral'}>버튼</ButtonItem>
            <ButtonItem>버튼</ButtonItem>

            <Box bgColor={'aqua'}>box</Box>
            <Circle bgColor={'pink'}></Circle>

        </Container>
    )
}

export default ScItem

const Container = styled.div`
    display: flex;
    max-width: 1024px;
    background: lightgray;
    padding: 12px;
    margin: 0px auto;
`

const ButtonItem = styled.button`
    background: aqua;
    width: 200px;
    height: 50px;
    border: solid 1px black;
    cursor: pointer;
    opacity: 0.5;
    transition: 500ms;
    color: ${(props)=>props.fontColor};
    ${(props)=>props.sub && css ` background : pink`};
    //css를 조건부로 넘겨줄때 css를 체크하는 메서드
    //css는 styled-components 에서 css를 따로 import 해야함
    //import styled,{css} from 'styled-components';
    &:hover{
        opacity: 1;
    };
`
const Box = styled.div`
    width: 200px;
    height: 200px;
    background: ${(props)=>props.bgColor};
`
const CircleAni = keyframes`
    25%{
        background: lightcyan;
    }
    50%{
        background: lightsalmon;
    }
    75%{
        background: lightskyblue;
    }
    100%{
        background: lightyellow;
    }
`
const Circle = styled(Box)`
    border-radius: 100%;
    animation: ${CircleAni} 5000ms infinite;
    //애니메이션 기능은 import를 추가해야 한다
`
