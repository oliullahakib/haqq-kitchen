import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-5xl text-center font-bold text-orange-400">Wellcome </h1>
      <Link className=" w-40 text-center btn border-amber-200" href={'/all-foods'}>All Foods</Link>
   <div>
   </div>
    </div>
  );
}
