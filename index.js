import express from "express";
import db from "./config/db.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import restaurantRoute from "./routes/restaurantRoutes.js";
import authRoute from "./routes/authRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cookieParser());

// Base de Datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexion a la base de datos exitosa");
} catch (error) {
  console.log(error);
}

//Carpeta Pública
app.use(express.static("public"));

//Routing
app.use("/api/", restaurantRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

//Servidor
app.listen(PORT);
