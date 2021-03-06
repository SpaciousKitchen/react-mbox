import React ,{useState}from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import useStore from '../../useStore';
import Header from '../common/Header';
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

const SignUp=()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const {user}=useStore();

    const onClickSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        user.signup({username:name,email:email,password:password});
        console.log(user.customer);
        user.login({username:name,email:email,password:password});
        console.log(user.now);
        history.push('/');

    }
    const onClickName=(e)=>{
      setName(e.target.value);
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
         <h3>회원가입하세요!</h3>
        <StyledInput placeholder="이름" value={name} onChange={onClickName}/>  
        <br/>
         <StyledInput placeholder="이메일" value={email} onChange={onClickEmail}/>  
         <br/>
         <StyledInput placeholder="비밀번호" type="password"value={password} onChange={onClickPassword}/>  
         <br/>
        <LoginButton type="submit">회원가입</LoginButton>
     </WhiteBox>
     </LoginBlock>
     
     </>

       
    )
}

export default SignUp;