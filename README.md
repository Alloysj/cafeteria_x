# cafeteria_x


A distributed microservices-based backend and frontend application for managing the operations of a modern cafeteria. Built with scalability, modularity, and message-driven communication in mind using RabbitMQ, NestJS, and Vite.

---

## Project Purpose

The **cafeteria_x** is a sample project designed to demonstrate the implementation of microservice architecture in a real-world scenario. It handles core cafeteria operations such as:

* Order placement and tracking
* Kitchen task management
* Billing and payment processing
* Notifications (email/SMS)
* User authentication

This project is intended to showcase how services can operate independently yet communicate efficiently via a message broker (RabbitMQ).

---

## Architecture Overview

The system follows a **microservices architecture**, where each domain (ordering, billing, etc.) is a separate service that communicates via **RabbitMQ**.

### Microservices:

| Service                | Description                              | Technology Stack        |
| ---------------------- | ---------------------------------------- | ----------------------- |
| `order-service`        | Handles order intake and status          | NestJS, PostgreSQL      |
| `kitchen-service`      | Manages preparation of orders            | NestJS, MongoDB         |
| `billing-service`      | Manages payments, invoices               | NestJS, PostgreSQL      |
| `notification-service` | Sends emails/SMS for updates             | NestJS, RabbitMQ        |
| `auth-service`         | Manages user registration and login      | NestJS, PostgreSQL      |
| `frontend`             | Web frontend for interacting with system | Vite, React, TypeScript |

---

## ⚙Tech Stack

### Frontend

* [Vite](https://vitejs.dev/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)

### Backend

* [NestJS](https://nestjs.com/) (per microservice)
* [RabbitMQ](https://www.rabbitmq.com/) for inter-service communication
* [PostgreSQL](https://www.postgresql.org/)
* [MongoDB](https://www.mongodb.com/) ( for kitchen or event logs)

### Dev Tools

* Docker & Docker Compose
* Prisma or TypeORM (per service)
* ESLint, Prettier, Husky for linting & pre-commit hooks
* Swagger (API documentation)

---

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Alloysj/cafeteria_x.git
cd cafeteria_x
```

### 2. Start All Services via Docker

```bash
docker-compose up --build
```

This will start:

* RabbitMQ (UI on [http://localhost:15672](http://localhost:15672))
* PostgreSQL
* MongoDB
* All microservices (in progress)
* Frontend (in progress)

### 3. Access the Frontend

Once it's built:

```
http://localhost:5173
```

---

## Planned Features

* Place and track orders
* Assign orders to kitchen staff
* Process payments
* Real-time notifications
* JWT-based authentication
* Role-based access (admin, cashier, cook)
* Admin dashboard (sales, orders, etc.)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change or improve.

---

## License

MIT License. See `LICENSE` file for details.

---

