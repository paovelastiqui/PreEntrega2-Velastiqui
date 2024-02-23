import Logo from '../assets/logo.png';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 mt-8">
            <div className="container flex">
              <img src={Logo} alt="Logo" className="m-3 h-20 w-auto" />
            </div>
            <div className="container mx-auto text-white text-center">
                <p>&copy; 2024 DecoHome. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}