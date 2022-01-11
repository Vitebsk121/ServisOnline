import "./Header.scss";

import React, {useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type HeaderProps = {
  pageTitle: string
  storeTitle: string[]
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [store, setStore] = useState(props.storeTitle[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setStore(event.target.value);
  };
  return (
    <header className="header">
      <div className="page__info">
        <h3 className="page__title">{props.pageTitle}</h3>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">СТО</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={store}
              label="СТО"
              onChange={handleChange}
            >
              {props.storeTitle.map((store) => (
                <MenuItem key={store} value={store}>{store}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    </header>
  );
};

export default Header;
