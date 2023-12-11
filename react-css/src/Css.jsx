/*
리액트에서는 css를 이용하는 방법들이 

1. 리액트 특징
-리액트는 파일이 컴포넌트 단위로 쪼개져 있다.
2.컴포넌트 마다 하나의 css파일을 생성해서 관리하는 방법을 주로 사용한다
(bem방식 block, element, modifier)을 사용하지 않는다.
3. 클래스가 class가 아닌 className으로 변경되어서 사용
*출력은 똑같이 class로 되기 때문에 선택자는 동일하게 한다.

단점 : 지역스타일 방식이기 때문에 reset과 같은 전역 스타일을 줘야 하는 상황에서 컴포넌트
내부의 다른 방식을 사용해야 한다.

리액트에서 사용하는 클래스 입력 종류
1. 기본 css- 일반적으로 사용하는 css방법
선택자를 이용하거나 컴포넌트-클래스 명을 활용해서 네이밍

2. css module 사용하기
css의 발전된 형태 일반  css와 구별하기 위해서  파일명에 .module을 붙여서 사용
ex)App.module.css
-클래스명 충돌 방지
-컴포넌트 단위의 스타일을 적용할ㄸ께
-같은 클래스명을 사용하면서 컴포넌트 단위로 다른 값을 줘야 할때 사용한다.

-module을 사용하게 되면 클래스명 뒤에 각각 고유의 값이 랜덤으로 부여되기 때문에
실수로 css 클래스 이름이 다른 곳에서 사용한 클래스명과 중복되어 사용되는 일이 
없어지게 된다

-보통 처음부터 module을 도입하지는 않지만 보통적으로 프로젝트 진행중에 수정하거나
추가로 인해서 class를 추가해야 하는 경우 충돌의 방지를 위해서 module을 사용하는 경우가
많다. 

-혹은 클래스명이 중복되지 않도록 네이밍 규칙을 유지하기 싫을때도 사용

규칙 :
-다른 컴포넌트명이랑 중복되지 않기
-컴포넌트 최상단 class명은 컴포넌트 이름과 일치시키기


3. sass(scss)사용
-yarn add node-sass
-yarn add sass 
두가지 설치 후 똑같이 사용

4. style-component 라이브러리 사용하기
-내장형이 아니기 때문에 별도의 설치가 필요함
yarn add styled-components
별도의 파일을 관리할 파일이 없으며, 스크립트 파일안에서 스타일을 작성
클래스명을 사용하지 않는다. (태그명 대신에 대문자로 시작하는 컴포넌트 명을 생성)
ex)<div className='box'></div> -> <Box></Box>
컴포넌트 내부에서 자동완성 확장 프로그램 설치
vscode-styled-components 설치

5. tailwind 라이브러리 사용하기
-별도의 파일이 필요없고 클래스명을 찾아서 작성하는 타입
코드 자체를 깨끗하게 사용할 수 있다.
다만 필요한 클래스를 직접 찾아서 작성해야 하기 때문에 초반 난이도가 다른 \
css방식에 비해 있는 편

설치 방법
yarn add -D package = 패키지 설치
yarn tailwind init -p = tailwind config파일 생성

글로벌 css나 최상위 css파일에 (보통 index.css)
@tailwind base;
@tailwind components;
@tailwind utilities

import 하기

*/