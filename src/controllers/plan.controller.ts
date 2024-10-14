import { Request, Response } from "express";
import { PlanRepository } from "../repositories/plan.repository";
import { UserRepository } from "../repositories/user.repository";
import { UserModel } from "../models/User";

const planRepository = new PlanRepository();
const userRepository = new UserRepository();

export const createPlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, price, duration, userId } = req.body;

  try {
    const newPlan = await planRepository.create({
      name,
      description,
      price,
      duration,
    });

    const planId = (newPlan._id as any).toString();

    const updatedUser = await userRepository.updatePlan(userId, planId);

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(201).json({ plan: newPlan });
  } catch (error) {
    res.status(500).json({ message: "Failed to create plan", error });
  }
};

export const getPlans = async (req: Request, res: Response): Promise<void> => {
  try {
    const plans = await planRepository.getAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Failed to get plans", error });
  }
};

export const getPlanById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const plan = await planRepository.getById(req.params.id);
    if (!plan) {
      res.status(404).json({ message: "Plan not found" });
      return;
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Failed to get plan", error });
  }
};

export const updatePlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const plan = await planRepository.update(req.params.id, req.body);
    if (!plan) {
      res.status(404).json({ message: "Plan not found" });
      return;
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Failed to update plan", error });
  }
};

export const deletePlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const plan = await planRepository.delete(req.params.id);
    if (!plan) {
      res.status(404).json({ message: "Plan not found" });
      return;
    }
    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete plan", error });
  }
};

export const getUserPlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;

    const user = await UserModel.findById(userId);
    if (!user || !user.plan) {
      res.status(404).json({ message: "No plan found for the user" });
      return;
    }

    const plan = await planRepository.getById(user.plan.toString());
    if (!plan) {
      res.status(404).json({ message: "Plan not found" });
      return;
    }

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user plan", error });
  }
};
