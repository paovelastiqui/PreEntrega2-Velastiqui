import { useCarritoContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <div>
            <Link to={'/cart'}>
                <button className="text-gray-800 px-4 py-2 rounded flex items-center">
                    <svg width="25" height="25" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 31C13.8807 31 15 29.8807 15 28.5C15 27.1193 13.8807 26 12.5 26C11.1193 26 10 27.1193 10 28.5C10 29.8807 11.1193 31 12.5 31Z" fill="black"/><path d="M25.5 31C26.8807 31 28 29.8807 28 28.5C28 27.1193 26.8807 26 25.5 26C24.1193 26 23 27.1193 23 28.5C23 29.8807 24.1193 31 25.5 31Z" fill="black"/><path d="M32.4498 4.55759C32.3525 4.4312 32.2276 4.32878 32.0846 4.25817C31.9416 4.18757 31.7843 4.15066 31.6248 4.15027H7.49903L7.02905 2.65677C6.97742 2.49642 6.88777 2.35092 6.76774 2.23271C6.64771 2.1145 6.50087 2.02708 6.33974 1.97791L2.05768 0.661963C1.92602 0.621503 1.78767 0.607372 1.65054 0.620379C1.51341 0.633385 1.38019 0.673274 1.25848 0.737767C1.01267 0.868016 0.828669 1.09058 0.746956 1.35649C0.665243 1.6224 0.69251 1.90989 0.82276 2.1557C0.953009 2.40151 1.17557 2.58551 1.44148 2.66722L5.1909 3.81606L9.97427 18.9286L8.27189 20.3281L8.13611 20.4639C7.71511 20.9514 7.47659 21.57 7.46135 22.2139C7.44611 22.8579 7.6551 23.4871 8.05256 23.9939C8.33722 24.3401 8.69895 24.6149 9.10881 24.7962C9.51867 24.9776 9.96528 25.0605 10.4129 25.0384H27.844C28.121 25.0384 28.3867 24.9283 28.5825 24.7325C28.7784 24.5366 28.8884 24.2709 28.8884 23.9939C28.8884 23.717 28.7784 23.4513 28.5825 23.2554C28.3867 23.0596 28.121 22.9495 27.844 22.9495H10.2458C10.1255 22.9454 10.0084 22.9104 9.9056 22.8478C9.80284 22.7852 9.71796 22.6971 9.65916 22.5921C9.60037 22.4871 9.56964 22.3687 9.56995 22.2484C9.57026 22.1281 9.6016 22.0098 9.66094 21.9051L12.178 19.8163H28.2931C28.5317 19.8233 28.7655 19.7483 28.9555 19.6039C29.1455 19.4595 29.2803 19.2543 29.3375 19.0226L32.6796 5.44533C32.7114 5.28963 32.7072 5.12874 32.6674 4.9749C32.6275 4.82106 32.5532 4.67833 32.4498 4.55759Z" fill="black"/></svg>
                    <span className="mx-4">{getItemQuantity()}</span>
                </button>    
            </Link>
            
        </div>
    )
}
