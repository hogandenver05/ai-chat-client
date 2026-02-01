# AI Chat Client

## Overview

**AI Chat Client** is an individual project prototype inspired by ChatGPT.
The application provides a chat-style interface that allows users to interact with an AI model, manage conversations, and maintain chat sessions.

The project was developed incrementally. It originally used a React frontend with a Node.js Express backend for handling sessions and API requests. In the final stage, the Express server was removed, and the application now operates as a client-only solution with direct AI API communication.

This project focuses on understanding frontend architecture, state management, and conversational data modeling.

---

## Tech Stack

* React
* Redux
* Node.js
* AI API (client-side integration)
* Browser Local Storage

---

## Running the Application

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open a web browser and navigate to:

```
http://localhost:3000/
```

---

## Application Features

* Chat-based user interface
* Support for multiple chat sessions
* Multiple conversations per session
* Conversation history management
* AI-generated responses
* Redux-based state management
* Session persistence using local storage

---

## State Management

The application uses Redux to manage session state and conversations.
Each session contains one or more conversations, and each conversation consists of a user message and an AI response.

Local storage is used to persist the current session ID across page reloads.

