import Image from "next/image";
import airplaneSvg from "../app/assets/airplane.svg";
import logoSvg from "../app/assets/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className=" mx-auto p-8 flex flex-col w-full h-screen max-w-screen-xl"
      >
        <nav className="w-full flex items-center justify-between h-14">
          <Link href="/">
            <Image
              className="h-14 w-14"
              src={logoSvg}
              alt="Logomarca da Airplanner"
            />
          </Link>
          <div className=" flex gap-8 items-center">
            <Link
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
              href="#hero"
            >
              <p>Preço</p>
            </Link>
            <Link
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
              href="#hero"
            >
              <p>Sobre</p>
            </Link>
            <Link
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
              href="#hero"
            >
              <p>Blog</p>
            </Link>
            <Link
              className=" bg-fuchsia-500 font-medium py-3 px-5 text-white hover:bg-fuchsia-700 transition-colors rounded-full"
              href="#hero"
            >
              <p>Começar</p>
            </Link>
          </div>
        </nav>
        <div className="w-full mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-left text-7xl font-black text-stone-800">
              Planeje sua viagem com o
              <span className="text-fuchsia-500"> Airplanner</span>
            </h1>
            <p className="text-lg mt-8 text-stone-700 font-bold">
              Nunca foi tão fácil planejar uma viagem. <br />
              Faça tudo de forma eficaz e sem dor de cabeça!
            </p>
          </div>
          <Image
            className="w-full max-w-xl"
            src={airplaneSvg}
            alt="Ilustração de um avião dando uma volta ao mundo"
          />
        </div>
        <Link
          href="#hero"
          className="w-fit  bg-fuchsia-500 mx-auto font-medium py-3 px-5 text-white hover:bg-fuchsia-700 transition-colors rounded-full"
        >Comece agora!</Link>
      </section>
    </main>
  );
}
