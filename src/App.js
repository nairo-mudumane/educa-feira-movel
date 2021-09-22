import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/';
import Footer from './components/footer/';
import PostInfo from './pages/admin/info/';
import PostQuiz from './pages/admin/quiz/';
import Slider from './pages/slider';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="admin/curiosity" element={<PostInfo />} />
          <Route exact path="admin/quiz" element={<PostQuiz />} />
          <Route end exact path="/" element={<Slider />} />
          <Route end exact path="*" element={<Slider />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
