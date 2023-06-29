
const Footer = () => {
  return (
    <footer className=" text-center bg-violet-900 container mx-auto p-10">
    <p className="text-sm capitalize text-teal-500/70 font-medium tracking-widest ">&copy;{new Date().getFullYear()} Todo app. All rights reserved.</p>
  </footer>
  )
}

export default Footer