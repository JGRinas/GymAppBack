import { Schema, model, Document, Types } from 'mongoose';

export interface IRoutine extends Document {
  name: string;
  exercises: Types.ObjectId[];
  day: string;
  image: string;
  createdAt: Date;
}

const routineSchema = new Schema<IRoutine>({
  name: { type: String, required: true },
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  day: { type: String, required: true },
  image: { type: String, required: true }, // Ruta de la imagen asociada
  createdAt: { type: Date, default: Date.now },
});

export const RoutineModel = model<IRoutine>('Routine', routineSchema);
