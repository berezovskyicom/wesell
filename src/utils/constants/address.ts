const ADDRESS = {
  BEREZNIAKY: "berezniaky",
  BORSHAHIVKA: "borshchahivka",
}

export type Address = typeof ADDRESS[keyof typeof ADDRESS]

export default ADDRESS
