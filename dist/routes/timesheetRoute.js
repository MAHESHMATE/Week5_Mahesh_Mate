"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesheetRoutes = void 0;
const express_1 = require("express");
const timesheetController_1 = require("../controllers/timesheetController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.timesheetRoutes = router;
router.post('/timesheet', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Employee'), timesheetController_1.createTimesheetHandler);
router.get('/timesheet/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Employee'), timesheetController_1.getTimesheetByIdHandler);
router.put('/timesheet/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager', 'SuperAdmin'), timesheetController_1.updateTimesheetHandler);
router.delete('/timesheet/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager', 'SuperAdmin'), timesheetController_1.deleteTimesheetHandler);
//# sourceMappingURL=timesheetRoute.js.map