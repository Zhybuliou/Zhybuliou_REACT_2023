import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormCards from '../components/FormCards';
import { IFormCard } from '../types/types';

export default function FormPage() {
  const [formValue, setFormValue] = useState<IFormCard[]>([]);
  const [submitButton, setSubmitButton] = useState(true);
  const [checkErrorForm, setCheckErrorForm] = useState(false);
  const [sendForm, setSendFrom] = useState(false);
  const [cardImage, setCardImage] = useState<string>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormCard>({
    defaultValues: {
      radio: 'Male',
    },
    mode: 'onChange',
    shouldFocusError: true,
  });

  function handleChange() {
    if (checkErrorForm) {
      setSubmitButton(false);
    }
    setSendFrom(false);
    setSubmitButton(false);
  }

  const onSubmit = (data: IFormCard) => {
    const currentState = [{ ...data, imageUrl: cardImage }, ...formValue];
    setFormValue(currentState);
    setCheckErrorForm(false);
    setSubmitButton(true);
    setSendFrom(true);
    reset();
  };
  const onError = () => {
    setSubmitButton(true);
  };
  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files as FileList;
    const img = file[0] as Blob;
    const image = URL.createObjectURL(img);
    setCardImage(image);
  };

  return (
    <>
      <h2>Form</h2>
      <form
        id="form"
        className="form"
        name="control-ref"
        onSubmit={handleSubmit(onSubmit, onError)}
        onChange={handleChange}
      >
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          placeholder="Name..."
          {...register('name', {
            required: 'Name is required field!!!',
          })}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
        <label htmlFor="data">Birthday*</label>
        <input
          id="data"
          type="date"
          {...register('data', {
            required: 'Date is required field!!!',
          })}
        />
        {errors.data && <div style={{ color: 'red' }}>{errors.data.message}</div>}
        <label htmlFor="department">Department</label>
        <select {...register('select')} id="department">
          <option value="Logistic">Logistic</option>
          <option value="Developer">Developer</option>
          <option value="Marketing">Marketing</option>
        </select>
        <label htmlFor="gender">Gender</label>
        <div className="input-field" id="gender">
          <input {...register('radio')} type="radio" value="Male" />
          <span>Male</span>
        </div>
        <div className="input-field">
          <input {...register('radio')} type="radio" value="Female" />
          <span>Female</span>
        </div>
        <label htmlFor="relocate">Relocate</label>
        <div className="input-field" id="relocate">
          <input {...register('check')} type="checkbox" value="Yes" />
          <span>Yes</span>
        </div>
        <label htmlFor="avatar">Avatar</label>
        <input
          {...register('imageUrl', {
            required: 'Please select your image!',
          })}
          type="file"
          id="avatar"
          onChange={(e) => handleSetImage(e)}
        />
        {errors.imageUrl && <div style={{ color: 'red' }}>{errors.imageUrl.message}</div>}
        <input className="form-button" type="submit" value="Send" disabled={submitButton} />
        {sendForm && <p className="form-send">Your form has been submitted successfully!</p>}
      </form>
      <FormCards formValue={formValue} />
    </>
  );
}
