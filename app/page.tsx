import { Button } from "@/components/Button";
import { Check } from "@/components/Check";
import { Form } from "@/components/Form";
import { HeaderImage } from "@/components/Image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-10 pb-10  lg:w-[928px] lg:flex-row-reverse lg:p-6">
      <div className="relative aspect-[375/284] w-full lg:aspect-[400/593]  lg:w-[400px]">
        <HeaderImage />
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-6 px-6 ">
          <h1 className="leading-full text-xl font-bold lg:text-2xl">
            Stay updated
          </h1>
          <p className="leading-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col gap-[10px]">
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Measuring to ensure updates are a success</ListItem>
            <ListItem>And much more!</ListItem>
          </ul>
        </div>
        <Form />
      </div>
    </main>
  );
}

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="flex gap-4 leading-6">
      <Check />
      <p>{children}</p>
    </li>
  );
};
