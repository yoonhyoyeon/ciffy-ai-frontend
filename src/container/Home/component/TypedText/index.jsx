 'use client';
 import { ReactTyped } from "react-typed";
 
 // 모달창 띄운 상태에서 새로고침 시 typed 효과가 중복 발생하는 오류 발생.
 
 const TypedText = ({string}) => {
    return (
        <ReactTyped 
            loop
            startWhenVisible
            strings={[string]} 
            typeSpeed={60}
            showCursor={true}
            backDelay={6000}
        />
    );
}

export default TypedText;