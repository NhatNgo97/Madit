import Button from "../../common/Button";
import Divider from "../../common/Divider";

function Introduction() {
  return (
    <div className="flex flex-col w-[300px] bg-white rounded-md">
      <div
        style={{
          backgroundImage:
            "url(https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png)",
          backgroundSize: "cover",
        }}
        className="h-9"
      ></div>
      <div className="p-3 flex flex-col gap-3">
        <div className="flex flex-row items-center -mt-8 -ml-4">
          <img
            className="w-20"
            src="https://preview.redd.it/rrz3hmsxcll71.png?auto=webp&s=59f9f6ae2b212be39fc4f3e17fcabc873c287858"
          />
          <h3 className="text-xl font-semibold mt-4">Home</h3>
        </div>
        <div>
          <p className="text-sm">
            Your personal Maddit frontpage. Come here to check in with your
            favorite communities
          </p>
        </div>
        <Divider />
        <Button className="w-full">
          <span className="text-sm">Create post</span>
        </Button>
        <Button type="secondary" className="w-full">
          <span className="text-sm">Create Comunnities</span>
        </Button>
      </div>
    </div>
  );
}

export default Introduction;
