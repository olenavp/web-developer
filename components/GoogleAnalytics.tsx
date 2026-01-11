'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export const GA_TRACKING_ID = '';

export function GoogleAnalytics() {
  return (
    <>
      {/* <Script id="google-analytics-test" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
          });     
        `}
      </Script> */}
    </>
  );
}
