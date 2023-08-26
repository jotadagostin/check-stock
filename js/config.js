import Sequelize from "sequelize";
import createDataBase from "./createDB.js";

const DB = "NomeDoBanco"; // somente letras e numeros 
const usuario = "root";
const senha = "123";

const sequelize = new Sequelize(DB, usuario, senha, {
  host: "localhost",
  dialect: "mysql",
});


let dbStatusCreate = false;
console.log(dbStatusCreate);

if (dbStatusCreate) {
  await createDataBase(DB,usuario,senha);
  dbStatusCreate = false; 
  console.log(dbStatusCreate);
 
}


export default sequelize;


