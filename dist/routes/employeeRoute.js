"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.employeeRoutes = router;
router.post('/register', employeeController_1.registerEmployeeHandler);
router.post('/login', employeeController_1.loginEmployeeHandler);
//routes for manager
router.get('/employees', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), employeeController_1.getAllEmployeesHandler);
router.put('/employees/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), employeeController_1.updateEmployeeHandler);
router.delete('/employees/:id', authMiddleware_1.authenticateToken, (0, authMiddleware_1.authorizeRoles)('Manager'), employeeController_1.deleteEmployeeHandler);
//# sourceMappingURL=employeeRoute.js.map