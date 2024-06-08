import { Router } from 'express';
import { generateReportHandler, generateReportInExcelHandler } from '../controllers/reportingController';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware';

const router = Router();

router.post('/report/generate', authenticateToken, authorizeRoles('Manager'), generateReportHandler);
router.post('/report/generate/excel', authenticateToken, authorizeRoles('Manager'), generateReportInExcelHandler);

export { router as reportingRoutes };
