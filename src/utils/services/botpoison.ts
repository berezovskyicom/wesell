import Botpoison from "@botpoison/browser"

const botpoison = new Botpoison({
  publicKey: process.env.NEXT_PUBLIC_BOTPOISON_KEY as string,
})

export default botpoison
