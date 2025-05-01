import dotenv from "dotenv";
dotenv.config();
import swaggerAutogen from "swagger-autogen";


console.log("SWAGGER_HOST", process.env.SWAGGER_HOST);

const doc = {
  info: {
    title: "MERN Auth API Documentation",
    description: "Description",
    version: "1.0.0",
  },
  host: process.env.SWAGGER_HOST || "sober-meets-backend.onrender.com",
  schemes: ["https"],
  basePath: "/",
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"];

swaggerAutogen(outputFile, routes, doc);

// import swaggerJSDoc from "swagger-jsdoc";

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "MERN Authentication API",
//       version: "1.0.0",
//       description: "API documentation for my MERN AUTH Node.js application",
//     },
//   },
//   apis: ["./routes/*.js"], // Path to the API routes
// };
// const swaggerSpec = swaggerJSDoc(options);

// export default swaggerSpec;
