export function validatePhone(phone: string): { valid: boolean; error?: string } {
  const trimmed = phone.trim()

  if (!trimmed) {
    return { valid: false, error: "Phone number is required" }
  }

  // Strip all non-digit characters
  const digits = trimmed.replace(/\D/g, "")

  // Must be exactly 10 digits
  if (digits.length !== 10) {
    return { valid: false, error: "Phone number must be exactly 10 digits" }
  }

  // Must start with a valid digit (6-9 for mobile in India, but allowing 1-9 broadly)
  if (!/^[1-9]/.test(digits)) {
    return { valid: false, error: "Phone number must start with a digit 1-9" }
  }

  return { valid: true }
}