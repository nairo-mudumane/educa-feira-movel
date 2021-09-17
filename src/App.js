import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/';
import Footer from './components/footer/';
import Home from './layout/pages/home/';

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <BrowserRouter>
        <Routes>
          <Route end exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
