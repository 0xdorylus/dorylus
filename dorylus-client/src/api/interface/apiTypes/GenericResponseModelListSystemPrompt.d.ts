import { type SystemPrompt } from "../../interface";
export interface GenericResponseModelListSystemPrompt {
    code?: number;
    message?: string;
    result?: SystemPrompt[];
}
