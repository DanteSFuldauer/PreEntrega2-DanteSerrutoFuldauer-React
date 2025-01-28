const products = [
    {
      id: '3',
      name: 'Air Pro 2',
      price: 250000,
      category: 'auriculares',
      img: 'https://i5.walmartimages.com/seo/Apple-AirPods-Pro-2nd-Generation-Lightning_7e8598be-0a04-4938-98be-765f1fe80447.2f2187eed7001354fb4911fe454dc0d2.jpeg',
      stock: 12,
      descrip: 'Auriculares inalámbricos Apple AirPods Pro Segunda Generación',
    },
    {
      id: '4',
      name: 'AirPods 4',
      price: 300000,
      category: 'auriculares',
      img: 'https://www.ventasrosario.com.ar/wp-content/uploads/2024/10/ed0cfc76-5b94-4e84-af82-a3cc7cff60e4.webp',
      stock: 20,
      descrip: 'Auriculares inalámbricos Apple AirPods 4',
    },
    {
      id: '5',
      name: 'AirPods Max',
      price: 1800000,
      category: 'auriculares',
      img: 'https://acdn.mitiendanube.com/stores/001/414/148/products/2-apple-airpods-max-plateado1-73a8f541afa4e072c716575745528996-1024-1024.jpg',
      stock: 14,
      descrip: 'Auriculares inalámbricos Apple AirPods Max, color plateado',
    },
    {
      id: '6',
      name: 'Iphone 16',
      price: 3000000,
      category: 'telefonos',
      img: 'https://http2.mlstatic.com/D_NQ_NP_975004-MLU78878972160_092024-O.webp',
      stock: 24,
      descrip: 'Teléfono Apple Iphone 16 512GB, color Azul',
    },
    {
      id: '7',
      name: 'Iphone 15 Plus',
      price: 1300000,
      category: 'telefonos',
      img: 'https://zetaelectronica.com.ar/wp-content/uploads/2023/09/iphone-15-plus-dual-sim-sim-512gb-5g-roz-6gb-ram_10081165_3_1695364111.jpg',
      stock: 7,
      descrip: 'Teléfono Apple Iphone 15 Plus 218GB, color Rosado',
    },
    {
      id: '8',
      name: 'Iphone 14 Pro Max',
      price: 2354000,
      category: 'telefonos',
      img: 'https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-256GB-Deep-Purple-MQ8W3LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg',
      stock: 5,
      descrip: 'Teléfono Apple Iphone 15 Plus 512GB, color Púrpura',
    },
    {
        id: '9',
        name: 'MacBook Air 13 Pulgadas',
        price: 2500000,
        category: 'notebooks',
        img: 'https://ar.oneclickstore.com/wp-content/uploads/2023/06/MacBook_Air_13_in_Space_Gray_PDP_Image_Position-1_MXLA-1.jpg',
        stock: 10,
        descrip: 'Notebook Apple MacBook Air de 13 pulgadas, color plateado',
      },
      {
        id: '10',
        name: 'MacBook Pro 14 Pulgadas',
        price: 2700000,
        category: 'notebooks',
        img: 'https://ar.oneclickstore.com/wp-content/uploads/2021/12/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__MXLA.jpg',
        stock: 12,
        descrip: 'Notebook Apple MacBook Pro de 14 pulgadas, color plateado',
      },
      {
        id: '11',
        name: 'MacBook Pro 16 Pulgadas',
        price: 4350000,
        category: 'notebooks',
        img: 'https://ar.oneclickstore.com/wp-content/uploads/2024/12/macbook-pro-16-m2-pro-12-cpu-19-gpu-16-ram-512-gb-plata-scaled.jpg',
        stock: 8,
        descrip: 'Notebook Apple MacBook Pro de 16 pulgadas, color plateado',
      }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };