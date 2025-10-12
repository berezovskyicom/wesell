"use client"

import classNames from "classnames"
import replace from "lodash-es/replace"
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useMemo, useState } from "react"
import isMobilePhone from "validator/es/lib/isMobilePhone"
import Button from "@/components/Button/Button"
import Container from "@/components/Container"
import Heading from "@/components/Heading/Heading"
import useTranslate from "@/hooks/useTranslate"
import ADDRESS from "@/utils/constants/address"
import TELEGRAM from "@/utils/constants/telegram"
import botpoison from "@/utils/services/botpoison"
import submitForm from "@/utils/submitForm"

import TelegramIcon from "@/icons/telegram.svg"

import styles from "./ContactUs.module.scss"

interface IContactUsProps {
  className?: string
}

const ContactUs = ({
  className,
}: IContactUsProps) => {
  const [isPhoneError, setIsPhoneError] = useState(false)
  const [state, setState] = useState({ success: false, error: "" })
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const phone = replace(formData.get("phone") as string, /\D/g, "")

    if (!isMobilePhone(phone, "uk-UA")) {
      event.preventDefault()
      setIsPhoneError(true)
      return
    }

    setIsPhoneError(false)

    const { solution } = await botpoison.challenge()
    formData.append("_botpoison", solution)

    const result = await submitForm(state, formData)
    setState(result)
  }

  return (
    <Container className={classNames(styles["contact-us"], className)}>
      <form
        className={styles["contact-us__form"]}
        onSubmit={handleSubmit}
      >
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
          <div className={styles["contact-us__input-wrapper"]}>
            <input
              className={classNames(styles["contact-us__input"], {
                [styles["contact-us__input--error"]]: isPhoneError,
              })}
              autoComplete="on"
              id="tel"
              name="phone"
              placeholder={translate("contact-us.form.phone-number")}
              type="tel"
              required
            />
            {isPhoneError && (
              <span className={styles["contact-us__error"]}>
                {translate("contact-us.form.invalid-phone")}
              </span>
            )}
          </div>
          <textarea
            className={styles["contact-us__textarea"]}
            id="message"
            minLength={10}
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
