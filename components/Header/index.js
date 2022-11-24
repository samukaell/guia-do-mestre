import { StyledImage, StylesHeader } from "./styles"
import logo from '../../public/assests/logo1.jpg';
import { IoBookOutline } from "react-icons/io5";

export default function Header(props){
    return(
        <StylesHeader>
           <StyledImage src={logo}/>
           <IoBookOutline className="icon"/>
        </StylesHeader>
    )
}