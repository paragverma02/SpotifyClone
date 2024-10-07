import React from "react";
import { Search } from "@material-ui/icons";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {
    const [{ user }, dispatch ] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header_left">
                <Search />
                <input placeholder="Search for artists, Songs or Albums" type="text" />
            </div>
            <div className="header-right">
                <Avatar src={user?.image[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
      );
}

export default Header;