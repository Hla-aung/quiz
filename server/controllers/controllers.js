import {Questions} from "../models/modelSchema.js";
import question from "../data/data.js"

export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
        res.json(q)
    } catch (error) {
        res.send(error)
    }
}

export async function uploadQuestions(req, res){
    try{
        const q = await Questions.insertMany({questions: req.body})
        res.json(q)
    } catch (error) {
        res.send(error)
    }
}

export async function deleteQuestions(req, res){
    try{
        await Questions.deleteMany();
        res.send("Deleted")
    } catch (error) {
        res.send(error)
    }
}