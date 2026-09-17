// import './App.css'
import { Sidebar } from '@/components/sidebar/Sidebar';
import { Dashboard } from '@/components/dashboard/Dashboard';



function App() {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default App
