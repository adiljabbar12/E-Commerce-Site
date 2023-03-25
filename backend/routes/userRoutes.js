import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;

//
//
//
//
//
//
//
// //@des  Fetch all Orders
// //@route GET/ api/Orders
// //@access public
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const users = await User.find({});

//     res.json(users);
//   })
// );
// //@des  Fetch all Orders
// //@route GET/ api/Orders
// //@access public

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404);
//       throw new Error("user not found");
//     }
//   })
// );

// export default router;
