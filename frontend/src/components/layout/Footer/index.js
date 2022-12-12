import Footy from "./Footy";
import Introduction from "./Introduction";

function Footer() {
  return (
    <div className="md:flex flex-col gap-4 hidden">
      <Introduction />
      <Footy />
    </div>
  );
}

export default Footer;
