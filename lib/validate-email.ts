export function validateEmail(email: string): { valid: boolean; error?: string } {
  const trimmed = email.trim()

  if (!trimmed) {
    return { valid: false, error: "Email address is required" }
  }

  // RFC 5322 compliant email regex
  // Matches standard email formats including subdomains, plus addressing, etc.
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: "Please enter a valid email address" }
  }

  return { valid: true }
}