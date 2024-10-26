# Sphere Animation with Three.js

## 📖 Overview

This project demonstrates a 3D animated sphere using **Three.js** for rendering, **GSAP** for smooth animations, and **Vite** as the development server. The sphere responds to mouse interactions, changing its color dynamically based on cursor position.

## 🛠️ Tech Stack

- **Three.js**: A JavaScript library for creating 3D graphics in the browser.
- **GSAP**: A powerful JavaScript library for building high-performance animations.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A modern frontend build tool for fast development.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed. You can check if Node is installed by running:

```
node -v
```

## Installation

### 1. Clone git repository:
```
git clone https://github.com/Hack0333/threejs-sphere.git
```

### 2. Install dependencies:
```
npm install
```
## Running the Development Server
```
npm run dev
```
Open your browser and navigate to http://localhost:5173/ to view the application.

## 🧑‍💻 Usage

### Features

- **Interactive Sphere**: Click and drag to change the sphere's color dynamically based on cursor position.
- **Auto Rotation**: The sphere rotates automatically using OrbitControls.
- **Smooth Animations**: GSAP handles transitions for the sphere’s scale and visibility of text elements.

### Controls

- **Mouse Interaction**: While holding the mouse down, move the cursor to change the sphere's color.

## 📦 Scripts

| Command               | Description                                     |
|-----------------------|-------------------------------------------------|
| `npm run dev`         | Start the development server with Vite.        |
| `npm run build`       | Build the project for production.               |
| `npm run preview`     | Preview the production build.                   |
| `npm run build-css`   | Compile Tailwind CSS.                           |
| `npm run watch`       | Watch and rebuild CSS on changes.               |
