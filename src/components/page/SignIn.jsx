import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory ,Link} from 'react-router-dom';
import user from '../../store/user';
import { observer } from "mobx-react-lite"
import { useForm } from "react-hook-form";
import Header from '../common/Header';

const LoginBlock = styled.div`
  background: #ffffff;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CheckBoxBlock = styled.div`
display: flex;
margin-left: 30px;
 margin-top: 15px;
 font-size: 13px;
 
`;
const UserServiceBlock= styled.div`
display: flex;
justify-content: center;
align-items: center;

   ul,li{ 
        list-style-type:none;
        float:left; 
    }

    a{
        text-decoration:none;
        color:#615a5a;
        font-size:13px;
       
    }
    li{
       margin-right:20px;
       font-size: 13px;
      
    } 
 
`;

const WhiteBox = styled.form`
align-items:center;
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
    height: 20%;
    font-weight: bold;
`;

const InputError=styled.span`
    color:red;
    font-size:9px;

`;

const SiginIn =observer(() => {

    const { register, handleSubmit,errors } = useForm();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

   

    const onClickSubmit = () => {
       
        user.fetchLogin({ email: email, password: password });
        console.log(user.getUser());
        history.push('/');

    }

    const onClickEmail = (e) => {
        setEmail(e.target.value);
    }
    const onClickPassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <>
                <Header />
                <LoginBlock>
                    <WhiteBox onSubmit={ handleSubmit (onClickSubmit)}>
                        <h3>로고</h3>
                        <StyledInput name="email"ref={register ({pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i})} placeholder="이메일" value={email} onChange={onClickEmail} />
                        <br />
                        {errors.email && <InputError>이메일 양식으로 입력하세요</InputError>}
                        <StyledInput name="password" ref={register ({})} placeholder="비밀번호" type="password" value={password} onChange={onClickPassword} />
                        <br />
                        <CheckBoxBlock>
                        <label> <input type="checkbox"/>로그인 상태 유지 </label>
                        </CheckBoxBlock>
                        <UserServiceBlock>
                        <ul>
                        <li><Link to="/findid"> 아이디 찾기 </Link></li>
                        <li><Link to="/findpassword"> 비밀번호 재설정 </Link></li>
                        <li><Link to="/signup"> 회원가입 </Link></li>   
                    </ul>

                        </UserServiceBlock>

                    
                        <LoginButton type="submit">로그인</LoginButton>
                    </WhiteBox>
                </LoginBlock>
        </>

    )
});

export default SiginIn;