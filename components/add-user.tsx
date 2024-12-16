"use client";

import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import ModalWindow from "./modal";

const AddUser = () => {
  const [open, setOpen] = useState(false);
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
        <div className="w-full">
          <div className="flex flex-row space-x-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Nombre</span>
              </div>
              <input
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
              <select className="select select-bordered">
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
            <button className="btn btn-primary" onClick={handleClick}>
              Guardar
            </button>
            <button className="btn btn-error" onClick={handleClick}>
              Cancelar
            </button>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};

export default AddUser;
