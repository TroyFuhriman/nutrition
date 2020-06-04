import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import LogSchema from "../models/Log";
import DaySchema from "../models/Day";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Log = mongoose.model("Log", LogSchema);
  Day = mongoose.model("Day", DaySchema);
}

export const dbContext = new DbContext();
