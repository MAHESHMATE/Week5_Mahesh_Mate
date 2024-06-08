import express from "express";
import * as dotenv from "dotenv";
import { employeeRoutes } from "./routes/employeeRoute";
import { shiftRoutes } from "./routes/shiftRoute";
import { timesheetRoutes } from "./routes/timesheetRoute";
import { claimsRoutes } from "./routes/claimsRoute";
import { reportingRoutes } from "./routes/reportingRoute";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/api', employeeRoutes);
app.use('/api', shiftRoutes);
app.use('/api', timesheetRoutes);
app.use('/api', claimsRoutes);
app.use('/api', reportingRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;


