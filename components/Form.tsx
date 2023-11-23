import { sendMail } from "@/actions/sendMail";
import { Button } from "./Button";
import { SubmitButton } from "./SubmitButton";

export const Form = () => {
  return (
    <form action={sendMail} className="flex w-full flex-col gap-6 px-6">
      <div className="relative flex w-full flex-col gap-2">
        <label htmlFor="email" className="text-sm font-bold leading-6">
          Email address
        </label>

        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="email@company.com"
          className={` w-full rounded-lg border  px-6 py-4 outline-none
          
          `}
        />
        <span className="warning">Valid email required</span>
      </div>
      <SubmitButton />
    </form>
  );
};
