export interface Message {
	content: string;
	userId: string;
	id: string;
}

export function validateMessage(message: any): Message | undefined{
    if (typeof message !== "object"){
        return;
    }

    const content = message.content;
    const userId = message.userId;
    const id = message.id;

    if (typeof content !== "string" || typeof userId !== "string" || typeof id !=="string"){
        return;
    }

    return {
        content,
        userId,
        id
    }
}