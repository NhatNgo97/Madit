import { Link } from "react-router-dom";
import Divider from "../../common/Divider";

function Footy() {
  return (
    <div className="flex flex-col gap-2 w-[300px] bg-white rounded-md p-3 text-sm sticky top-2">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <Link to="#">User Agreement</Link>
          <Link to="#">Privact Policty</Link>
        </div>
        <div className="flex flex-col w-1/2">
          <Link to="#">Content Policy</Link>
          <Link to="#">Moderator Code of Conduct</Link>
        </div>
      </div>
      <Divider />
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <Link to="#">English</Link>
          <Link to="#">Français</Link>
          <Link to="#">Italiano</Link>
        </div>
        <div className="flex flex-col w-1/2">
          <Link to="#">Deutsch</Link>
          <Link to="#">Español</Link>
          <Link to="#">Português</Link>
        </div>
      </div>
      <Divider />
      <div>
        <p>Reddit Inc © 2022. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footy;
