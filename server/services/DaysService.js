import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";

class DaysService {

  async find(query = {}) {
    return await dbContext.Day.find(query).populate(
      "creator",
      "name picture"
    )
  }
  async create(body) {
    return await dbContext.Day.create(body)
  }


  // async remove(id, email) {
  // let day = await this.findbyId
  // }

}

export const daysService = new DaysService();