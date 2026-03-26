import express from "express";
import { checkdb, sequelize } from "./config/db.js";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { errorhandling } from "./utils/response.js";
// Routes
import authRoutes from "./routes/auth.routes.js";
import storeRoutes from "./routes/store.routes.js";
import targetManageRoutes from "./routes/targetmange.route.js";
import branchRoutes from "./routes/branches.routes.js";
import securityRoutes from "./routes/security.routes.js";
import accountresceivableRoutes from "./routes/Indebtedness.routes.js";
import salesRoutes from "./routes/sales.routes.js";
import employeeRoutes from "./routes/employee.route.js";
import reportsRoutes from "./routes/reports.routes.js";
import landsRoutes from "./routes/lands.routes.js";
import purchaseordersRoutes from "./routes/purchaseorders.routes.js";
import cashdaysRoutes from './routes/cashdays.routes.js'
// Config
dotenv.config({ path: "./src/config/.env" });

const data = async () => {
  const port = process.env.PORT || 3000;
  const app = express();

  // حل مشكلة __dirname مع ES Modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  // catch-all route
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/public/index.html"));
  });

  // Database
  await checkdb();           // لو فشل هنا، السيرفر هيتوقف
  await sequelize.sync({ force: false});
 
 await sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch(err => console.error("DB connection error:", err));

  // API Routes
  app.use("/api/auth", authRoutes);
  app.use("/api/store", storeRoutes);
  app.use("/api/target", targetManageRoutes);
  app.use("/api/branch", branchRoutes);
  app.use("/api/account", accountresceivableRoutes);
  app.use("/api/sales", salesRoutes);
  app.use("/api/employee", employeeRoutes);
  app.use("/api/reports", reportsRoutes);
  app.use("/api/lands", landsRoutes);
  app.use("/api/purchase", purchaseordersRoutes);
  app.use("/api/security", securityRoutes);
  app.use('/api/cashdays',cashdaysRoutes)
  
  app.use(errorhandling);
  // Start Server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
export default data;