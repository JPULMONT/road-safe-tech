export type ConsentLevel = 'all' | 'essential' | null;

export const CONSENT_KEY = 'carstore_cookie_consent';
export const CONSENT_DATE_KEY = 'carstore_cookie_consent_date';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function getConsent(): ConsentLevel {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentLevel;
}

export function setConsent(level: 'all' | 'essential') {
  localStorage.setItem(CONSENT_KEY, level);
  localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function hasFullConsent(): boolean {
  return getConsent() === 'all';
}

export function enableAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
}

export function enableEssentialOnly() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}
