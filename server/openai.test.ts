import { describe, expect, it, vi } from "vitest";
import { invokeOpenAI } from "./_core/openai";

// Mock do fetch
global.fetch = vi.fn();

describe("invokeOpenAI", () => {
  it("should return a response from OpenAI API", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "Marketing digital é o uso de canais digitais para promover produtos.",
          },
        },
      ],
    };

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const messages = [
      {
        role: "system" as const,
        content: "Você é um especialista em marketing digital.",
      },
      {
        role: "user" as const,
        content: "O que é marketing digital?",
      },
    ];

    const result = await invokeOpenAI(messages);

    expect(result).toBeDefined();
    expect(result.toLowerCase()).toContain("marketing digital");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          "Authorization": expect.stringContaining("Bearer"),
        }),
      })
    );
  });

  it("should throw error if API key is not set", async () => {
    const originalKey = process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_API_KEY;

    const messages = [
      {
        role: "user" as const,
        content: "Teste",
      },
    ];

    await expect(invokeOpenAI(messages)).rejects.toThrow(
      "OPENAI_API_KEY environment variable is not set"
    );

    process.env.OPENAI_API_KEY = originalKey;
  });

  it("should handle API errors gracefully", async () => {
    const mockError = {
      error: {
        message: "Invalid API key",
      },
    };

    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => mockError,
    });

    const messages = [
      {
        role: "user" as const,
        content: "Teste",
      },
    ];

    await expect(invokeOpenAI(messages)).rejects.toThrow();
  });
});
