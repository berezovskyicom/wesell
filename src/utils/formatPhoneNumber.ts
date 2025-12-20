const formatPhoneNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "")

  const match = digits.match(/^38(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (!match) {
    return phone
  }

  return `+38(${match[1]})-${match[2]}-${match[3]}-${match[4]}`
}

export default formatPhoneNumber
