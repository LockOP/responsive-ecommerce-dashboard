"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Inventory/GridView"); // redirect to inventory - grid view
  }, []);

  return (
    <div className="flex bg-slate-50 flex-col">
      {/* <Link
        href={"Inventory/GridView"}
        className="text-blue-700 underline self-center"
      >
        Continue to Inventory/GridView Page
      </Link> */}
    </div>
  );
}
