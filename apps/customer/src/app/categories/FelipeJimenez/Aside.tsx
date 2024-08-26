"use client";

import React from "react";
import RenderButton from "../Pablo/components/button";
import Filter from "../JuanCalderon/components/filter";

const Aside = () => {
    const asideStyle: React.CSSProperties = {
        position: "fixed",
        left: 1000,
        top: 200,
        width: "200px",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "10px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
    };

    const handleRenderClick = () => {
        // Aquí irá la lógica de renderizado cuando la implementes
        console.log('Botón de renderizado clickeado');
    };

    return (
        <aside style={asideStyle}>
            <h3>Filter</h3>
            <RenderButton onClick={handleRenderClick} />
            <Filter />
        </aside>
    )
}

export default Aside;
