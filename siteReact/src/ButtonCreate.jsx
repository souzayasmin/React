import React from "react";

function click() {
  alert("Você criou um item");
}

function ButtonCreate() {
    return (
      <div>
        <button
          style={{padding: "10px 28px", fontSize: "16px", backgroundColor:'green', color:'white', borderRadius: "10px"}}
          onClick={() => click()}
        >
          Criar
        </button>
      </div>
    );
  }
  
  export default ButtonCreate;