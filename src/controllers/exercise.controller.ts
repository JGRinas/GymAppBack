import { Request, Response } from "express";
import { ExerciseModel } from "../models/Exercise";

export const createExercise = async (req: Request, res: Response) => {
  try {
    const exercise = await ExerciseModel.create(req.body);
    res.status(201).json(exercise);
  } catch (error) {
    res.status(500).json({ message: "Failed to create exercise", error });
  }
};

export const getAllExercises = async (_req: Request, res: Response) => {
  try {
    const exercises = await ExerciseModel.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Failed to get exercises", error });
  }
};

export const deleteExercise = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ExerciseModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete exercise", error });
  }
};
