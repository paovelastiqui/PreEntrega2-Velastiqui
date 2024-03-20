import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Categories = () => {
    const [nesting, setNesting] = useState(true);

    return (
        <>
            <li className="text-white list-none">
                <Link to={'/'}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        Inicio
                    </button>
                </Link>
            </li>
            <li className="text-white list-none">
                <Link to={'/product'}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => setNesting(!nesting)}>
                        Productos
                    </button>
                </Link>
                    <div>
                        {nesting ? (
                            <div className="hidden">
                            </div>
                        ) : (
                            <div className="absolute bg-stone-50 p-1">
                                <li className="text-white">
                                    <Link to={'/category/MANTA'}>
                                        <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                            Mantas
                                        </button>
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link to={'/category/ALMOHADON'}>
                                        <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                            Almohadones
                                        </button>
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link to={'/category/ALFOMBRA'}>
                                        <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                            Alfombras
                                        </button>
                                    </Link>
                                </li>
                            </div>
                        )}
                    </div>
            </li>
            <li className="text-white list-none">
                <Link to={'/faqs'}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        FAQs
                    </button>
                </Link>
            </li>
            <li className="text-white list-none">
                <Link to={'/contact'}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        Contacto
                    </button>
                </Link>
            </li>
        </>
    )
}