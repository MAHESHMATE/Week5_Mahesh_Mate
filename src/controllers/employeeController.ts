import { Request, Response } from 'express';
import { registerEmployee, loginEmployee, getAllEmployees, updateEmployee, deleteEmployee } from '../services/employeeService';

export async function registerEmployeeHandler(req:Request, res:Response) {
  try {
    const employeeData = req.body;
    const employee = await registerEmployee(employeeData);
    res.status(201).json({message:'employee registered successfully', employee});
  } catch(error) {
    console.error('error registering employee',error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function loginEmployeeHandler(req:Request, res:Response) {
  try {
    const { email, password } = req.body;
    const { employee, token } = await loginEmployee(email, password);
    res.status(200).json({message: 'login successful', employee, token});
  } catch (error) {
    console.error('error logging', error);
    res.status(401).json({error: 'invalid email or password'});
  }
}


export async function getAllEmployeesHandler(req:Request, res:Response) {
  try {
    const employees = await getAllEmployees();
    res.status(200).json(employees);
  } catch(error) {
    console.error('error fetching all employees', error);
    res.status(500).json({error: 'internal server error'});
  }
}

export async function updateEmployeeHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const employee = await updateEmployee(id, updateData);
    res.status(200).json({message:'employee updated successfully', employee});
  } catch(error) {
    console.error('error updating employee', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function deleteEmployeeHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const result = await deleteEmployee(id);
    res.status(200).json(result);
  } catch(error) {
    console.error('error deleting employee', error);
    res.status(500).json({error:'internal server error'});
  }
}
