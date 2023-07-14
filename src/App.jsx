import styled from "styled-components"
import Profile from "./components/Profile"
import About from "./components/About"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpeg");
  color: white;
  &::-webkit-scrollbar{
    display: none;
  }
`


function App() {


  return (
    <Container>
      <Profile />
      <About />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
