import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const [notes, setNotes] = React.useState([]);
  const [searchField, setSearchField] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const Scroll = (notes) => {
    return (
      <div
        style={{
          overflowY: "scroll",
          height: "70px",
          paddingLeft: "35px",
          color: "gray",

          border: "0px solid transparent",
          borderRadius: "5px",

          
          fontSize: "40px",
        }}
      >
        {notes.children}
      </div>
    );
  };

  const SearchHandler = () => {
    return (
      <>
        <section className="fullview">
          <div>
            {notes
              .filter((note) => note.firstName === searchField)
              .map((card, index) => (
                <Scroll>
                  <Link
                    underline="none"
                    variant="body2"
                    color="default"
                    size="small"
                    to={`/card/${card.firstName}`}
                  >
                    {card.firstName}
                  </Link>
                </Scroll>
              ))}
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="center">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Cards"
                onChange={handleChange}
              />
              {SearchHandler()}
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
