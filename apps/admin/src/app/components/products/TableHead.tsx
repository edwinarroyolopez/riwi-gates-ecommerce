import React from "react";
import {TableHead} from "../../interfaces/Iecommerce";

const TableHeader: React.FC<TableHead> = ({ sortConfig, requestSort }) => {
    return (
      <thead>
        <tr>
          <th onClick={() => requestSort('name')}>
            Name {sortConfig?.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : null}
          </th>
          <th onClick={() => requestSort('description')}>
            Description {sortConfig?.key === 'description' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : null}
          </th>
          <th onClick={() => requestSort('price')}>
            Price {sortConfig?.key === 'price' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : null}
          </th>
          <th onClick={() => requestSort('stock')}>
            Stock {sortConfig?.key === 'stock' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : null}
          </th>
          <th onClick={() => requestSort('category')}>
            Category {sortConfig?.key === 'category' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : null}
          </th>
          <th onClick={() => requestSort('subcategory')}>
            Subcategory {sortConfig?.key === 'subcategory' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : null}
          </th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;