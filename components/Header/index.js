import { useRouter } from "next/router";
import { StyledImage, StylesHeader } from "./styles";
import logo from "../../public/assests/logo1.jpg";
import { IoBookOutline } from "react-icons/io5";

export default function Header(props) {
  const router = useRouter();
  function goHome() {
    router.push("/home");
  }
  function goPerfil(){
    router.push("/perfil");
  }
  return (
    <StylesHeader>
      <StyledImage src={logo} onClick={goHome} alt='imagem-logo'/>
      <IoBookOutline className="icon" onClick={goPerfil}/>
    </StylesHeader>
  );
}
