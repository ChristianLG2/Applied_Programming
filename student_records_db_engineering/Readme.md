# 🧑‍🎓 Student Performance Tracking System – SQL + Streamlit

This project builds a relational database system for managing and visualizing **student academic performance**. The system tracks students, courses, attendance, grades, and assignments using **SQLite and SQL**, and presents insights through a **Streamlit-powered web dashboard**. It demonstrates skills in database engineering, data querying, and frontend analytics.


## 📁 Project Structure

student_performance_tracking/
├── db_seed.py # Full schema creation and data seeding script
├── analytics.py # Functions for querying and visualizing student performance
├── Web_app.py # Streamlit dashboard UI
├── university.db # Generated SQLite database
└── README.md # Project overview

## 🔧 Tools and Technologies

- **Database**: SQLite, SQL
- **Backend**: Python (sqlite3, pandas)
- **Visualization**: matplotlib, seaborn
- **Interface**: Streamlit
- **Schema Design**: Normalized relational model (13 tables)


## 🧱 Database Schema
- `student`: student demographics
- `faculty`: instructor info
- `course`: course details
- `section`: course section info
- `semester`: semester labels
- `enrollment`: student enrollment per section
- `grades`: letter grades per section
- `attendance`: attendance records by date
- `assignments`: assignment details per section
- `assignment_submissions`: student scores on assignments


## 🧪 Data Seeding

The `db_seed.py` script creates all tables and inserts structured seed data:
- 10 students
- 10 course sections
- 14 enrollments
- Grades, attendance logs, and submissions for 5+ students


## 📊 Visual Reports (via Streamlit)

- 📈 Grade distribution by letter grade
- 📊 Average scores per assignment
- 🕒 Attendance summary by status
- 🏆 Top performers by GPA
- 📘 Full performance reports per student


## 🚀 Getting Started

### 1. Install dependencies
```bash
pip install streamlit pandas matplotlib seaborn
python db_seed.py
streamlit run Web_app.py
```


