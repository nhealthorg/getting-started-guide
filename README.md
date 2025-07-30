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

### 4. Run the App

- Start the development server:
  ```powershell
  yarn dev
  ```
- Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.