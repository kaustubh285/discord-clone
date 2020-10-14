import React from "react";
import "./css/sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./components/SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);

  const UserSignOut = () => {
    console.log("trying to sign out");
    auth.signOut();
  };
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>OneLastTime</h3>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className='sidebar__addChannel' />
        </div>
        <div className='sidebar__channelList'>
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className='sidebar__voice'>
        <SignalCellularAltIcon
          className='sidebar__voiceIcon'
          fontSize='large'
        />
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceCallIcons'>
          <InfoOutlinedIcon />
          <PhoneIcon />
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar onClick={UserSignOut} src={user.photo} />
        <div className='sidebar__profileInfo'>
          <h3>@{user.displayName}</h3>
          <p>#{user.uid.substring(0, 8)}</p>
        </div>

        <div className='sidebar__profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
