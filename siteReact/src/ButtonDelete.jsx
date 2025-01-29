import React from "react";

function click() {
  alert("Você deletou um item");
}

function ButtonDelete() {
  return (
    <div>
      <button
        style={{padding: "10px 20px", fontSize: "16px", backgroundColor:'red', color:'white', borderRadius: "10px"}}
        onClick={() => click()}
      >
        Deletar
      </button>
    </div>
  );
}

export default ButtonDelete;