import React ,{useState,useEffect}from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import user from '../../store/user';
import Header from '../common/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { set } from 'mobx';


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
 props.padding ==='25px'&& css`
 margin-top: 25px;
 `
 }
`;

const AuthBlock=styled.div`
position: relative;

.authError{
  position: absolute;
  color:red;
  font-size:12px;
  top: 30px;
  right: -0px; 
}
.authSuccess{
  position: absolute;
  color:#54a517;
  font-size:12px;
  top: 30px;
  right: -0px; 
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


const InputError=styled.span`
  color:red;
    font-size:9px;
  
`;



const SignUp=()=>{

  const history = useHistory();
  const { register, handleSubmit, errors,watch ,getValues,setError} = useForm({
    mode: 'onChange',
  });
  const [authCode, setAuthCode] = useState('1');
    

    const onClickSubmit=(data)=>{
        alert(JSON.stringify(data));
        user.fetchSignUp({email:data.email,password:data.password});
        history.push('/');

    }

    const onClickSendMail=async()=>{
      console.log("pass");
      const getEmail = getValues("email"); 
      console.log(getEmail);
     await axios.post("/user/sendEmail").then((res)=>{
       console.log(res.data);
      setAuthCode(res.data);
     })
     .catch((error)=>{
       console.log(error);
       setError("authNumber",{message:"올바르지 않은 이메일 입니다."});
     })
    }
    
    return(  
     <>
     <Header/>
     <LoginBlock>
     <WhiteBox onSubmit={handleSubmit(onClickSubmit)}>
         <h2>일반 회원 </h2>
         <h2>이메일로 가입하기 </h2>
         <StyledInput name="email" placeholder="이메일" size="medium" ref={register}/>  
         <AuthButton onClick={onClickSendMail}  type="button">메일 전송</AuthButton>
         <br/>
         {errors.email&& <InputError>{errors.email?.message}</InputError>}
         <br/>
          <AuthBlock>
          <StyledInput name="authNumber"placeholder="인증번호"   ref={register({ 
           required: true,
           validate: value => value === authCode
         })} />  
         <br/>
          {errors.authNumber  && <span className="authError">올바른 인증번호를 입력하세요</span> }
          {!errors.authNumber && watch("authNumber")&&
           <span className="authSuccess">인증 완료</span> }
        
          </AuthBlock>
       
        <br/>
      
        <StyledInput name="password"placeholder="비밀번호 영문, 숫자, 특수문자 포함 8~34자" type="password"  padding="25px" ref={register({ required: true,
         pattern: /(?=.*\d{1,34})(?=.*[~`!@#$%\^&*()-+=]{1,34})(?=.*[a-zA-Z]{1,34}).{8,34}$/
      })}
       
        />  
        <br/>
         {errors.password  && <InputError className="authError"> 비밀번호 영문, 숫자, 특수문자 포함 8~34자 </InputError>}
         <AuthBlock>
         <StyledInput name="passwordCheck" placeholder="비밀번호 확인"ref={register({ 
           required: true,
           validate: value => value === watch("password")
         })} type="password"
         />  
         {errors.passwordCheck && <span  className="authError">비밀번호를 확인하세요</span>}
         { !errors.password&& watch("passwordCheck")&& !errors.passwordCheck  && <span className="authSuccess">확인 완료</span> }
         </AuthBlock>  
         <br/>

         <span>고객님의 소중한 정보를 반드시 확인 해 주세요. 메이크 드림의 이용약관 과 개인정보 처리방침에 동의합니다.</span>
        <LoginButton type="submit">회원가입</LoginButton>
     </WhiteBox>
     </LoginBlock>
     
     </>

       
    )
}

export default SignUp;