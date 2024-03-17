import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Contact } from './components/Contact';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { NotFound } from './components/NotFound';
import { CarritoProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify'
import Banner from '../public/img/banner.webp'

export const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element = {
            <>
              <div className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-6xl mx-auto text-center">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">DecoHome</h1>
                  <p className="text-lg sm:text-xl lg:text-2xl mb-8">Hacé de tu casa un Hogar</p>
                  <img src={Banner} alt="Banner" className="rounded-full w-80 mx-auto mb-8" />
                </div>
              </div>
              <ItemListContainer />
            </>
          } />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/product' element={<ItemListContainer />} />
          <Route path='/product/:pid' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CarritoProvider>
      
    </BrowserRouter>
  )
}