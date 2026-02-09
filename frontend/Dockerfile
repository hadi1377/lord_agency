# Build stage
FROM node:20-alpine AS builder

# Enable Corepack for Yarn version management
RUN corepack enable

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./

# Install dependencies (including devDependencies for build)
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; else yarn install; fi

# Copy source code
COPY . .

# Build the application
RUN yarn run build

# Production stage
FROM node:20-alpine AS runner

# Enable Corepack for Yarn version management
RUN corepack enable

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files
COPY package.json yarn.lock* ./

# Install only production dependencies
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile --production; else yarn install --production; fi

# Copy built application from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Expose port
EXPOSE 4000

# Start production server
CMD ["yarn", "run", "start:docker"]
