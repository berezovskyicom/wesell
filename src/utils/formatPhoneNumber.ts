const formatPhoneNumber = (phone: string) => {
  // Ensure we have only digits
  const digits = phone.replace(/\D/g, "")

  // Match against expected Ukrainian pattern
  const match = digits.match(/^38(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (!match) {
    // Fallback: return the original if it doesn't match
    return phone
  }

  // Build formatted string
  return `+38(${match[1]})-${match[2]}-${match[3]}-${match[4]}`
}

export default formatPhoneNumber
