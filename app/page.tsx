"use client";

import { useState } from "react";
import {
  BoltIcon,
  ShieldCheckIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [claims, setClaims] = useState(0);

  const handleClaim = () => {
    setClaims(claims + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">🚀 VeriShield AI</h1>
          <p className="text-xl">AI-Powered Parametric Insurance</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="container mx-auto flex justify-center gap-6 py-3">
          <a href="#features" className="hover:text-blue-600 font-semibold">Features</a>
          <a href="#architecture" className="hover:text-blue-600 font-semibold">Architecture</a>
          <a href="#demo" className="hover:text-blue-600 font-semibold">Demo Video</a>
        </div>
      </nav>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-10 text-center">
        <p className="text-lg max-w-2xl mx-auto">
          VeriShield AI detects fraud in real-time for delivery partners using AI-powered behavioral,
          sensor, and network intelligence. Protecting honest gig workers while preventing large-scale GPS spoofing attacks.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <BoltIcon className="h-10 w-10 mx-auto text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Instant Payouts</h3>
              <p>Provides instant payouts during verified risk events.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <ShieldCheckIcon className="h-10 w-10 mx-auto text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Fraud Detection</h3>
              <p>Multi-layer AI system detects anomalies and coordinated fraud rings.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <MapPinIcon className="h-10 w-10 mx-auto text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">GPS Spoofing Prevention</h3>
              <p>Validates real-world signals beyond GPS for accurate claims.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <UserGroupIcon className="h-10 w-10 mx-auto text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Fair UX</h3>
              <p>Ensures genuine users are treated fairly and claims are validated smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">System Architecture</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <ol className="list-decimal list-inside text-left">
            <li>Client collects GPS, sensor, and device data.</li>
            <li>Backend processes data & runs ML models.</li>
            <li>AI engine detects anomalies & fraud rings.</li>
            <li>Risk score determines payout workflow.</li>
          </ol>
        </div>
      </section>

      {/* Simulate Claim */}
      <section className="container mx-auto px-4 py-10 text-center bg-white shadow rounded-lg mb-10">
        <h2 className="text-3xl font-semibold mb-4">Simulate a Claim</h2>
        <p className="mb-4">Click the button to see how VeriShield AI processes claims in real-time.</p>
        <button
          onClick={handleClaim}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Claim
        </button>
        <p className="mt-4 text-lg font-medium">Total Claims Processed: {claims}</p>
      </section>

      {/* Demo Video */}
      <section id="demo" className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Demo Video</h2>
          <a
            href="https://youtu.be/pPxncXBel6Y?si=CqBFvwKiJUK_nH-C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Watch Here
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 VeriShield AI. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="mailto:contact@verishield.ai" className="hover:underline">Contact</a>
            <a href="https://github.com/Vikram13062006/DevTrailsHackthon" className="hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}