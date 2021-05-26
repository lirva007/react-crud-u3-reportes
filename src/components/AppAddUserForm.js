import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    props.addUser(data);
    // e.target.restet();
  };

  return(
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p><label>Nombre: </label></p>
        <p><input 
          type="text" 
          name="name"
          {...register('name',{required:true})}
        ></input>
        </p>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <p><label>Telefono: </label></p>
        <p><input 
          type="text" 
          name="tel"
          {...register('tel',{required:true})}
        ></input></p>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <p><label>Nota: </label></p>
        <p><input 
          type="text" 
          name="note"
          {...register('note',{required:true})}
        ></input></p>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <p><label>Direccion: </label></p>
        <p><input 
          type="text" 
          name="direction"
          {...register('direction',{required:true})}
        ></input></p>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <p><button className="btn btn-success">AddUser</button></p>
      </form>
    </Fragment>
  );
};

export default AddUserForm;