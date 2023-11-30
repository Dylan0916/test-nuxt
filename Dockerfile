FROM node:18-alpine AS base
ENV NODE_ENV production
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile
RUN pnpm build
