# 🔗 URL Shortener Frontend

A simple React application that lets users input long URLs and receive shortened versions. It also displays a list of the top 100 most accessed short URLs. This frontend connects to a Ruby on Rails API for all its backend logic and data storage.

---

## 🚀 Features

- Submit a long URL and receive a shortened version.
- Displays a list of the top 100 most accessed URLs.
- Click on a short URL to be redirected to the original.
- Input validation to ensure only valid URLs are accepted.

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- HTML5 + CSS3

---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- The [Rails API backend](https://github.com/LTVCoHiring/sddoe-fs-challenge) must be running locally (by default at `http://localhost:3000`).

### 2. Clone the Repository

```bash
git clone https://github.com/sddoe/short-url-client
cd short-url-client

### 3. Install Dependencies

```bash
npm install

### 4. Configure API Proxy

The frontend expects the Rails API to be running on http://localhost:3000. Make sure a proxy is already set up in package.json like this:

```bash
"proxy": "http://localhost:3000",

### 5. 🔗 Connecting to the Rails API

Ensure your Rails backend is running:

```bash
cd ../sddoe-fs-challenge
docker-compose up

By default, the backend will be available at http://localhost:3000.

### 6. 🧪 Running the App

Start the server:

```bash
npm start

Make sure it runs at http://localhost:3001 port. If it runs in a different port (eg. http://localhost:5173) you will have to add it manually in the cors.rb file in the Rails API app