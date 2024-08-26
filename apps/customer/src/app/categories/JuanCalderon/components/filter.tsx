'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Importa o define aquí tu JSON de productos
import productsData from '../../../../../db.json';
//Obviamente es mas optimo hacerlo con un fetch del json, sin embargo de tanto intentarlo no me funciono, esta es la logica base que pude entender y hacer por encima para el filtrado


type CategoryValue = 'men' | 'women' | 'kids';

// Mapa de etiquetas para las categorías
const categoryLabels: Record<CategoryValue, string> = {
  men: 'Hombre',
  women: 'Mujer',
  kids: 'Niños'
};

export default function CategoryComponent() {
  // Estado para almacenar la categoría seleccionada
  const [category, setCategory] = useState<CategoryValue | null>(null);

  // Estado para almacenar los productos filtrados según la categoría
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Efecto para obtener la categoría almacenada en localStorage
  useEffect(() => {
    const storedCategory = localStorage.getItem('category') as CategoryValue;
    if (storedCategory && categoryLabels[storedCategory]) {
      setCategory(storedCategory);
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  // Efecto para filtrar productos cuando cambia la categoría
  useEffect(() => {
    if (category) {
      const products = productsData.products.filter(product =>
        product.categories.some((cat: any) => cat.name === category)
      );
      setFilteredProducts(products);
    }
  }, [category]); // Se ejecuta cada vez que cambia la categoría


  return (
    <div>
      <h1>Categoría seleccionada: {category ? categoryLabels[category] : 'No seleccionada'}</h1>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
