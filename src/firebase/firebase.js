import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDlnVOcCrjSmMP2oOijJ-DIy4x7nEa9X_0",
  authDomain: "deco-home-2e68c.firebaseapp.com",
  projectId: "deco-home-2e68c",
  storageBucket: "deco-home-2e68c.appspot.com",
  messagingSenderId: "589220887499",
  appId: "1:589220887499:web:3079aac602c9aa30be144e"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

const prods = [
    {
        "category": "MANTA",
        "name": "CRUD",
        "material": "Gasa",
        "color": "Negro",
        "sizes": "200cm de largo x 200cm de ancho",
        "price": 24.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/manta-crud.webp?alt=media&token=dbb5000c-390d-471d-b411-35c26f541c14"
    },
    {
        "category": "MANTA",
        "name": "YUTE",
        "material": "Gasa Lino",
        "color": "Beige",
        "sizes": "200cm de largo x 200cm de ancho",
        "price": 35.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/manta-yute.webp?alt=media&token=8153b9c8-6967-478d-905d-6877b6587c57"
    },
    {
        "category": "MANTA",
        "name": "RAIS",
        "material": "Algodon",
        "color": "Gris",
        "sizes": "200cm de largo x 200cm de ancho",
        "price": 39.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/manta-rais.webp?alt=media&token=8d532fd9-0068-4f35-a964-ffbf45aacd3a"
    },
    {
        "category": "ALFOMBRA",
        "name": "RIBERA",
        "material": "Yute",
        "color": "Natural",
        "sizes": "150cm de largo x 80cm de ancho",
        "price": 129.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/alfombra-ribera.webp?alt=media&token=62c2f2b8-a766-4402-b679-87bb315bdfa4"
    },
    {
        "category": "ALFOMBRA",
        "name": "ROMBOS",
        "material": "Algodon",
        "color": "Natural",
        "sizes": "100cm de largo x 60cm de ancho",
        "price": 17.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/alfombra-rombos.webp?alt=media&token=58a6a0ab-5a54-4861-88d0-1e273e50dcb1"
    },
    {
        "category": "ALFOMBRA",
        "name": "GUSHI",
        "material": "Algodon",
        "color": "Natural",
        "sizes": "100cm de largo x 60cm de ancho",
        "price": 17.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/alfombra-gushi.webp?alt=media&token=a005cec5-86a5-4e9d-a87c-dd4de6a94968"
    },
    {
        "category": "ALMOHADON",
        "name": "CRUZ",
        "material": "Vellón Siliconado",
        "color": "Beige",
        "sizes": "40cm de largo x 40cm de ancho",
        "price": 18.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/almohadon-cruz.webp?alt=media&token=9d87594c-4197-4c19-bda5-775ca8ce2a11"
    },
    {
        "category": "ALMOHADON",
        "name": "FLECOS",
        "material": "Vellón Siliconado",
        "color": "Verde",
        "sizes": "50cm de largo x 50cm de ancho",
        "price": 21.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/almohadon-flecos.webp?alt=media&token=3a438029-c950-4653-8524-deb6747db1df"
    },
    {
        "category": "ALMOHADON",
        "name": "RAY",
        "material": "Vellón Siliconado",
        "color": "Marrón",
        "sizes": "40cm de largo x 40cm de ancho",
        "price": 18.999,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/deco-home-2e68c.appspot.com/o/almohadon-ray.webp?alt=media&token=4c0e740e-5d2a-45e4-85b4-79703c3f3323"
    }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        const rta = await addDoc(collection(bdd, "productos"), {
            category: prod.category,
            name: prod.name,
            material: prod.material,
            color: prod.color,
            sizes: prod.sizes,
            price: prod.price,
            stock: prod.stock,
            img: prod.img
        })   
    })
}

//createProducts()

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

getProducts()

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}