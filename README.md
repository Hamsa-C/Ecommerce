# E-Commerce Web Application

A responsive e-commerce web application built with **React** and **Vite**. The project provides a simple shopping flow where users can create an account, log in, browse products, view product details, and access their orders. A local **JSON Server** instance is used as a mock REST API for development.

## Features

- **User registration** – create an account using name, email, mobile number, and password.
- **User login** – validate login details against the mock API.
- **Product catalogue** – browse products loaded from the API.
- **Product search and category filtering** – find products by keyword and filter by category.
- **Product details** – open an individual product page.
- **Order management** – view order information in the orders section.
- **Navigation** – move between the home, signup, login, dashboard, product detail, success, and orders pages.
- **Notifications** – display success and error messages with React Toastify.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React 19, JavaScript, HTML, CSS |
| Build tool | Vite |
| Routing | React Router DOM |
| HTTP requests | Axios |
| Notifications | React Toastify |
| Icons | React Icons |
| UI effects | React Confetti |
| Mock API | JSON Server |
| Data storage | `db.json` |

## Project Structure

```text
Ecommerce/
├── public/
├── src/
│   ├── assets/             # Static assets
│   ├── components/         # Reusable UI components
│   │   └── Navbar.jsx
│   ├── pages/              # Application pages
│   │   ├── Dashboard.jsx
│   │   ├── Homepage.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Signup.jsx
│   │   └── Success.jsx
│   ├── style/              # Global and page styles
│   ├── App.jsx             # Application routes
│   └── main.jsx            # React entry point
├── db.json                 # Mock API data
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) (includes npm)
- A web browser
- A terminal such as PowerShell, Command Prompt, or the VS Code terminal

### 1. Clone the repository

```bash
git clone https://github.com/Hamsa-C/Ecommerce.git
cd Ecommerce
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the mock REST API

Open a terminal in the project root and run:

```bash
npx json-server@0.17.4 --watch db.json --port 3000
```

The mock API will be available at:

```text
http://localhost:3000
```

The application uses these JSON Server resources:

| Resource | Endpoint |
|---|---|
| Users | `http://localhost:3000/users` |
| Products | `http://localhost:3000/products` |
| Orders | `http://localhost:3000/orders` |

Keep this terminal running while using the application.

### 4. Start the React application

Open a **second terminal** in the project folder and run:

```bash
npm run dev
```

Vite will display a local development URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint checks |

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/signup` | User registration |
| `/login` | User login |
| `/dashboard` | Product dashboard |
| `/productdetail/:id/` | Individual product details |
| `/success` | Success page |
| `/orders` | Orders page |

## How It Works

1. The React frontend renders the pages and handles navigation with React Router DOM.
2. Axios sends HTTP requests to the JSON Server API running on port `3000`.
3. JSON Server reads and updates the local `db.json` file.
4. React Toastify displays feedback for actions such as registration and login.
5. The development server and mock API must both be running for API-dependent features to work.

## Important Notes

- This project uses **JSON Server as a mock backend**. It is intended for learning and demonstration, not production deployment.
- JSON Server stores data in `db.json`; it does not provide production-grade authentication, authorization, or secure password storage.
- Do not use real passwords or sensitive personal information in this project.
- Before sharing the repository publicly, review `db.json` and remove any real email addresses, phone numbers, passwords, customer details, or order records. Replace them with fictional sample data.
- Product images are loaded from external image URLs, so an internet connection may be needed to display them.
- The frontend currently expects the mock API at `http://localhost:3000`.

## Future Improvements

- Replace JSON Server with a dedicated backend and database.
- Implement secure authentication and password hashing.
- Add cart and checkout validation.
- Add product sorting, pagination, and improved filtering.
- Add automated frontend and API tests.
- Add responsive UI screenshots to this documentation.

## Author

**Hamsa**

- GitHub: [Hamsa-C](https://github.com/Hamsa-C)
- Project repository: [E-Commerce Web Application](https://github.com/Hamsa-C/Ecommerce)
