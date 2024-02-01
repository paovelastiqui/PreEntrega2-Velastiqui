import './styles/App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Decoración para tu hogar"} />
    </>
  )
}
