import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md mt-2">
                <img src={`./img/${product.img}`} alt={product.name} className="rounded-md shadow-md" />
                <h2 className="text-lg font-semibold mt-2 mb-2">{product.category} {product.name}</h2>
                <p className="text-gray-700 mb-2">Color: {product.color}</p>
                <p className="text-gray-700 mb-2">Material: {product.material}</p>
                <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price}</span>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Comprar</button>
                </div>
            </div>    
        </Link>
    )
}