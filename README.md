# 🤖 TaskFlow AI

TaskFlow AI is a full-stack task management application built with Next.js, MongoDB, and the Anthropic AI SDK. It allows users to manage tasks and interact with an AI assistant for task-related help.

## 🚀 Features

* Create new tasks
* View all tasks
* Update task status
* Delete tasks
* MongoDB database integration
* AI Assistant powered by Anthropic
* Real user input → LLM → AI response displayed in the app
* Secure API key management using environment variables

## 🛠️ Tech Stack

* Next.js
* React
* TypeScript
* MongoDB
* Mongoose
* Anthropic SDK

## 📂 Project Structure

* Home Page
* Dashboard
* AI Chat API (`/api/chat`)
* Task API (`/api/tasks`)

## ⚙️ Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```
http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env.local` file and add:

```
MONGODB_URI=your_mongodb_connection_string
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## 🤖 AI Feature

The application includes a working AI assistant that:

1. Accepts a user's prompt.
2. Sends it to the Anthropic API using the official SDK.
3. Receives a response from the language model.
4. Displays the AI-generated response in the application.

## 📄 License

This project was created for learning purposes as part of the Day 4 AI Feature build.
