"use client"

import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useActionState, useMemo } from "react"
import Button from "@/components/Button/Button"
import Container from "@/components/Container"
import Heading from "@/components/Heading/Heading"
import useTranslate from "@/hooks/useTranslate"
import ADDRESS from "@/utils/constants/address"
import TELEGRAM from "@/utils/constants/telegram"
import submitForm from "@/utils/submitForm"

import TelegramIcon from "@/icons/telegram.svg"

import styles from "./ContactUs.module.scss"

interface IContactUsProps {
  className?: string
}

const ContactUs = ({
  className,
}: IContactUsProps) => {
  const [state, formAction] = useActionState(submitForm, { success: false, error: "" })
  const translate = useTranslate()

  const submitText = useMemo(() => {
    if (state.success) {
      return translate("contact-us.form.send-success")
    }

    if (state.error) {
      return translate("contact-us.form.send-error")
    }

    return translate("contact-us.form.send")
  }, [state, translate])

  return (
    <Container className={classNames(styles["contact-us"], className)}>
      <form className={styles["contact-us__form"]} action={formAction}>
        <Heading className={styles["contact-us__title"]} type={3}>
          {translate("contact-us.title")}
        </Heading>
        <div className={styles["contact-us__inputs"]}>
          <input
            className={styles["contact-us__input"]}
            autoComplete="on"
            id="name"
            name="name"
            placeholder={translate("contact-us.form.name")}
            required
            type="text"
          />
          <input
            className={styles["contact-us__input"]}
            autoComplete="on"
            id="tel"
            name="phone"
            placeholder={translate("contact-us.form.phone-number")}
            type="tel"
            required
          />
          <textarea
            className={styles["contact-us__textarea"]}
            id="message"
            name="message"
            placeholder={translate("contact-us.form.description")}
            required
          />
        </div>
        <div className={styles["contact-us__buttons"]}>
          <Button
            className={styles["contact-us__button"]}
            disabled={state.success}
            type="submit"
          >
            {submitText}
          </Button>
          <Link
            href={TELEGRAM[ADDRESS.BEREZNIAKY]}
            prefetch={false}
            className={classNames(
              styles["contact-us__button"],
              styles["contact-us__button--telegram"],
            )}
          >
            <TelegramIcon />
            {translate("contact-us.form.telegram")}
          </Link>
        </div>
      </form>
      <Image
        className={styles["contact-us__image"]}
        src="/assets/contact-us/bmw.png"
        width={447}
        height={463}
        alt="BMW"
      />
    </Container>
  )
}

export default ContactUs
