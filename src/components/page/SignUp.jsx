import React ,{useState}from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import user from '../../store/user';
import Header from '../common/Header';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
const LoginBlock= styled.div`
 
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

const sizeStyled=css`
 ${props=>
 props.size ==='medium'&& css`
 width:60%;
 `
 }
`;
const paddingStyled=css`
 ${props=>
 props.padding ==='30px'&& css`
 margin-top: 30px;
 `
 }
`;

const StyledInput = styled.input`
margin-top:5px;
line-height: 40px;
border: 1px solid #c6c8ce;
border-radius: 3px;
width: 100%;
padding: 8px;

${sizeStyled}
${paddingStyled}
`;



const LoginButton = styled.button`
    background: #4911ea;
    border: none;
    border-radius: 30px;
    color: #ffffff;
    font-size: 17px;
    width: 80%;
    margin-top:20px;
    height: 15%;
    font-weight: bold;
`;

const AuthButton = styled.button`
    border: 1px solid #c6c8ce;
    border-radius: 3px;
    padding: 15px 20px;
    width: 30%;
    height: 100;
    line-height: 25px;
    color: #c1bbbb;
    margin-left: 5px;
`;

const SignUp=()=>{

    const [authNumber, setAuthNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const onClickSubmit=(e)=>{
        e.preventDefault();
        // console.log(user);
        // user.signup({username:name,email:email,password:password});
        // console.log(user.customer);
        // user.login({username:name,email:email,password:password});
        // console.log(user.now);
        history.push('/');

    }
    const onClickAuthNumber=(e)=>{
      setAuthNumber(e.target.value);
    }
    const onClickEmail=(e)=>{
        setEmail(e.target.value);
    } 
    const onClickPassword=(e)=>{
        setPassword(e.target.value);
    }
    
    return(
       
     <>
     <Header/>
     <LoginBlock>
     <WhiteBox onSubmit={onClickSubmit}>
         <h2>일반 회원 </h2>
         <h2>이메일로 가입하기 </h2>
      
         <StyledInput name="email"  className="emailInput" placeholder="이메일" value={email} onChange={onClickEmail} size="medium"/>  
         <AuthButton>인증</AuthButton>
         <br/>

         <StyledInput name="authNumber"placeholder="인증번호" value={authNumber} onChange={onClickAuthNumber}/>  
        <br/>
         
         <StyledInput name="password"placeholder="비밀번호" type="password"value={password} onChange={onClickPassword} padding="30px"/>  
         <br/>
         <StyledInput name="passwordCheck" placeholder="비밀번호" type="passwordCheck"value={password} onChange={onClickPassword}/>  
         <br/>

         {/* <span>고객님의 소중한 정보를 반드시 확인 해 주세요. 메이크 드림의 이용약관 과 개인정보 처리방침에 동의합니다.</span> */}
        <LoginButton type="submit">회원가입</LoginButton>
     </WhiteBox>
     </LoginBlock>
     
     </>

       
    )
}

export default SignUp;