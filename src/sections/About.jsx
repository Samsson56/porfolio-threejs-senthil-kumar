import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
const About = () => {

  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("jbsenthilkumar209@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }


  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                <div>
                    <p className="grid-headtext">Hi, I'm Senthil</p>
                    <p className="grid-subtext">With 6 years of experience, I have honed my skills as a Game Programmer, creating rapid prototypes, building optimized AR/VR experiences</p>
                </div>
            </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid2.png" alt="grid2" className="w-full sm:h-[276px] h-fit object-contain"  />
                <div>
                  <p className="grid-headtext">Tech Stack</p>
                  <p className="grid-subtext">I specialize in diverse programming languages, game engines, and creative tools that empower me to design engaging gameplay, build immersive worlds, and deliver scalable gaming experiences.</p>
                </div>
            </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe 
              height={326}
              width={326}
              backgroundColor="rgba(0,0,0,0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"          
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones</p>
              <p className="grid-subtext">I’m based in Chennai, Tamil Nadu, India, and open to collaborating on game development projects worldwide.</p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">Game programming isn’t just my profession—it’s my passion. I constantly explore new technologies and sharpen my skills to bring innovative gameplay ideas to life.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center"> Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jbsenthilkumar209@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
