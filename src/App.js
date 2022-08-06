import { Container } from 'react-bootstrap'
import { Header, Footer } from './components'
import { HomeScreen, ProductScreen } from './screens'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Container>
            <main>
              <Routes>
                <Route path="/" exact element={<HomeScreen/>} ></Route>
                <Route path="/product/:id" element={<ProductScreen/>} ></Route>
              </Routes>
            </main>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
