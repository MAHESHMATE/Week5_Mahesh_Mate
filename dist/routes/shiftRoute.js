"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftRoutes = void 0;
const express_1 = require("express");
const shiftController_1 = require("../controllers/shiftController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.shiftRoutes = router;
router.post('/shift/start', authMiddleware_1.authenticateToken, shiftController_1.startShiftHandler);
router.post('/shift/end', authMiddleware_1.authenticateToken, shiftController_1.endShiftHandler);
router.get('/shift/:employeeId', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), shiftController_1.getEmployeeShiftsHandler);
router.get('/shifts', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), shiftController_1.getAllShiftsHandler);
//# sourceMappingURL=shiftRoute.js.map