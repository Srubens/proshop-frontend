import { Container } from 'react-bootstrap'
import { Header, Footer } from './components'
import { HomeScreen } from './screens'

const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <main>
          <HomeScreen/>
        </main>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
