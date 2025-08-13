import Home from "@/components/Home"
import translate from "@/utils/translate"

const HomePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WeSell Service",
    url: "https://wesellservice.com",
    logo: "https://wesellservice.com/assets/logo.png",
    description: translate("home.metadata.description"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  )
}

export default HomePage
