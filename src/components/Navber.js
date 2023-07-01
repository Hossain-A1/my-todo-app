import {DiReact} from "react-icons/di"
const Navber = () => {
  return (
    <nav className=" bg-violet-900 container mx-auto p-10 flex gap-1 items-center border-b border-violet-500 border-dashed">
      <span className="lg:text-4xl text-lg text-teal-500 font-bold"><DiReact/></span>
      <h2 className="lg:text-2xl text-lg uppercase text-teal-500 font-bold tracking-widest">React todo app</h2>
    </nav>
  )
}

export default Navber