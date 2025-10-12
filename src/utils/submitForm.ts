"use server"

import FORMSPARK from "@/utils/constants/formspark"

type FormState = {
  success: boolean
  error: string
}

const submitForm = async (_: FormState, formData: FormData) => {
  const payload = {
    _botpoison: formData.get("_botpoison"),
    name: formData.get("name"),
    message: formData.get("message"),
    phoneNumber: formData.get("phone"),
  }

  try {
    const res = await fetch(`${FORMSPARK.ORIGIN}/${FORMSPARK.CONTACT_FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      return { success: false, error: `Error ${res.status}` }
    }

    return { success: true, error: "" }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { success: false, error: "Failed to submit form" }
  }
}

export default submitForm
