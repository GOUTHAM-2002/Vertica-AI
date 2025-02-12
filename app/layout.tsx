import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import SocialLinks from '@/components/SocialLinks';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vertica-ai.com'),
  title: 'Vertica AI - Advanced AI Solutions for Business Transformation',
  description: 'Transform your business with custom AI solutions. Vertica AI specializes in AI workflow automation, custom agents, LLM customization, and voice agents. Serving clients globally with proven results in operational efficiency and cost reduction.',
  keywords: 'AI agency, artificial intelligence, workflow automation, AI agents, LLM customization, voice agents, business transformation, custom AI solutions, enterprise AI, AI consulting',
  openGraph: {
    title: 'Vertica AI - Advanced AI Solutions for Business Transformation',
    description: 'Transform your business with custom AI solutions. Vertica AI specializes in AI workflow automation, custom agents, LLM customization, and voice agents.',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertica AI - Advanced AI Solutions for Business Transformation',
    description: 'Transform your business with custom AI solutions. Vertica AI specializes in AI workflow automation, custom agents, LLM customization, and voice agents.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://vertica-ai.com" />
        <meta name="theme-color" content="#1e293b" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { 
                let p = function (a, ar) { a.q.push(ar); }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string") {
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar); 
                    return;
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://app.cal.com/embed/embed.js", "init");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <SocialLinks />
        {children}
        <Toaster />
      </body>
    </html>
  );
}