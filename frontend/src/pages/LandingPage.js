import LandingPageContent from "../components/view/LandingPage/LandingPageContent";
import LandingPageForm from "../components/view/LandingPage/LandingPageForm";

function LandingPage() {
  return (
    <section className="h-screen bg-[#f0f2f5]">
      <div className="h-5/6 w-full">
        <div className="flex h-full justify-center items-center">
          <div className="flex md:max-w-[1100px] md:w-11/12 w-[400px]  md:flex-row flex-col justify-around items-center gap-4">
            <LandingPageContent />
            <LandingPageForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
