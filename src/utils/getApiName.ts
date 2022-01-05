export function getApiName(): 'uk' | 'au' | 'staging' | 'labs' {
  if (window.location.href.includes('uk.alloyapp.io')) {
    return 'uk';
  } else if (window.location.href.includes('au.alloyapp.io')) {
    return 'au';
  } else if (window.location.href.includes('staging.alloyapp.io')) {
    return 'staging';
  } else if (window.location.href.includes('labs.alloyapp.io')) {
    return 'labs';
  } else {
    return 'uk'; // default uk
  }
}
