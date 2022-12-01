import styled from "styled-components";

const StylesProgress = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d1114;

  .progress-bar{
    width: 100%;
    height: 20px;
    border-radius: 20px;
    background-color: black;
  }
  
  span{
    display: block;
    position: relative;
    background-color: #e4341c;
    height: 100%;
    border-radius: 20px;

  }

`;


export { StylesProgress };