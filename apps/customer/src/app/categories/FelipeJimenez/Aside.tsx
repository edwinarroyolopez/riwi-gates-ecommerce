"use client";

import React from "react";


const Aside = () => {
    const buttonStyle: React.CSSProperties = {
        position: "fixed",
            left: 0,
            top: 50,
            width: "200px",
            height: "100vh",
            backgroundColor: "#f4f4f4",
            padding: "10px",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
      };

    return (
        <aside style={buttonStyle}>
            <h3>Filter</h3>
            
        </aside>
    )
}

export default Aside