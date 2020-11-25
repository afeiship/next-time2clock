/*!
 * name: @jswork/next-time2clock
 * description: Time to clock(lrc/srt) for next.
 * homepage: https://github.com/afeiship/next-time2clock
 * version: 1.0.0
 * date: 2020-11-25 14:37:26
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var timefomrat = nx.timeformat || require('@jswork/next-time-format');
  /* prettier-ignore */
  var pad = function (value) { return ('' + value).padStart(2, '0'); };

  nx.time2clock = function (inTimestamp) {
    var target = timefomrat(inTimestamp);
    var part1_1 = [pad(target.hour), pad(target.minute), pad(target.second)];
    var part1_2 = [pad(target.minute), pad(target.second)];
    var part2_1 = ',';
    var part2_2 = '.';
    var part3_1 = pad(target.millisecond);
    var part3_2 = pad(target.millisecond);

    return {
      srt: [part1_1.join(':'), part2_1, part3_1].join(''),
      lrc: [part1_2.join(':'), part2_2, part3_2].join('')
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.time2clock;
  }
})();