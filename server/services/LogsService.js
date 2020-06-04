import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";

class LogsService {
  async find(query = {}) {
    let data = await dbContext.Log.find(query).populate(
      "creator",
      "name picture"
    )
  }
  async create(body) {
    return await dbContext.Log.create(body)
  }



}

export const logsService = new LogsService();
