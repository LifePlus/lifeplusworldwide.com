export async function fetchVacancies(body = {
  visibility: 'public',
  unfilled: true,
  on_corp_website: true,
}) {
  return fetch(`${import.meta.env.VMS_URL || process.env.VMS_URL}/api/vacancies`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VMS_TOKEN || process.env.VMS_TOKEN}`,
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export function createSlug(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/-+/g, '-') // Replace multiple consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
}

export function buildVacancySlug(vacancy, locale) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  return prefix + '/careers/' + vacancy.slug
}

export function buildApplyUrl(vacancyId, locale, utmContent) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${prefix}/apply/${vacancyId}?utm_content=${encodeURIComponent(utmContent)}`;
}