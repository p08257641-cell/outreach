import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/data/site";
import type { PageMeta } from "@/types";

interface SEOHeadProps extends PageMeta {
  noindex?: boolean;
}

export default function SEOHead({ title, description, path, image, noindex }: SEOHeadProps) {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const url = `https://ephesusoutreach.org${path}`;
  const ogImage = image || "/og-image.jpg";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
