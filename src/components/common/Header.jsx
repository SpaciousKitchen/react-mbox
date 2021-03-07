import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../store/user';
import styled from 'styled-components';
import Responsive from './Responsive';
import { observer } from "mobx-react-lite"
const HeaderBlock = styled.div`
    width: 100%;
    height:8%;
    background: white; 
    a{
        text-decoration:none;
        color:#000000;
        font:bold 15px Segoe UI;
    }
    ul,li{ 
        list-style-type:none;
        float:left; 
    }
`;

const LogoBlock = styled.div`
    height:100%;

`;

const Wrapper = styled(Responsive)`
display:flex;
justify-content:space-between;
padding-right: 70px;
padding-left: 70px;

`;

const CenterBlock = styled.div`
    height:100%;
    li{
       margin-right:20px;
    } 
`

const UserBlock = styled.div`
    height:100%;  
    
`;



const Header = observer(() => {
  

    return (

        < HeaderBlock>
            <Wrapper>
                <LogoBlock>
                  
                </LogoBlock>
                <CenterBlock>
                    <ul>
                        <li><Link to="/info"> 메이커스페이스 </Link></li>
                        <li><Link to="/find"> 전문가 찾기 </Link></li>
                        <li><Link to="/inquirie"> 제작의회하기 </Link></li>   
                    </ul>
                  
                </CenterBlock>

                <UserBlock>

                    <ul>
                        <li>    {
                        user.user ? (
                            <Link to="/signout">로그아웃</Link>
                        ) : (
                                <Link to="/signin">로그인</Link>

                            )
                    }</li>

                    <li>   <Link to="/signup">/회원가입</Link></li>
                    </ul>
                </UserBlock>
            </Wrapper>
        </HeaderBlock>

    )
});

export default Header;