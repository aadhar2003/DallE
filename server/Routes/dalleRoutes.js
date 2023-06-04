import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const router = express.Router();
const configuration = new Configuration({
  apiKey: process.env.OpenAI_Api,
});

const openai = new OpenAIApi(configuration);
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const img=aiResponse.data.data[0].b64_json;
    res.status(200).json({photo:img});
  } catch (err) {
    console.log(err);
  }
});

export default router;
