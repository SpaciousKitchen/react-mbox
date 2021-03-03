import React from 'react';
import styled from 'styled-components';

const LoginBlock= styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.form`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const StyledInput = styled.input`
margin-top:4px;
line-height: 40px;
border: 1px solid #c6c8ce;
border-radius: 3px;
width: 80%;
`;

const LoginButton = styled.button`
    background: #4911ea;
    border: none;
    border-radius: 30px;
    color: #ffffff;
    font-size: 17px;
    width: 80%;
    margin-top:20px;
    height: 30%;
    font-weight: bold;
`;

const onClickSubmit=()=>{

   

}


const SignUp=()=>{


    return(
       
     <>
     <LoginBlock>
     <WhiteBox>
        <StyledInput placeholder="이름"/>  
        <br/>
         <StyledInput placeholder="이메일"/>  
         <br/>
         <StyledInput placeholder="비밀번호" type="password"/>  
         <br/>
        <LoginButton onClick={onClickSubmit}>회원가입</LoginButton>
     </WhiteBox>
     </LoginBlock>
     
     </>

       
    )
}

export default SignUp;