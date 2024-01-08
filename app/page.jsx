import LoginOrSignup from "@/components/Login-or-Signup";
import LottieAnimation from "@/components/LottieAnimation";
import animationData from "../public/welcome-animation.json";

export default function Home() {
  return (
    <main>
      <section className="flex" style={{ minHeight: "100dvh" }}>
        <div className="flex items-center justify-center flex-1">
          <LottieAnimation animationData={animationData}/>
        </div>
        <div className="flex items-center justify-center flex-1">
          <LoginOrSignup />
        </div>
      </section>
    </main>
  );
}
