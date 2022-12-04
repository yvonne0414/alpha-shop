import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ShopCart from './Pages/ShopCart';

import { ContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*" exact element={<ShopCart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ContextProvider>
    </>
  );
}

export default App;
