import { Helmet } from 'react-helmet-async';
import Favicon from '/favicon.svg';

const SEO = ({ title, description, name, type, language }) => {
  return (
    <Helmet>
      {/* Website Language */}
      <html lang={language} />
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="og:image" content={Favicon} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {name && <meta name="twitter:creator" content={name} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:domain" content="localhost" />
      <meta property="twitter:url" content="https://localhost" />
      <meta name="twitter:image" content={Favicon} />
      {/* End Twitter tags */}
      {/* Favicon */}
      <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      <link rel="icon" type="image/svg+xml" href={Favicon} />
    </Helmet>
  );
};

export default SEO;
