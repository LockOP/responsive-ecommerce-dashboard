<h1 align="center">OmniSynkAi Frontend</h1>
<!-- TABLE OF CONTENTS -->

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system. You can download and install it from the official Node.js website. Node.js includes npm by default.

  - **npm, Yarn, or pnpm**: Choose one of these package managers to manage your project dependencies. If you're using npm, it comes bundled with Node.js. You can install Yarn by following the instructions on the Yarn website, and pnpm can be installed similarly from the pnpm website.

- **Git**: Git is a version control system used for tracking changes in your codebase. You can download and install it from the official Git website.

## Installation

Here's how to install and set up the program locally.

From your command line:

```
# Clone this repository
$ git clone https://github.com/OmniSynkAi/frontend-omni.git

# Go into the repository
$ cd frontend-omni

# Install backend dependencies
$ npm install
# or
$ yarn install
# or
$ pnpm install

# Start the backend
$ npm start
# or
$ yarn start
# or
$ pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The link below provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories. https://nextjs.org/docs/app/building-your-application/configuring/src-directory

| Folder   | Description                        |
| -------- | ---------------------------------- |
| `src`    | Optional application source folder |
| `app`    | App Router                         |
| `public` | Static assets to be served         |

| Files              | Description                             |
| ------------------ | --------------------------------------- |
| .gitignore         | Git files and folders to ignore         |
| next-env.d.ts      | TypeScript declaration file for Next.js |
| next.config.js     | Configuration file for Next.js          |
| package.json       | Project dependencies and scripts        |
| tsconfig.json      | Configuration file for TypeScript       |
| tailwind.config.js | Tailwind CSS configuration file         |
| postcss.config.js  | PostCSS configuration file              |
