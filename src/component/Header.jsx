const Header = (title) => {
  return (
    <>
      <div className="bg-slate-700 shadow-md shadow-blue-100">
        <div className="container mx-auto flex justify-between items-center text-slate-100 ">
          <div>
            <a href="/">
              <h2 className="font-bold p-3">{title.name}</h2>
            </a>
          </div>

          <div>
            <ul className="flex justify-between items-center gap-8 py-2">
              <li>
                <a href="/" className="hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400">
                  SignUp
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400">
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
