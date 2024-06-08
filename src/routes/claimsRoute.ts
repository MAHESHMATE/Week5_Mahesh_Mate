import { Router } from 'express';
import { createClaimHandler, getClaimByIdHandler, updateClaimHandler, deleteClaimHandler } from '../controllers/claimsController';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware';

const router = Router();

router.post('/claims', authenticateToken, authorizeRoles('SuperAdmin'), createClaimHandler);
router.get('/claims/:id', authenticateToken, authorizeRoles('SuperAdmin'), getClaimByIdHandler);
router.put('/claims/:id', authenticateToken, authorizeRoles('SuperAdmin'), updateClaimHandler);
router.delete('/claims/:id', authenticateToken, authorizeRoles('SuperAdmin'), deleteClaimHandler);

export { router as claimsRoutes };
