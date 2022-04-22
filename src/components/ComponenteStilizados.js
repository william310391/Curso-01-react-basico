import React from 'react'
import styled,{css,keyframes,ThemeProvider,createGlobalStyle} from 'styled-components'

export default function ComponenteStilizados() {

  let mainColor = "#db7093";
  let mainAlphaColor80 = "#db709380"

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadein=keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:0;
  };
  `

  const MyH3 = styled.h3`    
    padding: 2rem;
    text-align: center;
    background-color:${mainColor};
    color: ${({color})=> color || "#000"};  
    transition: ${setTransitionTime("1s")}; 
    animation:${fadein} 2S ease-out;
   

    /* ${(props =>
      props.isButton &&
      css`
          margin:auto;
          max-width:50%;
          border-radius:0.25rem;
          cursor:painter;

    `)} */

    &:hover{
      background-color: ${mainAlphaColor80};
    }
    `;

  const light ={
    color: "#222",
    bgColor:"#DDD"
  };

  const dark ={
    color:"#DDD",
    bgColor: "#222"
  };

  const Box=styled.div`
    padding:1rem;
    margin:1rem;
    color: ${({theme})=> theme.color};
    background-color: ${({theme})=> theme.bgColor};  
  `;
  const BoxRounded = styled(Box)`
    border-radius:1rem;
  `;

const GlobalStyle=createGlobalStyle`
  h2{
    padding:2rem;
    background-color:#fff;
    color:#61dafb;
    text-transform:uppercase;
  }
  `;
  

  return (
    <>
    <GlobalStyle/>
      <h2>Styled Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled components</MyH3>
      <MyH3 color='#61dafb'>Hola soy un h3 estilizado con styled components</MyH3>
      <MyH3 isButton>Soy un h3 estilizado como boton</MyH3>
      <ThemeProvider theme={light}>
      <Box>Soy una caja Box Light</Box>
      <BoxRounded>Soy una caja Box redondiada Light</BoxRounded>
      </ThemeProvider>
  
      <ThemeProvider theme={dark}>
      <Box>Soy una caja Box Dark</Box>
      <BoxRounded>Soy una caja Box redondiada Dark</BoxRounded>
      </ThemeProvider>

      
    </>
  )
}
