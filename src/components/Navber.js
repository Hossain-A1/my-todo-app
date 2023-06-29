import {DiReact} from "react-icons/di"
const Navber = () => {
  return (
    <nav className=" bg-violet-900 container mx-auto p-10 flex gap-3 items-center border-b border-violet-500 border-dashed">
      <span className="text-4xl text-teal-500 font-bold"><DiReact/></span>
      <h2 className="text-2xl uppercase text-teal-500 font-bold tracking-widest">React todo app</h2>
    </nav>
  )
}

export default Navber