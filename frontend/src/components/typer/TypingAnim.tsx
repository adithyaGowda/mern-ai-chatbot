import { TypeAnimation } from "react-type-animation";

function TypingAnim() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Chat With Your AI",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Built With OpenAI",
        2000,
        "Your Own Customized ChatGPT",
        1500,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        textShadow: "1px 1px 2px #000",
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  );
}

export default TypingAnim;
