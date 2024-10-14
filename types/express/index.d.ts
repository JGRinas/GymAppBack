import { Request } from "express";

declare module "express" {
  export interface Request {
    file?: Express.Multer.File;
  }
}
