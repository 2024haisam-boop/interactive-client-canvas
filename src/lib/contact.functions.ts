import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  service: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0),
});

export const sendProjectEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];

    if (!apiKey) {
      throw new Error("Email delivery is not configured yet.");
    }

    const recipient = process.env["CONTACT_TO_EMAIL"] || "qossainawais@gmail.com";
    const sender = process.env["RESEND_FROM_EMAIL"] || "Forthmotive <onboarding@resend.dev>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: data.email,
        subject: `New project enquiry — ${data.service}`,
        text: [
          "New project enquiry from the Forthmotive website",
          "",
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Service: ${data.service}`,
          "",
          "Project details:",
          data.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend rejected a project enquiry:", response.status, details);
      throw new Error("We could not send your enquiry right now.");
    }

    return { success: true };
  });
