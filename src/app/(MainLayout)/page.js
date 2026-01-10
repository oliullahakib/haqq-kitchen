import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-5xl text-center font-bold text-orange-400">Wellcome </h1>
      <Link className=" w-40 text-center btn border-amber-200" href={'/all-foods'}>All Foods</Link>
    </div>
  );
}
