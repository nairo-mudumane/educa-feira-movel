import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/GlobalStyle';
import HomeVisitor from './layout/visitor/home/';
import HelpCenter from './layout/visitor/about';
import Footer from './components/footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route end exact path="/" element={<HomeVisitor />} />
          <Route end exact path="/help" element={<HelpCenter />} />
          {/* <Route end exact path="*" element={<HomeVisitor />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
