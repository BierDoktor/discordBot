"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomMessageCollector {
    channelId;
    client;
    constructor(channelId, client) {
        this.channelId = channelId;
        this.client = client;
    }
    async createInstance() {
        const channel = await this.client.channels.fetch(this.channelId);
        const collector = channel.createMessageCollector({});
        return collector;
    }
}
exports.default = CustomMessageCollector;
