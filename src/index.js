import nx from '@jswork/next';
import '@jswork/next-time-format';

/* prettier-ignore */
const pad = function (value, len) { return ('' + value).padStart(len || 2, '0'); };

nx.time2clock = function (inTimestamp) {
  const target = nx.timeFormat(inTimestamp);
  const part1_1 = [pad(target.hour), pad(target.minute), pad(target.second)];
  const part1_2 = [pad(target.minute), pad(target.second)];
  const part2_1 = ',';
  const part2_2 = '.';
  const part_std = '.';
  const part3_1 = pad(target.millisecond, 3);
  const part3_2 = pad(target.millisecond);

  return {
    srt: [part1_1.join(':'), part2_1, part3_1].join(''),
    std: [part1_1.join(':'), part_std, part3_1].join(''),
    lrc: [part1_2.join(':'), part2_2, part3_2].join('')
  };
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.time2clock;
}

export default nx.time2clock;
