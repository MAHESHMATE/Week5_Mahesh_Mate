"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShiftsHandler = exports.getEmployeeShiftsHandler = exports.endShiftHandler = exports.startShiftHandler = void 0;
const shiftService_1 = require("../services/shiftService");
function startShiftHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { employeeId } = req.body;
            const shift = yield (0, shiftService_1.startShift)(employeeId);
            res.status(201).json(shift);
        }
        catch (error) {
            console.error('error starting shift', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.startShiftHandler = startShiftHandler;
function endShiftHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { employeeId } = req.body;
            const shift = yield (0, shiftService_1.endShift)(employeeId);
            res.status(200).json(shift);
        }
        catch (error) {
            console.error('error ending shift', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.endShiftHandler = endShiftHandler;
function getEmployeeShiftsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { employeeId } = req.params;
            const shifts = yield (0, shiftService_1.getEmployeeShifts)(employeeId);
            res.status(200).json(shifts);
        }
        catch (error) {
            console.error('error getting employees shifts', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getEmployeeShiftsHandler = getEmployeeShiftsHandler;
function getAllShiftsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shifts = yield (0, shiftService_1.getAllShifts)();
            res.status(200).json(shifts);
        }
        catch (error) {
            console.error('error getting all shifts', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllShiftsHandler = getAllShiftsHandler;
//# sourceMappingURL=shiftController.js.map