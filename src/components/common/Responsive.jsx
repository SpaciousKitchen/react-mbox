
import styled from "styled-components"
const   ResponsiveBlock =styled.div`
margin: 0 auto;

`;

const  Responsive=({children,...rest})=>{
    return <ResponsiveBlock {...rest }>{children}</ResponsiveBlock>
}
export default  Responsive;