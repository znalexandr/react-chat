function getDigitalFormat(val: number): string {
  return val < 10 ? `0${val}` : String(val);
}

export function convertCurrentTime(val: number): string {
  const mins = getDigitalFormat(Math.floor(val / 60));
  const secs = getDigitalFormat(parseInt((val % 60).toFixed(), 10));

  return `${mins}:${secs}`;
}
