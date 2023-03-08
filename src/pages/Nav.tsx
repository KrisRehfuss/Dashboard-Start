function Nav() {
  return (
    <div>
      <div className=" border-b-2 border-b-sky-300 Nav">
      {/* <div className="w-48 mx-40"></div> */}
        <div className="NavItem p-2 BoxFit">
          <li className="text-green-400">Home</li>
        </div>
        <div className="NavItem p-2 BoxFit">
          <li className="text-sky-400">Item</li>
        </div>
        <div className="NavItem p-2 BoxFit">
          <li className="text-amber-400">Item</li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
