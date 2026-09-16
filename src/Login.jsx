import React, { useState } from 'react'
import { supabase } from './supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Email atau password salah.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eefaff] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-sky-100 p-8 shadow-sm">

        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-slate-800">
            Ovana Farm
          </h1>

          <p className="text-slate-500 mt-2">
            Dashboard Monitoring Kandang
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-sky-400"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-sky-400"
              placeholder="Password"
            />
          </div>

          {error && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl py-3 font-semibold"
          >
            {loading ? 'Masuk...' : 'Masuk Dashboard'}
          </button>

        </form>

      </div>
    </div>
  )
}
