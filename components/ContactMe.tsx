import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, subject, message } = formData;

    window.location.href = `mailto:mia.lab@gmail.com?subject=${subject}&body=Hi, my name is ${name}, ${message} (${email})`;
  };

  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="title">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex-center space-x-5 text-2xl">
            <PhoneIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p>+82 10-1234-1234</p>
          </div>
          <div className="flex-center space-x-5 text-2xl">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p>mia.lab@gmail.com</p>
          </div>
          <div className="flex-center space-x-5 text-2xl">
            <MapPinIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p>123 Developer Lane</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contact-input"
              type="text"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contact-input"
            placeholder="Message"
          />

          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black
                       font-bold text-lg opacity-70"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
