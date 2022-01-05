export function getApiUrl(to: 'uk' | 'au' | 'staging' | 'labs'): string {
  if (to === 'uk') {
    return 'https://api.uk.alloyapp.io';
  } else if (to === 'au') {
    return 'https://api.au.alloyapp.io';
  } else if (to === 'staging') {
    return 'https://api.staging.alloyapp.io';
  } else {
    return 'https://api.labs.alloyapp.io';
  }
}
