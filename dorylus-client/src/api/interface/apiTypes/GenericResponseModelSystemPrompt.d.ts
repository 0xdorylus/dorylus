import { type SystemPrompt } from "../../interface";
export interface GenericResponseModelSystemPrompt {
    code?: number;
    message?: string;
    result?: SystemPrompt;
}
