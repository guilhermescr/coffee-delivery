export function convertDotToComma(value: number): string {
  return value.toFixed(2).replace('.', ',');
}
