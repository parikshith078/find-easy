import { Html, Head, Main, NextScript } from "next/document";
import FloatBtn from "@/components/chatbot/FloatBtn";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth poppins max-w-[1500px]  "
      data-theme="cupcake"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
