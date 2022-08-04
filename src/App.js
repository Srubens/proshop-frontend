import { Container } from 'react-bootstrap'
import { Header, Footer } from './components'

const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <main>conteudo da main</main>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
