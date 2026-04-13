# SSO-Mock-Dashboard

A React-based simulation tool for visualizing Single Sign-On (SSO) user provisioning workflows over time.

It is designed for testing, demonstration, and exploration of time-based identity state changes without relying on real provisioning delays.

---

## What this project is for

This tool helps simulate how users move through SSO provisioning states over a 24-hour window. It allows you to:

- Test provisioning logic without waiting for real time delays  
- Visualize user state transitions over accelerated time  
- Explore edge cases in time-dependent identity flows  
- Demonstrate onboarding and provisioning behavior in a controlled environment  

---

## Core Concept

SSO provisioning is typically asynchronous and time-based. This project models that delay by introducing a **simulated clock**, where time can be fast-forwarded to observe state transitions instantly.

Instead of waiting 24 hours, you can compress that window into seconds.

---

## Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React 18 |
| State Management | React Hooks |
| Styling | CSS (Flexbox-based layout) |
| Testing | Jest + React Testing Library |
| Tooling | Create React App |

---

## Architecture Overview

### 1. Component Structure

The application is split into:

- **App.js** – central state holder and view controller  
- **View components** – user-facing screens (User, Admin, Instructions)  
- **Form components** – input handling (Add User, Time Controls)  
- **Utilities** – provisioning logic and time-based checks  

Each component is kept focused on a single responsibility.

---

### 2. State Flow

State is managed in a single direction:

- `App.js` holds global state  
- Data is passed down via props  
- Updates are triggered via callbacks  

This keeps state transitions predictable and easy to trace.

---

### 3. Simulated Time Engine

A custom time system replaces real-world delays.

- Maintains a `simulatedTime` value  
- Advances via interval or manual fast-forward  
- Triggers provisioning logic based on time thresholds  

This allows:
- instant replay of 24-hour windows  
- deterministic testing of time-based rules  

---

### 4. User Provisioning Model

Each user is represented as:

```js
{
  email,
  invited_at,
  requested,
  provisioned
}

## Features

### User Lifecycle Simulation
Create users and observe how their provisioning state changes over simulated time.

### Time Controls
Fast-forward or manually adjust simulated time to test different system states.

### Multi-View Interface
- User view: individual provisioning status  
- Admin view: overview of all users  
- Instructions view: system explanation and usage  

---

## Testing

Configured with:

- Jest  
- React Testing Library  

Tests focus on:
- user interactions  
- state transitions  
- provisioning logic correctness  

---

## Running the Project

### Install dependencies
```bash
npm install

### Start Development Server
```bash
npm start

### Run tests
```bash
npm test

### Build for production
```bash
npm run build


## Current Limitations
This is a frontend-only simulation. It does not include:
- persistent storage
- backend provisioning system
- real authentication providers
- event retries or failure modeling


## Potential Extensions
If expanded further, this system could support:
- persistent user state (database-backed)
- event-driven provisioning pipeline
- failure and retry simulation
- audit logs of state transitions
- integration with real identity providers (e.g. SAML/OIDC systems like Okta or Auth0)


## Summary
This project simulates time-based user provisioning flows in a controlled environment. It prioritizes predictability, inspectability, and fast iteration over production complexity.
