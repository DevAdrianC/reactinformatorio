import React from "react";

function Noticias() {
  const info = {
    titulo: "Un titulo",
    descripcion: "Una descripcion",
  };
  const { titulo, descripcion } = info;

  return <div>
    <h1>{titulo}</h1>
  </div>;
}

export default Noticias;
