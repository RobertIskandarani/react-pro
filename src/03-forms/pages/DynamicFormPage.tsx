import { Form, Formik } from 'formik';
import formJSON from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(`This field is required`);
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 1,
        `It must be at least ${(rule as any).value || 1}`
      );
    }
    if (rule.type === 'email') {
      schema = schema.email(`Invalid email address`);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export function DynamicFormPage() {
  return (
    <div>
      <h1> DynamicFormPage</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value=''>Select one...</option>
                    {options?.map(({ id, label }) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`Type ${type} is not supported`);
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
