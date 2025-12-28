# react-expense-tracker-main-project
# 💰 Smart Expense Tracker (React + Tailwind CSS)

A modern application built with **ReactJS** and styled using **Tailwind CSS** for tracking, analyzing, and visualizing personal daily expenses.
Data persistence is handled via the browser's `localStorage`.

## ✨ Key Features

* **Expense Management (CRUD):** Easily add, view, and delete expense entries.
* **Persistent Storage:** All expense data is saved locally using `localStorage`, ensuring data remains available between browser sessions.
* **Advanced Filtering & Sorting:** Filter expenses by category, date range, and sort by highest amount or most recent entry.
* **Category-wise Analysis:** Automatically calculates and displays total spending per category.
* **Data Visualization:** Uses Recharts to display a dynamic Pie Chart showing the distribution of spending across all categories.

## 🛠️ Tech Stack

| Category | Technology | Description |

| **Frontend** | **React.js** | Library for building the user interface. |
| **Styling** | **Tailwind CSS** | Utility-first framework for rapid and consistent styling. |
| **Charting** | **Recharts** | A composable charting library built on React components. |
| **State/Data** | **React Hooks** | Utilizes `useState`, `useEffect`, and `useMemo` for state management, persistence, and performance optimization.  |
| **Persistence**| **`localStorage`** | Browser API used to store and retrieve expense data locally. |



### Installation for run the project

Node.js (v14+) and npm (or yarn)


The application should open automatically in your browser at `http://localhost:3000`.

## ⚙️ Data Persistence Strategy

The application employs a simple and effective persistence strategy:

1.  **Centralized State:** The `useExpenses.js` hook manages the main `expenses` array using `useState`.
2.  **Loading:** On initialization, the hook attempts to load any existing data from `localStorage`.
3.  **Saving:** The React `useEffect` hook monitors the `expenses` state array. **Any time an expense is added or deleted**,
   the entire array is automatically serialized (using `JSON.stringify`) and saved back  into `localStorage`.
5.   This guarantees that user data is never lost between sessions.



The application is structured around clear, domain-specific components and utility files:
