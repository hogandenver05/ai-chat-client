# AI Chat Client

## Overview

**AI Chat Client** is an individual project prototype inspired by ChatGPT.
The application provides a chat-style interface where users can send messages to an AI model and receive generated responses. It supports multiple chat sessions and maintains conversation history within the client.

The project demonstrates frontend architecture, state management, and AI API integration using modern web technologies.

---

## Problem Domain and Motivation

Conversational AI applications require careful handling of user input, session state, and message history to create a natural chat experience. This project explores how a client-side application can manage conversations and sessions without relying on a backend server.

The motivation for this project is to understand how chat-based systems are structured, how conversational data is modeled, and how frontend applications interact with large language model APIs.

---

## Features and Requirements

### Core Features

* Chat-based user interface
* AI-generated responses
* Multiple chat sessions
* Multiple conversations per session
* Conversation history persistence
* Client-side session tracking

### Key Requirements

* React-based frontend
* Redux for state management
* Direct integration with an AI API
* Browser local storage for session persistence

---

## Data Model and Architecture

The application follows a client-only architecture.

* The frontend is built with React.
* Application state is managed using Redux.
* Sessions and conversations are stored in client state.
* The current session ID is persisted using browser local storage.
* AI requests are sent directly from the client to the API.

### Data Relationships

* A **session** contains multiple conversations.
* A **conversation** contains a sequence of messages.
* Each **message** represents either a user input or an AI response.

---

## Tests

This prototype focuses primarily on functionality and architecture.
Quality is ensured through:

* Manual testing of user flows
* Validation of state updates through Redux DevTools
* Console logging during development

Formal automated tests will be implemented.

---

## Team Members and Roles

* **Denver Hogan**, *Individual Contributor*

  * Frontend development
  * State management
  * AI API integration
  * Architecture design

---

## Links

* Source Code: [here](https://github.com/hogandenver05/ai-chat-client)
* Documentation: [here](https://github.com/hogandenver05/ai-chat-client/blob/master/README.md)
* Canvas Project Page: [here](https://nku.instructure.com/courses/87378/pages/individual-project-denver-hogan)
* Canvas Progress Page: [here](https://nku.instructure.com/courses/87378/pages/individual-progress-denver-hogan)
