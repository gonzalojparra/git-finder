import ThemeSwitch from "@/components/ThemeSwitch";
import Home from "@/components/layouts/Home";

export default function App() {
  return (
    <div className='flex flex-col min-h-screen py-5 px-4'>
      <div className='flex flex-col items-end'>
        <ThemeSwitch />
      </div>
      <Home />
      <footer className='flex items-center justify-center mt-auto py-2'>
        With ♥️ by Gonza
      </footer>
    </div>
  )
}
