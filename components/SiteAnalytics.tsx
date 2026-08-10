import Script from "next/script";

const measurementId = "G-5YJ72RHWGF";

export default function SiteAnalytics() {
  return (
    <>
      <Script id="new-standard-ga4-bootstrap" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
        gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        gtag('js', new Date());
        gtag('set', { allow_google_signals: false, allow_ad_personalization_signals: false });
        gtag('config', '${measurementId}', {
          send_page_view: true,
          linker: { domains: ['new-standard.co.kr', 'joint.new-standard.co.kr', 'rehab.new-standard.co.kr', 'hanjinjangspine1.com'] }
        });
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script src="/analytics-events.js?v=20260810" strategy="afterInteractive" />
    </>
  );
}
