import React from 'react'

export default function LoginPage() {
    return (
        <div className='bg-green-900 h-screen flex justify-center items-center'>
            <div className="login-form shadow rounded-xl bg-green-50 w-1/4 h-1/2 flex justify-center items-center flex-col gap-4">
                <h1 className='font-bold text-gray-800 text-2xl mb-4'>Login Page</h1>
                <input className='p-2 border-2 border-green-200 rounded' type="text" placeholder='username' />
                <input className='p-2 border-2 border-green-200 rounded' type="text" placeholder='password' />
                <button className='bg-green-700 mt-4 px-8 py-2 text-white font-bold rounded hover:bg-green-900 transition duration-300'>Login</button>
            </div>
        </div>
    )
}
