import { Router } from "express";
import * as controllers from "../controllers/controllers.js"

const router = Router();

router.route('/questions')
.get(controllers.getQuestions)
.post(controllers.uploadQuestions)
.delete(controllers.deleteQuestions)

export default router;