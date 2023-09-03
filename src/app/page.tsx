import ThemeSwitch from "@/components/ThemeSwitch";
import Home from "@/components/layouts/Home";

export default function App() {
  return (
    <section className='flex flex-col gap-4 py-5 px-4'>
      <div className='flex flex-col items-end'>
        <ThemeSwitch />
      </div>
      <Home />
    </section>
  )
}
