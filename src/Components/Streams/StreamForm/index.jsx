import "./StreamForm.css";

import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";

const StreamForm = (props) => {
  const navigate = useNavigate();

  const mySubmit = (formValues) => {
    props.onSubmit(formValues);
    navigate("/");
  };

  return (
    <form className="Form" onSubmit={props.handleSubmit(mySubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        value={"value"}
        component={renderInput}
        label="Enter Description"
      />
      <hr className="FormHR" />
      <button type="submit" className="SubmitBtn">
        Submit and Confirm »
      </button>
    </form>
  );
};

// It's input is passed from the <Field/>
const renderInput = (formProps) => {
  const { meta } = formProps;

  return (
    <div className="InputContainer group">
      <input
        placeholder=" "
        className={`FormInput peer ${
          meta.touched && meta.error ? "FormInputError" : ""
        }`}
        {...formProps.input}
      />
      <label
        className={`FormLabel ${
          meta.touched && meta.error ? "FormLabelError" : ""
        }`}
      >
        {formProps.label}
      </label>
      {meta.touched && meta.error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops!</span> {meta.error}
        </p>
      )}
    </div>
  );
};

// Validation rules for Redux_Form
const validate = (formValues) => {
  const errors = {};

  // The property name has to be identical to the <Field/> name
  const requiredFields = ["title", "description"];

  requiredFields.forEach((field) => {
    if (!formValues[field]) {
      errors[field] = field + " field is required";
    }
  });

  return errors;
};

// The {form} property is the name of this Form
// The reduxForm 'll send a punsh of props to the component

export default reduxForm({ form: "StreamForm", validate })(StreamForm);
