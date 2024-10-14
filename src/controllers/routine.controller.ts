import { Request, Response } from "express";
import { RoutineModel } from "../models/Routine";
import { UserModel } from "../models/User";

export const createRoutine = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, name, exercises, day, image } = req.body;

    const newRoutine = await RoutineModel.create({
      name,
      exercises,
      day,
      image,
    });

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { routine: newRoutine._id } },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(201).json({
      message: "Routine created and assigned to user",
      routine: newRoutine,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create routine", error });
  }
};

export const getUserRoutines = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;

    const user = await UserModel.findById(userId).populate(
      "routine",
      "name day _id image"
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user.routine);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user routines", error });
  }
};

export const updateRoutine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const routine = await RoutineModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(routine);
  } catch (error) {
    res.status(500).json({ message: "Failed to update routine", error });
  }
};

export const deleteRoutine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await RoutineModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete routine", error });
  }
};

export const getRoutineById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const routine = await RoutineModel.findById(id).populate("exercises");
    if (!routine) {
      res.status(404).json({ message: "Routine not found" });
      return;
    }

    res.status(200).json(routine);
  } catch (error) {
    res.status(500).json({ message: "Failed to get routine", error });
  }
};
