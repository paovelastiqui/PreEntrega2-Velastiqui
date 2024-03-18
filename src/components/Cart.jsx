import { Link } from 'react-router-dom'
import { useCarritoContext } from '../context/CartContext'
import { ItemList } from './ItemList'
import CartEmp from '../assets/cart-emp-icon.svg';

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <div className="flex flex-col justify-center items-center">
                            <img className="m-3" src={CartEmp} alt="Carrito Vacio" />
                            <h1 className="text-2xl font-semibold m-4">Tu carrito está vacio</h1>
                            <button className="bg-gray-900 text-white w-40 px-4 py-2 mb-4 rounded" >
                                <Link to={'/'}>
                                    Volver
                                </Link>
                            </button>    
                        </div>
                    </>
                    :
                    <div className="max-w-6xl">
                        {<ItemList products={carrito} plantilla="ItemCart" />}
                        <div className="p-4 text-right">
                            <p className="text-lg font-semibold">Resumen de la compra: $ {totalPrice()}</p>
                            <button className="bg-gray-200 text-black px-4 py-2 m-2 rounded" onClick={emptyCart}>
                                Vaciar Carrito
                            </button>
                            <button className="bg-gray-200 text-black px-4 py-2 m-2 rounded" >
                                <Link to={'/'}>
                                    Continuar Comprando
                                </Link>
                            </button>
                            <button className="bg-gray-900 text-white font-semibold px-4 py-2 ml-2 rounded" >
                                <Link to={'/checkout'}>
                                    Finalizar compra
                                </Link>
                            </button>
                        </div>
                    </div>
            }
        </>
    )
}