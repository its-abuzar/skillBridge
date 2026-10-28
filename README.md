<div align="center">

<img src="https://img.shields.io/badge/Status-Under%20Development-yellow?style=for-the-badge" />
<img src="https://img.shields.io/badge/Made%20for-Pakistan-009900?style=for-the-badge" />
<img src="https://img.shields.io/github/license/its-abuzar/CV-analyser?style=for-the-badge" />

# SkillBridge Pakistan
### *Your intelligent career co-pilot*

**Discover jobs. Tailor your CV. Ace the interview. Track every application.**  
Built for Pakistani students and professionals who are tired of doing all of this manually across a dozen different websites.

[✨ Features](#features) · [🚀 Getting Started](#getting-started) · [🗺️ Roadmap](#roadmap) · [🤝 Contributing](#contributing)

</div>

---

## The Problem

Finding a job in Pakistan means juggling Rozee.pk, Mustakbil, LinkedIn, HEC scholarship pages, and your university's notice board — all at once, all manually. Then you rewrite your CV for each application, prepare for interviews alone, and lose track of where you applied two weeks ago.

SkillBridge Pakistan puts all of that in one place and automates the parts that shouldn't require human effort.

---

## Features

### 📄 CV Intelligence Engine
Upload your CV once. The system reads it, structures it, and scores how completely it was parsed.

- Upload PDF, DOCX, or plain text — up to 10 MB
- OCR support for scanned and image-based CVs
- AI-powered extraction of name, skills, experience, education, certifications, and links
- Parse confidence score so you know exactly what was and wasn't read
- Edit and confirm extracted fields before they're used anywhere
- Multiple CV versions — keep originals safe while tailoring for specific roles

### 🔍 Opportunity Discovery *(coming soon)*
Stop searching. Let the system search for you.

- Auto-retrieves jobs from Rozee.pk, Mustakbil, LinkedIn, and company career pages
- Scholarship discovery from HEC, Aga Khan Foundation, and other verified sources
- Smart deduplication — same job posted on three platforms shows up once
- Saved search profiles — set your criteria once, get notified when new matches appear
- Eligibility filtering before ranking — ineligible opportunities never clutter your results
- Top-K ranking by match score against your CV

### ✍️ CV Tailoring and Cover Letters *(coming soon)*
Know exactly what's missing. Fix it in minutes.

- Keyword gap analysis — see every term the JD expects that your CV doesn't mention
- AI-assisted bullet rewriting — you review and accept each change before anything is applied
- Tailored CV export as PDF or DOCX, with your original always preserved
- Cover letter generation grounded in your actual CV, not generic templates
- Three register options: formal, conversational, concise

### 🎯 Interview Preparation *(coming soon)*
Practice for the actual job, not a generic question bank.

- Role-specific question generation from your CV and the target JD
- STAR story bank — record your stories once, mapped to competencies
- AI answer scoring with specific feedback per answer
- Full mock interview sessions with a session report at the end
- Technical topic drill for engineering roles

### 📊 Market Intelligence *(coming soon)*
Make decisions with real data.

- Salary benchmarks by role, seniority, and location in Pakistan
- Live in-demand skills tracker — what skills are employers actually asking for right now
- Career pathway explorer — what roles can you reach from where you are, and what's the shortest path to where you want to be
- Company watchlist — follow employers you care about

### 📋 Application Tracker *(coming soon)*
Never lose track of where you applied.

- Kanban pipeline: Saved → Applied → Screening → Interview → Offer
- Deadline management — always know what's due next
- Follow-up reminders with AI-drafted follow-up messages
- Conversion stats so you know where your pipeline is weakest

---

## Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| Backend | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) |
| Document Parsing | ![Docling](https://img.shields.io/badge/Docling-OCR%20Pipeline-blueviolet?style=flat) ![RapidOCR](https://img.shields.io/badge/RapidOCR-Torch-orange?style=flat) |
| AI / LLM | ![OmniRoute](https://img.shields.io/badge/OmniRoute-LLM%20Gateway-blue?style=flat) |
| Frontend | ![JavaScript](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=flat&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| Storage | In-memory (SQLite / PostgreSQL migration planned) |

</div>

---

## Getting Started

### Prerequisites
- Python 3.10+
- Node.js (optional, for tooling only)
- An OmniRoute API key

### 1. Clone the repo
```bash
git clone https://github.com/its-abuzar/CV-analyser.git
cd CV-analyser
```

### 2. Set up the backend
```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
```

### 3. Configure environment
Create a `.env` file inside `backend/`:
```env
OMNIROUTE_API_KEY=your_key_here
```

### 4. Run the backend
```bash
uvicorn app.main:app --reload
```
API will be available at `http://127.0.0.1:8000`  
Interactive docs at `http://127.0.0.1:8000/docs`

### 5. Run the frontend
```bash
cd frontend
python -m http.server 5500
```
Open `http://127.0.0.1:5500` in your browser.

> ⚠️ **Do not use VS Code Live Server** — it auto-reloads during long API requests and breaks the upload flow.

---

## Project Structure

```
CV-analyser/
├── backend/
│   └── app/
│       ├── api/            # Route handlers
│       ├── controllers/    # Orchestration layer
│       ├── services/       # Business logic
│       ├── models/         # Data models
│       ├── matching/       # Scoring engine
│       ├── pipeline/       # CV and JD parsing
│       └── storage.py      # In-memory store
└── frontend/
    └── src/
        ├── pages/          # 51 page modules
        ├── services/       # API client and config
        └── ui/             # Component primitives
```

---

## Roadmap

- [x] CV upload and AI-powered parsing
- [x] Job description ingestion and parsing
- [x] CV vs JD matching engine (5 metrics)
- [x] Parse confidence scoring
- [x] Multiple CV management
- [x] Core frontend pages (Intake, Job Description, Workspace)
- [ ] Multi-source job and scholarship discovery
- [ ] Smart deduplication and saved search alerts
- [ ] CV tailoring and keyword gap analysis
- [ ] Cover letter generation
- [ ] Interview preparation module
- [ ] Mock interview sessions
- [ ] Salary benchmarking and market intelligence
- [ ] Career pathway graph (BFS + Dijkstra)
- [ ] Application tracker with deadline management
- [ ] Persistent database (SQLite / PostgreSQL)
- [ ] User authentication
- [ ] Deployment

---

## SDG Alignment

| Goal | How |
|---|---|
| **SDG 4** — Quality Education | Centralised scholarship discovery removes information barriers for students who lack access to professional networks |
| **SDG 8** — Decent Work and Economic Growth | Reducing job-search friction helps more Pakistanis enter the formal labour market |
| **SDG 10** — Reduced Inequalities | First-generation students get the same opportunity intelligence as well-connected candidates |

---

## Contributing

This project is under active development. If you want to contribute:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ in Pakistan by [Abuzar](https://github.com/its-abuzar)

*If this helped you land a job, give it a ⭐*

</div>
