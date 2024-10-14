import { Schema, model, Document } from 'mongoose';

interface Instruction {
  title: string;
  description: string;
}

export interface IExercise extends Document {
  name: string;
  image: string;
  sets: number;
  reps: number;
  restTime: number;
  instructions: Instruction[];
  createdAt: Date;
}

const instructionSchema = new Schema<Instruction>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const exerciseSchema = new Schema<IExercise>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  restTime: { type: Number, required: true }, // En segundos
  instructions: { type: [instructionSchema], required: true },
  createdAt: { type: Date, default: Date.now },
});

export const ExerciseModel = model<IExercise>('Exercise', exerciseSchema);
