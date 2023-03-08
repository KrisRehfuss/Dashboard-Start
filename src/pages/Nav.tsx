function Nav() {
  return (
    <div>
      <div className=" border-b-2 border-b-sky-400 Nav">
        {/* <div className="w-48 mx-40"></div> */}
        <div className="NavItem text-lime-500 p-2 BoxFit">
          <li className="">Home</li>
        </div>
        <div className="NavItem text-blue-500 p-2 BoxFit">
          <li className="">Saved</li>
        </div>
        <div className="NavItem text-amber-500 p-2 BoxFit">
          <li className="">Prompts</li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
