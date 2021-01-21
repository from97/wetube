import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (res, req) => res.send("Users"));
userRouter.get(routes.userDetail, (res, req) => res.send("User Detail"));
userRouter.get(routes.editProfile, (res, req) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (res, req) =>
  res.send("Change Password")
);

export default userRouter;
