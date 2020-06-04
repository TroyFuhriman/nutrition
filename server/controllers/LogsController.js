import express from "express";
import BaseController from "../utils/BaseController";
import { logsService } from "../services/LogsService";
import auth0Provider from "@bcwdev/auth0provider";

export class LogsController extends BaseController {

  constructor() {
    super("api/logs");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
    // .delete("/:id", this.remove)
  }
  async getAll(req, res, next) {
    try {
      let data = await logsService.find()
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let data = await logsService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  //   async remove(req, res, next) {
  // try {
  //   await logsService.remove(req.params.id, req.userInfo.email)
  //   res.send("deleted")
  // } catch (error) {
  //   next(error)
  // }
  //   }
}