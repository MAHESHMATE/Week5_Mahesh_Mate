import { Router } from 'express';
import { createTimesheetHandler, getTimesheetByIdHandler, updateTimesheetHandler, deleteTimesheetHandler } from '../controllers/timesheetController';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware';

const router = Router();

router.post('/timesheet', authenticateToken, authorizeRoles('Employee'), createTimesheetHandler);
router.get('/timesheet/:id', authenticateToken, authorizeRoles('Employee'), getTimesheetByIdHandler);

router.put('/timesheet/:id', authenticateToken, authorizeRoles('Manager', 'SuperAdmin'), updateTimesheetHandler);
router.delete('/timesheet/:id', authenticateToken, authorizeRoles('Manager', 'SuperAdmin'), deleteTimesheetHandler);

export { router as timesheetRoutes };
