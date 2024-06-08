import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dkjvncnsiudhdi';

export function authenticateToken(req:Request, res:Response, next:NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error:'not access'});

  try {
    const decoded = jwt.verify(token,JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({error:'invalid token'});
  }
}

export function authorizeRoles(...roles: string[]) {
  return (req:Request, res:Response, next:NextFunction) => {
    const user = (req as any).user;
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({error:'error'});
    }
    next();
  };
}
