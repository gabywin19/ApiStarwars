import React from 'react'

/**
 * React Router
 */
import { Routes,Route,} from "react-router-dom";

/**
 * Routes
 */
import Home from './routes/home';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </div>
  )
}

/**
 * Root
 * People
 * Films
 * Starships
 * Vehicles
 * Species
 * Planets
 */
