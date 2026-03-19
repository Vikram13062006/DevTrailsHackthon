# 🚀 VeriShield AI
AI-powered parametric insurance with fraud-resistant payouts

---

## 🎯 Problem Statement
GPS-based insurance systems are vulnerable to spoofing attacks, leading to large-scale fraud and financial loss.

---

## 🧠 One-Line Pitch
We verify reality—not just location—using AI-powered behavioral, sensor, and network intelligence.

---

## 👤 User Persona

Our primary users are **delivery partners** working in high-risk environments.

### Key Characteristics:
- Depend on daily earnings
- Use mid-range smartphones
- Face poor network conditions
- Work in extreme weather

### Pain Points:
- Claim rejections due to poor connectivity
- No transparency in payouts
- Vulnerable to fraud detection errors

---

## 💡 What It Does

VeriShield AI is an **AI-powered parametric insurance platform** that:

- Provides instant payouts during verified risk events  
- Detects fraud using multi-layer validation  
- Prevents coordinated attacks like GPS spoofing  
- Ensures fair treatment of genuine users  

---

## 🏗️ How It Works

### 📱 Client Layer
- Collects GPS, sensor, and device data  
- Supports offline logging for poor connectivity  

---

### ☁️ Backend
- Processes incoming data streams  
- Performs feature engineering  
- Runs ML models to generate risk scores  

---

### 🤖 AI Engine

We use a multi-model approach:

- **Anomaly Detection Model (Isolation Forest / Autoencoder)**  
  Detects unusual behavior such as sudden stationary claims in high-risk zones  

- **Classification Model (Gradient Boosting / LightGBM)**  
  Predicts whether a claim is genuine or suspicious using:  
  - Sensor consistency  
  - Network signals  
  - Device integrity  
  - Environmental correlation  

- **Graph-Based Fraud Detection**  
  Identifies coordinated fraud rings by analyzing:  
  - Location clusters  
  - Synchronized claim timing  

---

## 🚨 Adversarial Defense & Anti-Spoofing Strategy

### 🧠 Core Idea
We validate **real-world signals**, not just GPS.

---

### 🔍 Spoofing Detection

We detect fraud using cross-validation across independent signals:

- **Sensor Fusion Check**  
  GPS movement must match accelerometer and gyroscope activity  

- **Spatial-Temporal Validation**  
  Detects impossible jumps and unrealistic movement patterns  

- **Environment Consistency Check**  
  Claimed conditions must match:  
  - Real-time weather data  
  - Network degradation (latency, packet loss)  

- **Device Integrity Check**  
  Detects:  
  - Mock location apps  
  - Developer mode  
  - Rooted/jailbroken devices  

---

### 📊 Data Used

- GPS + Cell tower + Wi-Fi fingerprinting  
- Accelerometer & Gyroscope data  
- Network latency, packet loss, IP signals  
- Weather APIs (real-time conditions)  
- Device trust & integrity signals  

---

### 👥 Fraud Ring Detection

We go beyond individual fraud detection by identifying coordinated attacks:

- Cluster users with:
  - Identical or nearby locations  
  - Similar timestamps  

- Detect abnormal group behavior using graph-based models  

- Assign **cluster-level risk scores** to prevent mass exploitation  

---

### ⚖️ UX Balance

#### Risk-Based System:
- Low Risk → Instant payout  
- Medium Risk → Soft verification  
- High Risk → Manual review  

---

#### Soft Verification:
- Selfie or short video submission  
- Environment capture (rain, surroundings)  
- Passive sensor validation  

---

#### Network Handling:
- Offline data logging  
- Delayed claim submission allowed  
- Timestamp-based validation  

---

## 🧮 Risk Score

$$
Risk = B + S + N + D + C
$$

Where:
- **B** = Behavioral anomaly  
- **S** = Sensor inconsistency  
- **N** = Network risk  
- **D** = Device integrity  
- **C** = Cluster fraud probability  

---

## 🚀 Why This Works

- Not dependent on GPS alone  
- Detects large-scale coordinated fraud attacks  
- Protects honest users with fair verification  
- Designed for real-world constraints (low-end devices, poor networks)  

---

## 🏁 Final Insight

Fraudsters can spoof location, but they cannot spoof behavior, environment, and device signals simultaneously at scale.

VeriShield AI leverages this asymmetry to prevent large-scale attacks while protecting genuine users.

---

## 🛠️ Built With

Next.js, Node.js, Python, TensorFlow, Scikit-learn, Firebase, AWS Lambda, MongoDB

---