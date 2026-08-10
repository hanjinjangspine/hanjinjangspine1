(function () {
  "use strict";
  if (window.__nshAnalyticsEventsInstalled) return;
  window.__nshAnalyticsEventsInstalled = true;
  var allowedEvents = new Set(["phone_click", "reservation_click", "map_click", "kakao_click", "form_submit", "chatbot_open"]);
  function classify(element) {
    var explicit = (element.getAttribute("data-analytics-event") || "").toLowerCase();
    if (allowedEvents.has(explicit)) return explicit;
    var href = (element.getAttribute("href") || "").toLowerCase();
    var signal = [href, element.id || "", element.className || "", element.getAttribute("aria-label") || ""].join(" ").toLowerCase();
    if (href.indexOf("tel:") === 0) return "phone_click";
    if (/booking\.naver|reservation|reserve|npay\.php/.test(signal)) return "reservation_click";
    if (/chatbot|chat-bot|chat_fab|chat-fab/.test(signal)) return "chatbot_open";
    if (/treatment-map|map\.naver|maps\.google|kko\.kakao\.com/.test(signal)) return "map_click";
    if (/pf\.kakao|talk-channel|kakao/.test(signal)) return "kakao_click";
    return null;
  }
  function send(eventName, element) {
    if (!allowedEvents.has(eventName) || typeof window.gtag !== "function") return;
    window.gtag("event", eventName, { site_domain: window.location.hostname, cta_location: element.getAttribute("data-analytics-location") || "global", destination: eventName.replace(/_(click|open|submit)$/, ""), transport_type: "beacon", debug_mode: window.location.hostname === "localhost" || /(?:^|[?&])ga_debug=1(?:&|$)/.test(window.location.search) });
  }
  document.addEventListener("click", function (event) { var element = event.target && event.target.closest ? event.target.closest("a,button,[role='button'],[data-analytics-event]") : null; if (!element) return; var eventName = classify(element); if (eventName) send(eventName, element); }, true);
  document.addEventListener("submit", function (event) { if (event.target && event.target.matches && event.target.matches("form")) send("form_submit", event.target); }, true);
})();
