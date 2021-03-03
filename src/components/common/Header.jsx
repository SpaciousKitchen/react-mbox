import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderBlock=styled.div`
 position: fixed;
  width: 100%;
  background: white;
`;

const UserBlock=styled.div`
padding:10px;
float: right;
 a{
     text-decoration:none;
     color:#000000;
     font:bold 15px Segoe UI;
 }
`;



const Header=()=>{


    return(
       
        < HeaderBlock>

            <UserBlock>
            <Link to="/signin"> 로그인 </Link>/
            <Link to="/signup"> 회원가입 </Link>
            </UserBlock>
        </HeaderBlock>

       
    )
}

export default Header;