import { Header } from "~/components/header";

export default function Home() {

  return (
    <div className="p-8 bg-white dark:bg-zinc-950 dark:text-white">
      <div className="m-auto max-w-[720px] mt-5 min-h-screen">
        <Header />
      </div>
    </div>
  );
}
