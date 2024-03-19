export const pwaSeoConfig = `
<!-- PWA Support -->

<!-- Favicons. -->
<!-- 16 -->
<link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
<!-- 20 -->
<link rel="icon" type="image/png" sizes="20x20" href="/img/icons/favicon-20x20.png" />
<!-- 24 -->
<link rel="icon" type="image/png" sizes="24x24" href="/img/icons/favicon-24x24.png" />
<!-- 48 -->
<link rel="icon" type="image/png" sizes="48x48" href="/img/icons/favicon-48x48.png" />
<!-- 64 -->
<link rel="icon" type="image/png" sizes="64x64" href="/img/icons/favicon-64x64.png" />
<!-- 128 -->
<link rel="icon" type="image/png" sizes="128x128" href="/img/icons/favicon-128x128.png" />
<!-- 144 -->
<link rel="icon" type="image/png" sizes="144x144" href="/img/icons/favicon-144x144.png" />
<!-- 256 -->
<link rel="icon" type="image/png" sizes="256x256" href="/img/icons/favicon-256x256.png" />
<!-- 512 -->
<link rel="icon" type="image/png" sizes="512x512" href="/img/icons/favicon-512x512.png" />
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

<!-- Sitemap -->
<meta name="msapplication-config" content="/browserconfig.xml" />

<!-- Worker Registration -->
{
  !import.meta.env.DEV && (
    <script is:inline src="/registerSW.js"></script>
    <link rel="manifest" href="/manifest.webmanifest" />
  )
}`
