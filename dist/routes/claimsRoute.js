"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimsRoutes = void 0;
const express_1 = require("express");
const claimsController_1 = require("../controllers/claimsController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.claimsRoutes = router;
router.post('/claims', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('SuperAdmin'), claimsController_1.createClaimHandler);
router.get('/claims/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('SuperAdmin'), claimsController_1.getClaimByIdHandler);
router.put('/claims/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('SuperAdmin'), claimsController_1.updateClaimHandler);
router.delete('/claims/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('SuperAdmin'), claimsController_1.deleteClaimHandler);
//# sourceMappingURL=claimsRoute.js.map