import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion, sendChatsToUSer, deleteChats } from "../controllers/chat-controller.js";

const chatRouter = Router();

//Protected API
chatRouter.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion)
chatRouter.get("/all-chats", verifyToken, sendChatsToUSer)
chatRouter.delete("/delete", verifyToken, deleteChats)

export default chatRouter;