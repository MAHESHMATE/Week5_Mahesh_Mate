import { Router } from 'express';
import { registerEmployeeHandler, loginEmployeeHandler, getAllEmployeesHandler, updateEmployeeHandler, deleteEmployeeHandler } from '../controllers/employeeController';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerEmployeeHandler);
router.post('/login', loginEmployeeHandler);

//routes for manager
router.get('/employees', authenticateToken, authorizeRoles('Manager'), getAllEmployeesHandler);
router.put('/employees/:id', authenticateToken, authorizeRoles('Manager'), updateEmployeeHandler);
router.delete('/employees/:id', authenticateToken, authorizeRoles('Manager'), deleteEmployeeHandler);

export { router as employeeRoutes };


