Unity Lens: The Multimodal Sensory Bridge
Unity Lens is an AI-powered assistive ecosystem designed for individuals with Dual Sensory (Deafblind) and Motor Impairments. By converting the visual and auditory world into Spatial Haptics and translating Micro-Gestures into speech, Unity Lens creates a "closed-loop" communication system that requires zero physical touch.

🚀 The Vision
Traditional accessibility tools focus on one disability at a time. Unity Lens bridges the gap for users who cannot see, hear, talk, or use their hands. It uses the phone's camera as a "Digital Eye" and the vibration motor as a "Tactile Tongue."

🛠 Tech Stack (The "Split Architecture")
Frontend: React Native (Expo) + NativeWind (Tailwind CSS) + Expo-Haptics.

Orchestration Layer: Node.js + Express (handling real-time WebSocket events).

AI Microservice: Python (FastAPI) + OpenCV + MediaPipe (Blink/Gesture detection).

Intelligence: Gemini 3 Pro/Flash (Environmental Description & Intent Prediction).

Database: MongoDB Atlas (User Personalization & Contextual Phrases).

✨ Key Features
Zero-Touch Navigation: Navigate the entire app using only Eye-Blinks (Front Camera).

Spatial Haptic Mapping: Real-time environmental awareness via vibration pulses.

Sensory Substitution: * Visual → Haptic: Obstacle detection translated to vibration patterns.

Audio → Haptic: Speech-to-vibration transcription for the hearing impaired.

Predictive Speech: AI-driven intent recognition that speaks for the user based on context and micro-gestures.

📂 Project Structure
Plaintext
unity-lens/
├── mobile/             # React Native Expo App
├── backend/            # Node.js Express Server (Orchestrator)
├── ai-service/         # Python FastAPI (Computer Vision & ML)
└── docs/               # Architecture & API Documentation
⚙️ Getting Started
Prerequisites
Node.js (v20+)

Python (v3.10+)

Expo Go app on your physical device (to test haptics)

Installation
Clone the Repo:

Bash
git clone https://github.com/yourteam/unity-lens.git
cd unity-lens
Setup Python AI Service:

Bash
cd ai-service
pip install -r requirements.txt
python main.py
Setup Node.js Backend:

Bash
cd backend
npm install
npm start
Launch Mobile App:

Bash
cd mobile
npm install
npx expo start
🤝 The Team: [Your Team Name Here]
Developing for a more inclusive future at Midlands State University.
