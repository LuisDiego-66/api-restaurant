import { DataTypes } from "sequelize";
import db from "../config/db.js"; //instancia de la base de datos

const Categoria = db.define(
  "categorias",
  {
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
export default Categoria;
