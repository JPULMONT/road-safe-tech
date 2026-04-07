declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function getUTMParams() {
  if (typeof window === 'undefined') return {} as Record<string, string>;
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'direct',
    utm_medium: params.get('utm_medium') || 'none',
    utm_campaign: params.get('utm_campaign') || 'none',
    utm_content: params.get('utm_content') || 'none',
    utm_term: params.get('utm_term') || 'none',
    page_url: window.location.href,
    referrer: document.referrer || 'direct',
    timestamp: new Date().toISOString(),
  };
}

export function storeUTMs() {
  const params = getUTMParams();
  if (params.utm_source !== 'direct') {
    sessionStorage.setItem('carstore_utms', JSON.stringify(params));
  }
}

export function getStoredUTMs() {
  const stored = sessionStorage.getItem('carstore_utms');
  return stored ? JSON.parse(stored) : getUTMParams();
}

export function pushFormEvent(formType: string, fleetSize?: string) {
  const utms = getStoredUTMs();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_submit',
    form_type: formType,
    fleet_size: fleetSize || '',
    utm_source: utms.utm_source,
    utm_campaign: utms.utm_campaign,
    page_url: window.location.href,
  });
}
