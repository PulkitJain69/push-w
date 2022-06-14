import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <NavLogo>push.</NavLogo>
      {/* <NavButtons>
        <Button1>Login</Button1>
        <Button2>Start Free</Button2>
      </NavButtons> */}
    </Nav>
  );
}

const Nav = styled.div`
  top: 0;
  height: 10vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  z-index: 2;
`;

const NavLogo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #154f34;
`;

const NavLinks = styled.div``;

// const NavButtons = styled.div``;

// const Button1 = styled.button`
//   border: none;
//   cursor: pointer;
//   padding: 0.5rem 0.75rem;
//   font-size: 1rem;
//   font-family: "DM Sans";
//   font-style: normal;
//   font-weight: 500;
//   background-color: #fff;
//   text-decoration-line: underline;
// `;

// const Button2 = styled.button`
//   background-color: #154f34;
//   border: none;
//   color: #fff;
//   cursor: pointer;
//   padding: 0.5rem 0.75rem;
//   margin-left: 1rem;
//   font-size: 1rem;
//   font-family: "DM Sans";
//   font-style: normal;
//   font-weight: 500;
// `;

export default Navbar;
