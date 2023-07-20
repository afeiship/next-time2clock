interface Result {
  srt: string;
  std: string;
  lrc: string;
}

interface NxStatic {
  time2clock: (ts: number) => Result;
}
