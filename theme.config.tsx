/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
 import { useRouter } from 'next/router';

 const github = 'https://github.com/public-assembly/flexible';
 
 const TITLE_WITH_TRANSLATIONS = {
   'en-US': 'Flexible Documentation',
 } as const;
 
 const EDIT_LINK_WITH_TRANSLATIONS = {
   'en-US': 'Edit this page on GitHub →',
 } as const;
 
 import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs';
 
 const Logo = ({ height, width }: { height: number; width: number }) => {
   const { theme } = useTheme();
   return (
     <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.1719C20.4949 25.1719 25.76 20.027 25.76 13.6804C25.76 7.33378 20.4949 2.18886 14 2.18886C7.50513 2.18886 2.24 7.33378 2.24 13.6804C2.24 20.027 7.50513 25.1719 14 25.1719ZM14 27.3607C21.732 27.3607 28 21.2358 28 13.6804C28 6.12491 21.732 0 14 0C6.26801 0 0 6.12491 0 13.6804C0 21.2358 6.26801 27.3607 14 27.3607ZM19.4949 9.3383H12.1542V12.6971H12.1557V9.33866H19.4964V6.77249H19.4949V9.3383ZM18.581 12.6975V15.2336H12.1542V21.3567H9.11608V21.357H12.1557V15.2339H18.5825V12.6975H18.581ZM12.2301 9.41307H19.5708V6.69808H9.04167V21.4314H12.2301V15.3083H18.657V12.6231H12.2301V9.41307Z" fill="white"/>
        </svg>
       <span style={{ fontWeight: 'bold', fontSize: 18 }}>Flexible Docs</span>
     </div>
   );
 };
 

 const config: DocsThemeConfig = {
   docsRepositoryBase: `${github}/blob/main`,
   chat: {
    link: "https://forum.public---assembly.com/",
    icon: (
      <svg width="24" height="24">
        <path
          fill="white"
          d="M 12.1016 0 C 18.6641 0 24 5.48438 24 11.9961 C 24 18.5078 18.6719 23.9883 12.1016 23.9883 L 0 24 L 0 11.7891 C 0 5.28125 5.53125 0 12.1016 0 Z M 12.2188 4.5625 C 9.62891 4.55859 7.22266 5.91406 5.88281 8.13281 C 4.55078 10.3438 4.49609 13.0898 5.73438 15.3516 L 4.39844 19.6094 L 9.19531 18.5352 C 11.9375 19.7617 15.1484 19.2148 17.3281 17.1445 C 19.5 15.0938 20.1914 11.918 19.0664 9.14844 C 17.9336 6.37109 15.2266 4.55859 12.2266 4.5625 Z M 12.2188 4.5625"
        />
      </svg>
    ),
  },
   project: {
     link: github,
   },
   darkMode: true,
   nextThemes: {
     defaultTheme: 'dark',
   },
   primaryHue: {
     dark: 169,
     light: 212,
   },
   footer: {
     text: `Built by Public Assembly`,
   },
   logo() {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     return (
       <div className="flex items-center gap-2">
         <Logo width={18} height={18} />
       </div>
     );
   },
   useNextSeoProps() {
     return {
       titleTemplate: `%s - Flexible Documentation`,
     };
   },
   head() {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const { frontMatter } = useConfig();
 
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const { theme } = useTheme();
     const title = frontMatter?.title || 'Build with Flexible';
     const description =
       frontMatter?.description ||
       'Create your own DAO interface - Flexible.';
       const image = frontMatter?.type
      ? `https://docs.flexible.pa.com/api/og?title=${frontMatter?.ogImageText}&category=Developing`
      : frontMatter?.image || '/og.jpg';
    const folder = theme === 'light' ? '/light' : '/dark';

    const composedTitle = `${title} – Flexible Documentation`;
 
     return (
       <>
         <link
           rel="apple-touch-icon"
           sizes="180x180"
           href={`favicon_io/apple-touch-icon.png`}
         />
         <link
           rel="icon"
           type="image/png"
           sizes="32x32"
           href={`favicon_io/favicon-32x32.png`}
         />
         <link
           rel="icon"
           type="image/png"
           sizes="16x16"
           href={`favicon_io/favicon-16x16.png`}
         />
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link
           rel="preconnect"
           href="https://fonts.gstatic.com"
         />
         <link
           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
           rel="stylesheet"
         />
         <meta name="theme-color" content="#ffffff" />
         <meta name="msapplication-TileColor" content="#00a300" />
         <link rel="manifest" href={`${folder}/site.webmanifest`} />
         <meta httpEquiv="Content-Language" content="en" />
         <meta name="title" content={composedTitle} />
         <meta name="description" content={description} />
 
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content="@pblcasmbly" />
         <meta name="twitter:image" content={image} />
 
         <meta property="og:description" content={description} />
         <meta property="og:title" content={composedTitle} />
         <meta property="og:image" content={image} />
         <meta property="og:type" content="website" />
         <meta
           name="apple-mobile-web-app-title"
           content="Flexible  Documentation"
         />
         <script
           async
           src="https://www.googletagmanager.com/gtag/js?id=G-YNF68V1ND1"
         ></script>
         <script>
           {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', 'G-YNF68V1ND1');
            `}
         </script>
       </>
     );
   },
   sidebar: {
     defaultMenuCollapseLevel: 1,
     titleComponent: ({ title, type }) =>
       type === 'separator' ? (
         <div className="flex items-center gap-2">
           <Logo height={10} width={10} />
           {title}
         </div>
       ) : (
         <>{title}</>
       ),
   },
   editLink: {
     text() {
       // eslint-disable-next-line react-hooks/rules-of-hooks
       const { locale } = useRouter();
       return (
         <>
           {
             EDIT_LINK_WITH_TRANSLATIONS[
               (locale as keyof typeof EDIT_LINK_WITH_TRANSLATIONS) ?? 'en-US'
             ]
           }
         </>
       );
     },
   },
   i18n: [{ locale: 'en-US', text: 'English' }],
   gitTimestamp: ({ timestamp }) => (
     <>Last updated on {timestamp.toLocaleDateString()}</>
   ),
 };
 
 export default config;