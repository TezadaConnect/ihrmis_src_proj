import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// RestAPI link
export const API_HOST = "http://localhost:8000/api/";
// export const API_HOST = "http://127.0.0.1:8000/api/";
export const SANCTUM = "http://localhost:8000/";
// export const SANCTUM = "http://localhost:8000/";
export const APP_HOST = "http://localhost:3000/ihrmis/";

//Validation Constant
export const validationRequired = Yup.string()
  .required("This field is required")
  .trim();
export const validationName = Yup.string()
  .required("This field is required")
  .trim()
  .matches(/^[a-zA-Z\s]*$/, "Invalid input");
export const validationRequiredNum = Yup.number()
  .typeError("Must be a number")
  .required("This field is required");

export const validationEmail = Yup.string()
  .email("Enter a valid email")
  .required("This field is required");

export const validationDate = Yup.date()
  .typeError("Must be a valid date.")
  .required("This field is required.");

export const yesterday = new Date(Date.now() - 86400000);

export const axiosConfig = {
  "content-type": "multipart/form-data",
};

export const customStyles = {
  option: (provided) => ({
    ...provided,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 3,
    marginLeft: 5,
    borderRadius: 5,
    width: "100%",
  }),

  control: (provided, state) => ({
    ...provided,
    width: "100%",
    backgroundColor: "white",
    padding: 0,
    borderRadius: "5px 5px 5px 5px",
    fontSize: "small",
    border: state.isFocused
      ? "1px solid 	#A9A9A9 !important"
      : "1px solid #DCDCDC !important",
    boxShadow: "none",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return {
      ...provided,
      opacity,
      transition,
    };
  },
};

export const ALERT = withReactContent(Swal);
