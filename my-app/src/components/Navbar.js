import React from 'react';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">MobiLicis Customer Info. Table</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Choose a Filter
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/condition1">1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</a></li>
            <li><a className="dropdown-item" href="/condition2">2. Male Users which have phone price greater than 10,000.</a></li>
            <li><a className="dropdown-item" href="/condition3">3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</a></li>
            <li><a className="dropdown-item" href="/condition4">4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</a></li>
            <li><a className="dropdown-item" href="/condition5">5. Show the data of top 10 cities which have the highest number of users and their average income.</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}
