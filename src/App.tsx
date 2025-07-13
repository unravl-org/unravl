import './App.css'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100 dark:bg-gray-600">
      <AppRouter />
    </div>
    </>
  )
}

export default App
