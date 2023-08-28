import { ICollector } from "./interfaces/ICollector";
import { Client, MessageCollector, TextChannel } from "discord.js";

export default class CustomMessageCollector implements ICollector {
    public channelId: string;
    public client: Client;

    constructor(channelId: string, client: Client) {
        this.channelId = channelId;
        this.client = client;
    }

    async createInstance(): Promise<MessageCollector> {
        const channel = await this.client.channels.fetch(this.channelId) as TextChannel;
        const collector: MessageCollector = channel.createMessageCollector({});

        return collector;
    }


}