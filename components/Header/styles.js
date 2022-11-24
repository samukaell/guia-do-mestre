import styled from "styled-components";
import Image from "next/image";

const StylesHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d1114;

  position: fixed;
  top: 0;
  left: 0;
  .icon {
    color: #e4341c;
    margin-right: 5vw;
    font-size: 30px;
  }
`;

const StyledImage = styled(Image)`
  margin-top: 2vw;
  margin-left: 2vw;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  padding: 15px;
  background-color: #0d1114;
`;

export { StylesHeader, StyledImage };
