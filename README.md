# 🚀 TaskFlow AI

A full-stack task management application built with Next.js, MongoDB, and Anthropic AI.

## 📌 Features

* Create tasks
* View all tasks
* Update task status
* Delete tasks
* MongoDB database integration
* Anthropic AI API integration using the official SDK
* Environment variables for secure API keys

## 🛠️ Tech Stack

* Next.js
* React
* TypeScript
* MongoDB
* Mongoose
* Anthropic SDK

## 📂 Core Screens

* Home Page
* Dashboard
* AI Chat API (`/api/chat`)

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env.local` file with:

```
MONGODB_URI=your_mongodb_connection_string
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## 📖 Day 3 Progress

This project now includes a real LLM integration using the Anthropic SDK. The API key is loaded from an environment variable, and the application includes an API route that makes live requests to an Anthropic model.
