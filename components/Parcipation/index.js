import { StylesDiv } from "./styles";
import { IoCheckboxOutline, IoCheckbox } from "react-icons/io5";
import { useState } from "react";

export default function Participation(props) {
  const [check, setCheck] = useState(false);
  function cickCheck(){
    setCheck(!check);
  }
  return (
    <StylesDiv>
      {check ? (
        <IoCheckbox className="icon" onClick={cickCheck}/>
      ) : (
        <IoCheckboxOutline className="icon" onClick={cickCheck}/>
      )}
    </StylesDiv>
  );
}
