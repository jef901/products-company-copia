import express from 'express';
import morgan from 'morgan';
import pkg from "../package.json";

import productRoutes from "./routes/product.routes";

const app = express()
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("pkg", pkg);
 app.get("/", (req, res) => {
        res.json({
          message: "Welcome to my Products API",
          name: app.get("pkg").name,
          version: app.get("pkg").version,
          description: app.get("pkg").description,
          author: app.get("pkg").author,
        });
      });

   app.use('/products',productRoutes);



export default app;