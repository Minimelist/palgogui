// src/components/DataDisplayRow.js
import React from 'react';

const DataDisplayRow = ({ rowData }) => {
    // Destructure the specific fields you need from each row
    const { id, palgorating, technicalscore, fundamentalscore, macroscore, microscore, assetname } = rowData; // Adjust fields to match your PostgreSQL table

    return (
        <tr className="data-row">
            <td>{id}</td>
            <td>{palgorating}</td>
            <td>{technicalscore}</td>
            <td>{fundamentalscore}</td>
            {/* <td>{macroscore}</td>
            <td>{microscore}</td>
            <td>{assetname}</td> */}
            {/* Add more cells as needed */}
        </tr>
    );
};

export default DataDisplayRow;