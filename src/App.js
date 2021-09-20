import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/';
import Footer from './components/footer/';
import Welcome from './pages/home/';
import Quiz from './pages/quiz';
import Info from './pages/info';
import RouteSwitcher from './components/routeSwitcher';
import PostInfo from './pages/postInfo';

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <BrowserRouter>
        <RouteSwitcher />
        <Routes>
          <Route exact path="admin/curiosity" element={<PostInfo />} />
          <Route end exact path="/" element={<Welcome />} />
          <Route end exact path="info" element={<Info />} />
          <Route exact path="quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
