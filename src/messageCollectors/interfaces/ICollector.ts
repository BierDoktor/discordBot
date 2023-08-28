import { Client, MessageCollector } from "discord.js";

export interface ICollector {
    channelId: string;
    client: Client;
    createInstance(channelId: string, client: Client): Promise<MessageCollector>;
}