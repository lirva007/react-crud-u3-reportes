import React,{Fragment} from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser
  });

  setValue("name", props.currentUser.name);
  setValue("tel", props.currentUser.tel);
  setValue("note", props.currentUser.note);
  setValue("direction", props.currentUser.direction);

  const onSubmit = (data, e) => {
    console.log(data)
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
    // e.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre: </label>
        <p><input
          type="text"
          name="name"
          {...register('name',{required:true})}
        ></input></p>
        <span className="text-danger">{errors?.name?.message}</span>
        <label>Telefono: </label>
        <p><input
          type="text"
          name="tel"
          {...register('tel',{required:true})}
        ></input></p>
        <span className="text-danger">{errors?.name?.message}</span>
        <label>Nota: </label>
        <p><input
          type="text"
          name="note"
          {...register('note',{required:true})}
        ></input></p>
        <span className="text-danger">{errors?.name?.message}</span>
        <label>Direccion: </label>
        <p><input
          type="text"
          name="direction"
          {...register('direction',{required:true})}
        ></input></p>
        <div>
          <span className="text-danger">{errors?.name?.message}</span>
        </div>
        <p><button className="btn btn-success">Editar</button></p>
      </form>
    </Fragment>
  );
};

export default EditUserForm;