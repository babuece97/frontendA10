import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App=()=> {
  return (
    <>
    <Header/>
    
    <main className='py-5'>
      <Container>
        <h1> Well come to letsbuy shop</h1>
        <HomeScreen/>
      </Container>
    
    </main>
    <Footer/>
    </>
  );
}

export default App;
