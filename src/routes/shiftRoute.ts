import { Router } from 'express';
import { startShiftHandler, endShiftHandler, getEmployeeShiftsHandler, getAllShiftsHandler } from '../controllers/shiftController';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware';

const router = Router();

router.post('/shift/start', authenticateToken, startShiftHandler);
router.post('/shift/end', authenticateToken, endShiftHandler);

router.get('/shift/:employeeId', authenticateToken, authorizeRoles('Manager'), getEmployeeShiftsHandler);
router.get('/shifts', authenticateToken, authorizeRoles('Manager'), getAllShiftsHandler);

export { router as shiftRoutes };
