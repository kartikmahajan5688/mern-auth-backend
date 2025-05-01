import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" assert { type: "json" };
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000/api-docs"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you need to send cookies/auth headers
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//middleware
app.use(express.json()); //to parse the json format data from frontend
app.use("/api/users", userRoutes);


app.get("/", (req, res) => res.json("API is running"));
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

app.use(notFound);
app.use(errorHandler);