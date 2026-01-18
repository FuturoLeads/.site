import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock do invokeOpenAI
vi.mock("./_core/openai", () => ({
  invokeOpenAI: vi.fn().mockResolvedValue(
    "Marketing digital é o uso de canais digitais para promover produtos e serviços."
  ),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("chat.askAboutModule", () => {
  it("should return a response from OpenAI", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.askAboutModule({
      message: "O que é marketing digital?",
      moduleContext: "Módulo 1: Fundamentos do Marketing Digital",
      chapterContext: "Capítulo 1.1: O que é Marketing Digital",
    });

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(result.data.toLowerCase()).toContain("marketing digital");
  });

  it("should handle conversation history", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.askAboutModule({
      message: "Qual é a importância disso?",
      moduleContext: "Módulo 1: Fundamentos do Marketing Digital",
      conversationHistory: [
        {
          role: "user",
          content: "O que é marketing digital?",
        },
        {
          role: "assistant",
          content: "Marketing digital é o uso de canais digitais para promover produtos e serviços.",
        },
      ],
    });

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });

  it("should work without module context", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.askAboutModule({
      message: "Fale sobre SEO",
    });

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
