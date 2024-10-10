export default function Menu() {
  return (
    <>
    <p className="fixed top-4 w-full left-4 text-white z-50"> Sparky</p>
    <nav className="fixed top-4 right-4 text-white flex items-center gap-2 mr-4 z-50">
      <a href="#index">Index</a>
      <a href="#what">What he do</a>
      <button className="mx-2 text-sm bg-blue-600 rounded-lg text-white px-2 py-2 ">
         Try it !
        </button>
    </nav>
    </>
  )
}
