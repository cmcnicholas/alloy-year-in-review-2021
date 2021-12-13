export function getApiUrl(): string {
  if (window.location.href.includes('uk.alloyapp.io')) {
    return 'https://api.uk.alloyapp.io';
  } else if (window.location.href.includes('au.alloyapp.io')) {
    return 'https://api.au.alloyapp.io';
  } else if (window.location.href.includes('staging.alloyapp.io')) {
    return 'https://api.staging.alloyapp.io';
  } else {
    return 'https://api.labs.alloyapp.io';
  }
}
