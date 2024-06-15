export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.slice(0, maxLength) + '...'
  }
}
export function formatAddress(text: string | null, maxLength: number) {
  if (text && text.length <= maxLength) {
    return text
  } else {
    return text?.slice(0, maxLength) + '...' + text?.slice(text.length - maxLength)
  }
}

export function generateUniqueString() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0].toString(16);
}
