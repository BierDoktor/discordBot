import { IReaction } from "../IReaction";

export class jonasReaction implements IReaction {
    targetUserId: string = process.env.jonas as string;
    reactions: string[] = ['🇦', '🇷', '🇸', '🇨', '🇭', '🇫', '🇴', '🇹', '🇿', '🇪']
}