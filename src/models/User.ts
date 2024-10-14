import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  last_name: string;
  email: string;
  password: string;
  plan: Types.ObjectId | null;
  routine: Types.ObjectId[];
  role: "admin" | "coach" | "member";
  isVerified: boolean;
  status: "active" | "inactive";
  photo?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: Schema.Types.ObjectId, ref: "Plan", default: null },
  routine: [{ type: Schema.Types.ObjectId, ref: "Routine" }],
  role: { type: String, enum: ["admin", "coach", "member"], default: "member" },
  isVerified: { type: Boolean, default: false },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  photo: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = model<IUser>("User", userSchema);
