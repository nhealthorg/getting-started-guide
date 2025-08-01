# Getting Started Guide
Getting started guide for working with FHIR

## Prerequisites

Before you begin, make sure you have the following tools installed:

### 1. Node.js

- [Download Node.js](https://nodejs.org/)
- Choose the LTS version for stability.
- Run the installer and follow the prompts.
- Verify installation:
  ```powershell
  node --version
  npm --version
  ```

### 2. Docker

- [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Run the installer and follow the setup instructions.
- Start Docker Desktop after installation.
- Verify installation:
  ```powershell
  docker --version
  ```

You are now ready to continue with the guide!

### 3. Install App Dependencies

- Install project dependencies (run this in the project root):
  ```powershell
  yarn install
  ```
- Verify installation:
  ```powershell
  yarn --version
  ```

### 4. Local Development & Docker

#### Build and Run Docker Containers

1. Make sure Docker Desktop is running.
2. Open a terminal in the project root directory.
3. To build and start all containers, run:
   ```powershell
   docker-compose up --build
   ```
   - This command builds the Docker images (if needed) and starts all defined services (e.g., database, backend, etc.).
   - The containers will keep running in the foreground. To run them in the background, add `-d`:
     ```powershell
     docker-compose up --build -d
     ```
4. To stop all running containers, use:
   ```powershell
   docker-compose down
   ```

#### Start the Development Server

1. Open a new terminal in the project root directory.
2. Start the local development server:
   ```powershell
   yarn dev
   ```
3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

**Tip:** Code changes are automatically applied as long as the development server is running.