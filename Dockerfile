# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Copy the .env file for Vite (but exclude it from final image)
COPY .env .env

# Build the Vite app
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

# Install serve to serve static files
RUN npm install -g serve

WORKDIR /app

# Copy built files only (no .env file in the final image)
COPY --from=builder /app/dist /app/dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
