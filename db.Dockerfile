FROM postgres:16-alpine

COPY ./db/dump.sql /docker-entrypoint-initdb.d