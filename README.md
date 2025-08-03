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
venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Edit .env as needed
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

## ⚙️ Configuration

- Frontend configuration: [frontend/.env](frontend/.env)
- Backend configuration: [backend/.env](backend/.env)

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
