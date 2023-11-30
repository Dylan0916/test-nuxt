FROM node:18-alpine AS base
ENV NODE_ENV production
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i
RUN pnpm build

