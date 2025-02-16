// import { PROGRAMMING_LANGUAGES } from "@legal-canvas/shared/constants";
import { z } from "zod";

export const ARTIFACT_TOOL_SCHEMA = z.object({
  type: z
    .enum(["text"])
    .describe("The content type of the artifact generated."),
  language: z
    .string()
    .optional()
    .describe("The language of the artifact generated.\n"),
  artifact: z.string().describe("The content of the artifact to generate."),
  title: z
    .string()
    .describe(
      "A short title to give to the artifact. Should be less than 5 words."
    ),
});
