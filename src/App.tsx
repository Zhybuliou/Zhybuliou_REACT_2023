import { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
export default class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
  }
}
