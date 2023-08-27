import * as dotenv from 'dotenv'
import { Client } from "discord.js";

dotenv.config();

const token = process.env.botToken

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);
