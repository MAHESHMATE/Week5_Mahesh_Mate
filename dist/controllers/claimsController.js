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
exports.deleteClaimHandler = exports.updateClaimHandler = exports.getClaimByIdHandler = exports.createClaimHandler = void 0;
const claimsService_1 = require("../services/claimsService");
function createClaimHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const claimData = req.body;
            const claim = yield (0, claimsService_1.createClaim)(claimData);
            res.status(201).json(claim);
        }
        catch (error) {
            console.error('error while creating', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createClaimHandler = createClaimHandler;
function getClaimByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const claim = yield (0, claimsService_1.getClaimById)(id);
            res.status(200).json(claim);
        }
        catch (error) {
            console.error('error while getting', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getClaimByIdHandler = getClaimByIdHandler;
function updateClaimHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const claim = yield (0, claimsService_1.updateClaim)(id, updateData);
            res.status(200).json(claim);
        }
        catch (error) {
            console.error('error while updating', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateClaimHandler = updateClaimHandler;
function deleteClaimHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, claimsService_1.deleteClaim)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error while deleting', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteClaimHandler = deleteClaimHandler;
//# sourceMappingURL=claimsController.js.map