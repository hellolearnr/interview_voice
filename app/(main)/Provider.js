import { SidebarProvider } from '@/components/ui/sidebar'
// import App from 'next/app'
import React from 'react'
import { AppSidebar } from './_components/AppSideBar'

function DashboardProvider ({children}){
  return (
    <SidebarProvider>
        <AppSidebar/>
    <div>
      {children}
    </div>
            </SidebarProvider>

  )
}

export default DashboardProvider
