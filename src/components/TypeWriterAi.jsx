import Typewriter from "typewriter-effect";

export default function TypeWriterAi() {
  return (
    <div className="typewriterai">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(65)
            .typeString("{e=function(c){return c};if(!'")
            .pauseFor(1000)
            .deleteAll()
            .typeString("givemeingriedentstomakeamealforyou")
            .start();
        }}
      />
    </div>
  );
}
