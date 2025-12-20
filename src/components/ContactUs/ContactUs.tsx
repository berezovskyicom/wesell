"use client"

import classNames from "classnames"
import replace from "lodash-es/replace"
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useMemo, useState } from "react"
import isMobilePhone from "validator/es/lib/isMobilePhone"
import Button from "@/components/Button"
import Container from "@/components/Container"
import Title, { TitleSize } from "@/components/Title"
import useTranslate from "@/hooks/useTranslate"
import botpoison from "@/services/botpoison"
import META from "@/utils/constants/meta"
import submitForm from "@/utils/submitForm"
import Branch from "@/utils/types/Branch"

import TelegramIcon from "@/icons/telegram.svg"

import styles from "./ContactUs.module.scss"

interface ContactUsProps {
  className?: string
}

const ContactUs = ({
  className,
}: ContactUsProps) => {
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
        <Title className={styles["contact-us__title"]} size={TitleSize.XS}>
          {translate("contact-us.title")}
        </Title>
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
            href={META[Branch.BEREZNIAKY].telegram}
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
