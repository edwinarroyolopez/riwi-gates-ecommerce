"use client";

import TableRow from "./TableRow";
import { TableData } from "../../interfaces/Iecommerce";
import TableHeader from "./TableHead"

const Table: React.FC<TableData> = ({ data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla de productos</h3>
            <table>
              <TableHeader/>
                <tbody>
                    {data.length > 0 ? (
                        data.map((product) => (
                          <TableRow
                          key={product.id}
                          product={product}
                          setDataToEdit={setDataToEdit}
                          deleteData={deleteData}
                        />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default Table;