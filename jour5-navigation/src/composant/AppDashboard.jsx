import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuDashboard from './MenuDashboard'

function AppDashboard() {
  return (
    <div className='container'>
        <section className='row'>
            <aside className='col-4'>
                <h2>barre laterale</h2>
                <MenuDashboard />
            </aside>
            <main className='col-8'>
                <Outlet />
            </main>
        </section>
    </div>
  )
}

export default AppDashboard