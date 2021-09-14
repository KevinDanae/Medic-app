import React from "react";

const Navbar = () => {
  return (
    <div class="navbar mb-2 shadow-md ">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold"><i class="fas fa-user-md pr-3" ></i>Medic App</span>
      </div>
      <div class="flex-none px-2 lg:flex md:flex sm:flex">
        <button class="btn btn-square px-8 btn-ghost mr-4">Home</button>
        <button className="btn btn-primary mr-4">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
