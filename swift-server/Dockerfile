FROM swift:5.3 as builder
ARG env

RUN apt-get -qq update && apt-get install -y \
    libssl-dev zlib1g-dev \
    && rm -r /var/lib/apt/lists/*
WORKDIR /app
COPY . .
RUN mkdir -p /build/lib && cp -R /usr/lib/swift/linux/*.so* /build/lib
RUN swift build --configuration=release --enable-test-discovery --enable-index-store --product Server
RUN mv `swift build --configuration=release --product Server --show-bin-path` /build/bin

# Production image
FROM ubuntu:18.04
ARG env

RUN apt-get -qq update && DEBIAN_FRONTEND=noninteractive apt-get install -y \ 
    libatomic1 libicu60 libxml2 libcurl4 libz-dev libbsd0 tzdata \
    && rm -r /var/lib/apt/lists/*
WORKDIR /app
COPY --from=builder /build/bin/Server .
COPY --from=builder /build/lib/* /usr/lib/

ENV ENVIRONMENT=$env

ENTRYPOINT ./Server serve --hostname 0.0.0.0 --port 80