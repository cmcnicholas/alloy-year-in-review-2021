export function switchApi(apiUrl: string): string {
  const url = new URL(window.location.href);
  url.searchParams.set('referer', apiUrl);
  return url.href;
}
