import * as dotenv from 'dotenv'
import { Client, TextChannel } from "discord.js";
import ready from "./listeners/ready";
import CustomMessageCollector from "./messageCollectors/customMessageCollector";

dotenv.config();

const token = process.env.botToken

console.log("Bot is starting...");

const client = new Client({
    intents: [512, 1024]
});

ready(client);

(async () => {
    await client.login(token);

    client.on('error', console.log);

    const collector = new CustomMessageCollector('1145450208990330970', client);

    collector.createInstance().then((collector) => {
        collector.on('collect', (message) => {
            switch (message.author.id) {
                case process.env.jonas:
                    message.react('🇦');
                    message.react('🇷');
                    message.react('🇸');
                    message.react('🇨');
                    message.react('🇭');
                    message.react('🇫');
                    message.react('🇴');
                    message.react('🇹');
                    message.react('🇿');
                    message.react('🇪');
                    break;
                case process.env.paul:
                    message.react('☕');
                    break;
                default:
                    break;
            }
        });
    });

    // const channel = await client.channels.fetch('759093650285264926') as TextChannel;
    // const channel2 = await client.channels.fetch('1145450208990330970') as TextChannel;
    // const channel3 = await client.channels.fetch('710803376475996186') as TextChannel;

    // const collector = channel.createMessageCollector({});
    // const collector2 = channel2.createMessageCollector({});
    // const collector3 = channel3.createMessageCollector({});

    // collector.on('collect', (message) => {
    //     message.react('🇦');
    //     message.react('🇷');
    //     message.react('🇸');
    //     message.react('🇨');
    //     message.react('🇭');
    //     message.react('🇫');
    //     message.react('🇴');
    //     message.react('🇹');
    //     message.react('🇿');
    //     message.react('🇪');
    // });

    // collector2.on('collect', (message) => {
    //     message.react('🇦');
    //     message.react('🇷');
    //     message.react('🇸');
    //     message.react('🇨');
    //     message.react('🇭');
    //     message.react('🇫');
    //     message.react('🇴');
    //     message.react('🇹');
    //     message.react('🇿');
    //     message.react('🇪');
    // });

    // collector3.on('collect', (message) => {
    //     message.react('🇦');
    //     message.react('🇷');
    //     message.react('🇸');
    //     message.react('🇨');
    //     message.react('🇭');
    //     message.react('🇫');
    //     message.react('🇴');
    //     message.react('🇹');
    //     message.react('🇿');
    //     message.react('🇪');
    // });


    // client.on('messageCreate', (message) => {
    //     if (message.author.bot) return;

    //     if (message.author.id !== process.env.henrik) return;

    //     // message.react('☕');
    //     message.react('🇦');
    //     message.react('🇷');
    //     message.react('🇸');
    //     message.react('🇨');
    //     message.react('🇭');
    //     message.react('🇫');
    //     message.react('🇴');
    //     message.react('🇹');
    //     message.react('🇿');
    //     message.react('🇪');
    // });

})();
