# Zero-Trust Score Widget

## Overview
This project demonstrates a simple Zero-Trust Score widget built using **Vue.js 3.x** and **Vuetify**. The widget displays:
- The overall Zero-Trust Score.
- Individual security metrics (e.g., Firewall Score, Encryption Score, Access Control Score).
- A visual representation (progress bars) of each metric.
- The risk category based on the Zero-Trust Score.
- A color chart explaining what each bar color represents (e.g., red for low scores, green for high scores).

## How to Run the Project

Follow these steps to set up and run the project:

1. Navigate to the project folder:

cd Part3
cd score-widget

Install project dependencies:
npm install


Run the project:
npm run dev

Open your browser and navigate to the local development server:

http://localhost:5173/
Output
Once the project is running, you should see a widget that displays the Zero-Trust Score and individual metrics with color-coded progress bars. The color chart next to the progress bars explains the meaning of each color:

Red: Scores below 50.
Yellow: Scores between 50 and 70.
Green: Scores above 70.

See available Screenshots of what you should get

Technologies Used
Vue.js 3.x
Vuetify (UI framework)
Vite (for fast development)