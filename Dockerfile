# Stage 1: Build the library
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy all files to build the library
COPY . .

# Build the library
RUN npm run build

# Debug: Check if `dist` exists
RUN ls -la /app/dist

# Stage 2: Prepare the final image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only the built files and necessary metadata
COPY --from=builder /app/dist ./dist
COPY package.json README.md LICENSE ./

# Set entrypoint for runtime debugging or extending
CMD ["ls", "dist"]
