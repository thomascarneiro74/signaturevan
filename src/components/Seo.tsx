import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://signaturevan.fr";

export const Seo = ({ title, description, path, image, jsonLd }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Signature Van" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Signature Van",
  description:
    "Artisan aménageur de vans sur mesure et location de van aménagé à Annecy (Haute-Savoie).",
  url: SITE_URL,
  telephone: "+33 6 00 00 00 00",
  email: "contact@signaturevan.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atelier Signature Van",
    addressLocality: "Chapeiry",
    postalCode: "74540",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  areaServed: ["Annecy", "Haute-Savoie", "Savoie", "Auvergne-Rhône-Alpes"],
  priceRange: "€€€",
  image: `${SITE_URL}/og-image.jpg`,
};
