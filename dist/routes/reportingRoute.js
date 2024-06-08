"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingRoutes = void 0;
const express_1 = require("express");
const reportingController_1 = require("../controllers/reportingController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.reportingRoutes = router;
router.post('/report/generate', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), reportingController_1.generateReportHandler);
router.post('/report/generate/excel', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), reportingController_1.generateReportInExcelHandler);
//# sourceMappingURL=reportingRoute.js.map