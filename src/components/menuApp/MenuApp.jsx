import React from "react";
import { BsPercent } from "react-icons/bs";
import {  BiUser } from "react-icons/bi";

import { useAppState } from "../../context/store";
import { Link, Outlet } from "react-router-dom";
import './MenuApp.css';

const MenuApp = () => {
  const { porcent,setPorcent, unit, setUnit  } = useAppState();

  console.log(porcent, unit);

  return (
    <div className="group-btns">
      <h2>Opciones:</h2>
        
          <Link className="link" to="unit" type="button" onClick={() => setPorcent(true)}>
            Votos por porcentaje por candidato <BsPercent />
          </Link><br /> 

  
          <><Link className="link" to="porcent" type="button" onClick={() => setUnit(true)}>
            Votos por en unidades por candidato <BiUser />
          </Link><br /></>
        <Outlet />
    </div>
  );
};

export default MenuApp;
