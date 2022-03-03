FROM node:14

# Create app directory
WORKDIR /var/www/html

# Bundle app source
COPY . .

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

EXPOSE 3000

COPY deploy.sh /scripts/deploy.sh
RUN ["chmod", "+x", "/scripts/deploy.sh"]
ENTRYPOINT ["/scripts/deploy.sh"]
