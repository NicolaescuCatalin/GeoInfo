import * as React from "react";

const Header = () => {
  return (
    <div>
      <div className="app-header">
        <div className="row">
          <div className="col-sm">
            <a href="/">App logo</a>
          </div>
          <div className="col-sm">&nbsp;</div>
          <div className="col-sm">&nbsp;</div>
          <div className="col-sm">
            <a href="/all-motherboards">All Motherboards</a>
          </div>
          <div className="col-sm">
            <a href="/add-motherboard">Add Motherboard</a>
          </div>
          <div className="col-sm">
            <a href="/add-cpu">Add CPU</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
