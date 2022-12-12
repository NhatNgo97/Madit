import Footy from "./Footy";
import Introduction from "./Introduction";

function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <Introduction />
      <Footy />
    </div>
  );
}

export default Footer;
