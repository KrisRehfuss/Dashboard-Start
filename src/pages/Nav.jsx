function Nav() {
  return (
    <div className="relative z-30">
      <div className="border-b-2 border-b-sky-400 Nav">
        {/* <div className="w-48 mx-40"></div> */}
        <div className="NavItem hover:text-green-500 text-white p-2 BoxFit">
          <li>Home</li>
        </div>
        <div className="NavItem hover:text-pink-500 text-white p-2 BoxFit">
          <li className=" ">
            <a href="https://beta.openai.com/account/api-keys">
              <span className="hover:text-violet-500">Get</span>{" "}
              <span className="hover:text-sky-500">Key</span>
            </a>
          </li>
        </div>
        {/* <div className="NavItem text-white p-2 BoxFit">
          <li>Prompts</li>
        </div> */}
      </div>
    </div>
  );
}

export default Nav;
