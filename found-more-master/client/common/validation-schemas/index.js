import * as Yup from "yup";

export const addressValidationSchema = Yup.object().shape({
  street: Yup.string().required("Street name is required"),
  number: Yup.string().matches(/^[\d-\D]+$/, "You can only use numbers or -"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Zip code is required"),
  countryCode: Yup.string().required("Country is required")
});
