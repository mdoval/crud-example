"use client";

import React, { useActionState, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import ModalWindow from "./modal";
import { addUser } from "@/lib/actions";

const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(addUser,"")

  const error: boolean = false;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="btn btn-primary font-bold" onClick={handleClick}>
        <IoAddOutline className="font-bold text-2xl" /> Nuevo Usuario
      </button>
      <ModalWindow open={open} title="Nuevo Usuario">
        <form className="w-full" action={formAction}>
          <div className="w-full">
            <div className="flex flex-row space-x-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nombre</span>
                </div>
                <input
                  id="nombre"
                  name="nombre"        
                  type="text"
                  placeholder="Ej. Juan"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  {error ? (
                    <span className="label-text-alt">Bottom Left label</span>
                  ) : (
                    ""
                  )}
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Apellido</span>
                </div>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Ej. Lopez"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  {error ? (
                    <span className="label-text-alt">Bottom Left label</span>
                  ) : (
                    ""
                  )}
                </div>
              </label>
            </div>

            <div className="flex flex-row space-x-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ej. juanlopez@correo.com"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  {error ? (
                    <span className="label-text-alt">Bottom Left label</span>
                  ) : (
                    ""
                  )}
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Seleccione una Profesion</span>
                </div>
                <select className="select select-bordered" id="profesion" name="profesion" defaultValue={"Medico"}>
                  <option disabled selected>
                    Elija una...
                  </option>
                  <option>Medico</option>
                  <option>Heladero</option>
                  <option>Mecanico</option>
                </select>
                <div className="label">
                  {error ? (
                    <span className="label-text-alt">Bottom Left label</span>
                  ) : (
                    ""
                  )}
                </div>
              </label>
            </div>

            <div className="flex flex-row space-x-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Fecha de Nacimiento</span>
                </div>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  {error ? (
                    <span className="label-text-alt">Bottom Left label</span>
                  ) : (
                    ""
                  )}
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Edad</span>
                </div>
                <input
                  id="edad"
                  name="edad"
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  {error ? (
                    <span className="label-text-alt">Bottom Left label</span>
                  ) : (
                    ""
                  )}
                </div>
              </label>
            </div>
            <div className="space-x-2">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
              <button className="btn btn-error" onClick={handleClick}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </ModalWindow>
    </div>
  );
};

export default AddUser
