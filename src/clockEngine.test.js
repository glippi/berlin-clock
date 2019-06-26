import { parseDate } from './clockEngine'

describe('Berlin clock should', () => {
  it.each`
    date     | secondsLight
    ${'00:00:00'} | ${["Y","OOOO","OOOO","OOOOOOOOOOO","OOOO"]}
    ${'00:00:01'} | ${["O","OOOO","OOOO","OOOOOOOOOOO","OOOO"]}
    ${'00:00:02'} | ${["Y","OOOO","OOOO","OOOOOOOOOOO","OOOO"]}
    ${'00:00:03'} | ${["O","OOOO","OOOO","OOOOOOOOOOO","OOOO"]}
  `('should be $secondsLight based on $date second', ({ date, secondsLight }) => {

    expect(parseDate(date)).toEqual(secondsLight)
  });

  it.each`
    date     | clockLight
    ${'00:01:00'} | ${["Y","OOOO","OOOO","OOOOOOOOOOO","YOOO"]}
    ${'00:02:00'} | ${["Y","OOOO","OOOO","OOOOOOOOOOO","YYOO"]}
    ${'00:03:00'} | ${["Y","OOOO","OOOO","OOOOOOOOOOO","YYYO"]}
    ${'00:04:00'} | ${["Y","OOOO","OOOO","OOOOOOOOOOO","YYYY"]}
    ${'00:05:00'} | ${["Y","OOOO","OOOO","YOOOOOOOOOO","OOOO"]}
    ${'00:56:00'} | ${["Y","OOOO","OOOO","YYYYYYYYYYY","YOOO"]}
  `('should be $clockLight based on $date', ({ date, clockLight }) => {

    expect(parseDate(date)).toEqual(clockLight);
  });

  it.each`
    date     | clockLight
    ${'01:00:00'} | ${["Y","OOOO","ROOO","OOOOOOOOOOO","OOOO"]}
    ${'02:00:00'} | ${["Y","OOOO","RROO","OOOOOOOOOOO","OOOO"]}
    ${'03:00:00'} | ${["Y","OOOO","RRRO","OOOOOOOOOOO","OOOO"]}
    ${'04:00:00'} | ${["Y","OOOO","RRRR","OOOOOOOOOOO","OOOO"]}
    ${'05:00:00'} | ${["Y","ROOO","OOOO","OOOOOOOOOOO","OOOO"]}
  `('should be $clockLightbsed on $date', ({ date, clockLight }) => {

    expect(parseDate(date)).toEqual(clockLight);
  });

});
