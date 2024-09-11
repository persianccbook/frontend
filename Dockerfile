FROM docker.arvancloud.ir/oven/bun

WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Start app in development mode
RUN bun --bun run build
CMD ["bun","--bun", "run", "start"]