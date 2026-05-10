/**
 * Strips HTML tags from a string and returns plain text content.
 * Useful for getting the actual text length from rich text / HTML input.
 */
export function stripHtml(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, "")
  // Decode common HTML entities
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&nbsp;": " ",
  }
  for (const [entity, char] of Object.entries(entities)) {
    text = text.replace(new RegExp(entity, "g"), char)
  }
  return text
}

export function validateMessageLength(
  message: string,
  minLength: number = 20
): { valid: boolean; error?: string } {
  const stripped = stripHtml(message)
  const trimmedLength = stripped.trim().length

  if (trimmedLength === 0) {
    return { valid: false, error: "Message is required" }
  }

  if (trimmedLength < minLength) {
    return {
      valid: false,
      error: `Message must be at least ${minLength} characters (currently ${trimmedLength})`,
    }
  }

  return { valid: true }
}