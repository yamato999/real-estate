import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const activeButton = [
    "text-gray-400 border-b-transparent",
    "text-black border-b-red-500",
  ];
  const navigate = useNavigate();
  console.log(location.pathname);
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return activeButton[1];
    } else {
      return activeButton[0];
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMathRoute(
                "/"
              )}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMathRoute(
                "/offers"
              )}`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMathRoute(
                "/sign-in"
              )}`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
