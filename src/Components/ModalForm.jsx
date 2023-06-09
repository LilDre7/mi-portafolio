import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import "./stack.css";

const ModalForm = ({ isShowForm, setisShowForm }) => {
  const form = useRef();

  const handleClose = () => {
    Swal.fire(
      "Gracias por tu interés!",
      setisShowForm((isShowForm) => !isShowForm)
    );
  };

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (name === "" || email === "" || message === "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos",
        icon: "error",
      });
      return false;
    } else if (true) {
      Swal.fire({
        title: "Gracias por tu mensaje!",
        text: "Te responderemos lo antes posible",
        icon: "success",
      });
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_95gplzc",
        "template_vyufg5h",
        form.current,
        "EQnk4jDWH6qVeKX9w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const body = document.querySelector("body");

  if (isShowForm) {
    body.style.overflow = "hidden";
    body.style.backgroundColor= "#000000ee";
    body.style.transition = "all 0.5s ease-in-out";
  } else {
    body.style.overflow = "auto";
    body.style.backgroundColor= "#f0e7db"
  }

  return (
    <section
      autoFocus
      className={`fixed z-50 transition-opacity top-0 left-0 w-full h-full bg-["#000000ee"] flex justify-center items-center
        ${
          isShowForm
            ? "opacity-100 visible overflow-hidden absolute z-50 translate-y-36 sm:translate-y-0 "
            : "opacity-0 invisible"
        } text-black`}
    >
      <div
        autoFocus
        className="formulario w-[300px] p-4 rounded-md  grid gap-4 translate-y-[50rem] sm:translate-y-[40rem] lg:translate-y-[30rem] z-50 "
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 p-2 text-black text-center z-50"
        >
          <h1 className="text-center text-2xl font-bold pt-2 flex flex-col mx-auto w-full justify-center items-center ">
            <span className="border-b-slate-700 border-b-2">Hola!</span>
            <span className="mx-auto text-white font-bold text-2xl ">
              <span>
                <i className="bx bxl-mailchimp text-3xl text-black   translate-y-1 -translate-x-3 "></i>
              </span>
              Contactame
            </span>
          </h1>

          <label className="bg-black text-white mx-auto w-[80%] rounded-md p-[0.2rem] border-b-4 border-green-500 ">
            Name
          </label>
          <input
            className="border-2 border-black rounded-md outline-none p-1"
            type="text"
            name="user_name"
            placeholder="Escribe tu nombre ⚗️"
          />
          <label className="bg-black text-white mx-auto w-[80%] rounded-md p-[0.2rem] border-b-4 border-green-500 ">
            Email
          </label>
          <input
            className="border-2 border-black rounded-md outline-none p-1"
            type="email"
            name="user_email"
            placeholder="Escribe tu correo ⚗️"
          />
          <label className="bg-black text-white mx-auto w-[80%]  rounded-md p-[0.2rem] border-b-4 border-green-500 ">
            Message
          </label>
          <textarea
            placeholder="Hola, dime en que te puedo ayudar!"
            className="border-2 border-black rounded-md text-sm placeholder:text-center p-1 outline-none "
            name="message"
          />

          <input
            autoComplete="Me gustaria tu ayuda para mi proyecto o solo quiero hablar contigo, eres un crack!"
            className="bg-black text-white p-1 rounded-lg cursor-pointer border-b-4 
            border-green-500 w-[80%] mx-auto "
            type="submit"
            value="Enviar"
          />
        </form>
        <button onClick={handleClose}>
          <i className="bx bx-x text-2xl absolute top-0 right-0 rounded-md p-1 cursor-pointer hover:text-red-600 hover:scale-150"></i>
        </button>
      </div>
    </section>
  );
};

export default ModalForm;
