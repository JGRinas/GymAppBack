import { Schema, model, Document } from 'mongoose';

export interface IPlan extends Document {
  name: string;
  description: string;
  price: number;
  duration: number; // En días o meses
  createdAt: Date;
}

const planSchema = new Schema<IPlan>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

export const PlanModel = model<IPlan>('Plan', planSchema);
