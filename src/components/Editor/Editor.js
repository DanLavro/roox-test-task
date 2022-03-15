import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './Editor.module.scss';

function EditorForm({ currentUserData }) {
  const [isNotEditable, setIsNotEditable] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentUserData.name,
      username: currentUserData.username,
      email: currentUserData.email,
      street: currentUserData.address.street,
      city: currentUserData.address.city,
      zipcode: currentUserData.address.zipcode,
      phone: currentUserData.phone,
      website: currentUserData.website,
    },
  });

  const onSubmit = (data) => console.log(JSON.stringify(data));
  return (
    <div className={styles.Editor}>
      <div className={styles.header}>
        <p>Профиль пользователя</p>
        <button onClick={() => setIsNotEditable((prev) => !prev)}>
          Редактировать
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <label>Name</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.name ? '1px solid red' : '' }}
            {...register('name', { required: true })}
          />

          <label>User name</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.username ? '1px solid red' : '' }}
            {...register('username', { required: true })}
          />

          <label>E-mail</label>
          <input
            disabled={isNotEditable}
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
            style={{ border: errors?.email ? '1px solid red' : '' }}
          />

          <label>Street</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.street ? '1px solid red' : '' }}
            {...register('street', { required: true })}
          />
          <label>City</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.city ? '1px solid red' : '' }}
            {...register('city', { required: true })}
          />
          <label>Zip code</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.zipcode ? '1px solid red' : '' }}
            {...register('zipcode', { required: true })}
          />
          <label>Phone</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.phone ? '1px solid red' : '' }}
            {...register('phone', {
              required: true,
            })}
          />
          <label>Website</label>
          <input
            disabled={isNotEditable}
            style={{ border: errors.website ? '1px solid red' : '' }}
            {...register('website', {
              required: true,
              pattern: {
                value:
                  /[-\w0-9@:%._\+~#=]{1,256}\.[\w()]{1,6}\b([-\w0-9()@:%_\+.~#?&//=]*)/,
              },
            })}
          />
          <label>Comment</label>
          <textarea
            disabled={isNotEditable}
            {...register('comment')}
          ></textarea>
        </div>
        <button
          style={{ backgroundColor: isNotEditable ? '#afafaf' : '#52CF4F' }}
          type="submit"
          disabled={isNotEditable || !isValid}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default EditorForm;
