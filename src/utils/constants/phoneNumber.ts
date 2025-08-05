import ADDRESS from "@/utils/constants/address"

const PHONE_NUMBER = {
  [ADDRESS.BEREZNIAKY]: "380935982126",
  [ADDRESS.BORSHAHIVKA]: "380953800080",
}

export type PhoneNumber = typeof PHONE_NUMBER[keyof typeof PHONE_NUMBER]

export default PHONE_NUMBER
