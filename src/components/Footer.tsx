import Link from "next/link";
import planet from "public/lotties/planet.json";
import sun from "public/lotties/sun.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const Footer = () => {
  return (
    <footer className="w-full rounded-t-lg bg-primaryBlue text-white">
      <div className="space flex w-full items-center justify-between overflow-hidden rounded-t-lg px-6 py-4">
        <div id="stars"></div>
        <div>
          <p>
            © 2024 Pseudo.{" "}
            <Link
              href="https://www.auburnhacks.com"
              target="_blank"
              className="underline-offset-4 hover:underline"
            >
              Auburn Hacks.
            </Link>
          </p>
        </div>
        <div className="rotate-15">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: sun,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={100}
            width={100}
          />
        </div>
        <div className="flex items-center justify-between gap-6">
          <Link
            href="https://www.linkedin.com/in/trevor-aupperle/"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            Trevor Aupperle
          </Link>
          <Link
            href="https://www.linkedin.com/in/tyler-teufel/"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            Tyler Teufel
          </Link>
          <Link
            href="https://www.linkedin.com/in/addisonbarrow/"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            Addison Barrow
          </Link>
          <Link
            href="https://www.linkedin.com/in/zacharykalish/"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            Zach Kalish
          </Link>
        </div>
        <div className="rotate-15">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: planet,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={100}
            width={100}
          />
        </div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </footer>
  );
};
