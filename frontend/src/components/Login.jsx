import React from 'react'

function Login() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <form action="">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-primary">Quick Chat</h1>
              <h2 className="text-xl font-semibold text-base-content mt-2">Welcome Back</h2>
              <p className="text-base-content/70 text-sm mt-1">Sign in to your account</p>
            </div>

            {/* Email */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 validator focus-within:input-primary">
                <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input 
                  type="email" 
                  placeholder="mail@example.com" 
                  required 
                  className="grow"
                />
              </label>
              <label className="label">
                <span className="label-text-alt text-error validator-hint hidden">
                  Enter valid email address
                </span>
              </label>
            </div>

            {/* Password */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 validator focus-within:input-primary">
                <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="grow"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary btn-block">
                <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10,17 15,12 10,7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
                Sign In
              </button>
            </div>

            {/* Signup Link */}
            <div className="divider text-base-content/50">OR</div>
            <div className="text-center">
              <p className="text-sm text-base-content/70">
                Don't have an account?{' '}
                <a href="#" className="link link-primary font-medium">
                  Create one here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
