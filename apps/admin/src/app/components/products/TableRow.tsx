import React from "react";
import { TableRowProducts } from "../../interfaces/Iecommerce";

const TableRow: React.FC<TableRowProducts> = ({ product, setDataToEdit, deleteData }) => {
  const { id, name, description, price, stock, categories, images } = product;

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>${price}</td>
      <td>{stock}</td>
      <td>{categories[0]?.name}</td>
      <td>{categories[0]?.subcategories[0]?.name || "No Subcategory"}</td>
      <td>
        {images.length > 0 && (
          <img 
            src={images[0].url} 
            alt={`Product image`} 
            style={{ width: "50px", height: "50px" }} 
          />
        )}
      </td>
      <td>
        <button onClick={() => setDataToEdit(product)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TableRow;

