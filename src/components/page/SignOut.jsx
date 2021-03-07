import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


import user from '../../store/user';
import Header from '../common/Header';


const LoginBlock= styled.div`
  position: absolute;
  height: 70%;
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
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

const SignOut=()=>{

    const history = useHistory();
   
    const onClickSubmit=(e)=>{
        e.preventDefault();
        user.fetchLogout();
        history.push('/');
    }
   
       return(
     <>
     <Header/>
     <LoginBlock>
     <WhiteBox onSubmit={onClickSubmit}>
        <LoginButton type="submit">로그아웃</LoginButton>
     </WhiteBox>
     </LoginBlock>
     
     </>

    )
}

export default SignOut;