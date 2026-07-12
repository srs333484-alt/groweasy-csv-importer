# 🚀 GrowEasy CSV Importer

An intelligent, AI-powered CSV import tool that seamlessly extracts and maps CRM lead information from any CSV format into GrowEasy's CRM structure.

---

## ✨ Live Demo

- **Frontend:** [groweasy-csv-importer-dv1v.vercel.app](https://groweasy-csv-importer-dv1v.vercel.app/)
- **Backend API:** [groweasy-csv-importer-1h3a.onrender.com](https://groweasy-csv-importer-1h3a.onrender.com)
- **GitHub:** [srs333484-alt/groweasy-csv-importer](https://github.com/srs333484-alt/groweasy-csv-importer)

---

## 📊 Features

| Feature | Description |
|---------|-------------|
| 📁 **CSV Upload** | Drag & drop or browse to upload CSV files |
| 📋 **Data Preview** | Responsive table with sticky headers and scroll support |
| 🤖 **AI Extraction** | OpenAI-powered field mapping for CRM data |
| 📦 **Batch Processing** | Efficiently processes large CSV files in batches |
| 📈 **Results Dashboard** | Track imported vs skipped records |
| 🔒 **Secure** | Environment variables for API key management |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14, React 18, Axios |
| **Backend** | Node.js, Express, Multer |
| **AI** | OpenAI GPT-3.5 |
| **Hosting** | Vercel (Frontend), Render (Backend) |
| **Version Control** | Git, GitHub |

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/srs333484-alt/groweasy-csv-importer.git
cd groweasy-csv-importer

2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your OPENAI_API_KEY in .env file
npm run dev
```

3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

4. Open Application

Visit http://localhost:3001

---

🔑 Environment Variables

Create .env file in backend folder:

```
PORT=5000
OPENAI_API_KEY=your_api_key_here
```

---

📡 API Endpoints

Method Endpoint Description
POST /api/csv/upload Upload CSV file
POST /api/csv/process Process records with AI
GET /health Health check

---

📁 Project Structure

```
groweasy-csv-importer/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── csvController.js
│   │   ├── services/
│   │   │   ├── aiService.js
│   │   │   └── csvParser.js
│   │   ├── routes/
│   │   │   └── csvRoutes.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── pages/
│   │   └── index.js
│   ├── components/
│   │   ├── CSVUploader.js
│   │   ├── CSVPreview.js
│   │   ├── ResultTable.js
│   │   └── LoadingIndicator.js
│   ├── styles/
│   │   └── globals.css
│   ├── package.json
│   └── next.config.js
└── README.md
```

---

🧪 Testing

1. Upload a CSV file (sample format below)
2. Preview the data
3. Click Confirm Import
4. View the imported CRM records

Sample CSV

```csv
name,email,mobile,company,city
John Doe,john@example.com,9876543210,GrowEasy,Mumbai
Sarah Smith,sarah@example.com,9876543211,Tech Corp,Bangalore
```

---

🌐 Deployment

Backend (Render)

· Root Directory: backend
· Build Command: npm install
· Start Command: npm start

Frontend (Vercel)

· Root Directory: frontend
· Build Command: npm run build

---

📝 Submission

Submitted for GrowEasy Software Developer Intern Assignment.

---

👤 Author

Saraswathi

· GitHub: srs333484-alt

