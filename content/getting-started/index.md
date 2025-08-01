# Getting Started With FHIR

This guide will walk you through setting up your environment to create, read, update, and delete (CRUD) a ResearchStudy resource using FHIR as a backend. You will learn how to write code in Nuxt, build a user interface, and connect your frontend to a FHIR server. By following the steps, you'll gain hands-on experience in building a modern web application that interacts with FHIR data and supports full CRUD operations on ResearchStudy resources.

## Project Structure

This project contains several folders and files, but as a beginner, you only need to focus on two main folders: `app` and `server`.

### The `app` Folder

The `app` folder contains all the frontend code for your Nuxt application. Here you will find:

- **components/**: Reusable Vue components for your UI (e.g., buttons, forms, tables).
- **pages/**: Vue files that define the routes of your application. Each file automatically becomes a route.
- **assets/**: Static files like CSS, images, or fonts.
- **app.config.ts**: Configuration specific to your Nuxt app.

When you build your UI or add new features, you will mostly work inside the `app` folder. Nuxt automatically handles routing and component registration, making it easy to get started.

### The `server` Folder

The `server` folder contains backend code that runs on the server side. In a Nuxt project, this is where you can:

- Add API endpoints (e.g., to fetch or update services)
- Write server-side logic that interacts with your frontend
- Handle authentication, database access, or other backend tasks

In this guide, you will query the FHIR backend directly from your Nuxt frontend. The `server` folder is available if you want to add custom backend logic, combine data from multiple services, or implement features like authentication or data transformation in the future.

---

For more information about how Nuxt works and how to structure your project, see the [Nuxt.js Documentation](https://nuxt.com/docs/getting-started/introduction).