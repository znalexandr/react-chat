export function getPercent(value: number, sum: number): number {
  const percent = 100 / (sum / value);

  return Math.round(percent);
}
