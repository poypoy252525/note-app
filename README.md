# Note Application

A full-stack web application powered by **Vue 3 + Vite** on the frontend and **Django REST Framework** on the backend.

---

## 📦 Tech Stack

- **Frontend:** Vue 3, Vite, Tailwind CSS
- **Backend:** Django, Django REST Framework
- **Database:** PostgreSQL

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 🔧 Requirements

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Python](https://www.python.org/) (v3.8+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [pip](https://pip.pypa.io/en/stable/) (comes with Python)

---

## 1️⃣ Clone the Repository

```sh
git clone https://github.com/poypoy252525/note-app.git
cd note-app
```

---

## 2️⃣ Backend Setup

```sh
cd backend
python -m venv venv
venv/Scripts/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Edit .env as needed
```
Make sure that you set the right value of .env base on your PostgreSQL name and user

```sh
python manage.py migrate
python manage.py runserver
```

- The backend will run at `http://localhost:8000/`.

---

## 3️⃣ Frontend Setup

```sh
cd frontend
npm install
cp .env.example .env      # Edit .env as needed
npm run dev
```

- The frontend will run at `http://localhost:5173/`.

---

## 4️⃣ Usage

- Open [http://localhost:5173/](http://localhost:5173/) in your browser.
- Make sure the backend is running for API requests.

---

## 🧪 Testing

### Frontend Unit Tests

```sh
npm run test:unit
```

### Frontend E2E Tests

```sh
npx playwright install
npm run test:e2e
```

### Lint Frontend

```sh
npm run lint
```

---

## 🗄️ Setting Up PostgreSQL Locally

The backend uses PostgreSQL as its database. Follow these steps to set up PostgreSQL for local development:

### 1. Install PostgreSQL

- **Windows/Mac:** Download and install from [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- **Linux (Debian/Ubuntu):**
  ```sh
  sudo apt update
  sudo apt install postgresql postgresql-contrib
  ```

### 2. Create a Database and User

Open your terminal and run:

```sh
# Access PostgreSQL prompt
psql -U postgres

# In the prompt, run:
CREATE DATABASE noteapp;
CREATE USER noteuser WITH PASSWORD 'yourpassword';
ALTER ROLE noteuser SET client_encoding TO 'utf8';
ALTER ROLE noteuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE noteuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE noteapp TO noteuser;
```

### 3. Configure Environment Variables

Edit [backend/.env](backend/.env) with your database credentials:

```
NAME=noteapp
USER=noteuser
PASSWORD=yourpassword
HOST=localhost
PORT=5432
```

### 4. Apply Migrations

```sh
cd backend
python manage.py migrate
```

---

**Tip:** If you change your database credentials, update both [backend/.env](backend/.env) and [backend/config/settings.py](backend/config/settings.py) accordingly.

---

## ⚙️ Configuration

- Frontend configuration: [frontend/.env](frontend/.env.example)
- Backend configuration: [backend/.env](backend/.env.example)

---

## 📚 Documentation

- [Vite Configuration Reference](https://vite.dev/config/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)

---

## 🤝 Contributing

Feel free to open issues or submit pull requests!

---

## 📄 License
