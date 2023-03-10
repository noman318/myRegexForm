import React from "react";
// eslint-disable-next-line
import { Formik, useFormik } from "formik";
import { signUpSchema } from "../schema";

const initialValues = {
  fname: "",
  lname: "",
  gender: "",
  uname: "",
  age: "",
  quantity: "",
  price: "",
  email: "",
  pass: "",
  cpass: "",
};

const MyForm = () => {
  const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(initialValues);
      initialValues.gender = values.gender;
      console.log(values);
      // console.log(initialValues);
    },
  });
  console.log(errors);
  return (
    <div>
      <h2 className="text-center m-3">My Validation in Form</h2>
      <form onSubmit={handleSubmit} className='border p-5'>
        <div className="form-group">
          <label htmlFor="fname">First Name <span className="star">*</span></label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            minLength={3}
            maxLength={15}
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {errors.fname && touched.fname?
                <p className='text-danger'>{errors.fname}</p>:''}
        </div>{" "}
        <br />
        <div className="form-group">
          <label htmlFor="lname">Last Name <span className="star">*</span> </label>
          <input
            type="text"
            className="form-control"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            minLength={3}
            maxLength={15}
          />
          {/* {<p className="form-error">{errors.lname}</p>} */}
          {errors.lname && touched.lname?
                <p className='text-danger'>{errors.lname}</p>:''}
        </div>
        <br />
        <div className="d-flex">
          <label>Gender <span className="star">*</span></label>
          <div className="form-check">
            <label className="form-check-label">Male</label>
            <input
              className="form-check-input mx-1"
              type="radio"
              name="gender"
              id="exampleRadios2"
              value={"Male"}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">Female</label>
            <input
              className="form-check-input mx-1"
              type="radio"
              name="gender"
              id="exampleRadios1"
              value={"Female"}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">Others</label>
            <input
              className="form-check-input mx-1"
              type="radio"
              name="gender"
              id="exampleRadios2"
              value={"Others"}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="uname">User Name <span className="star">*</span></label>
          <input
            type="text"
            className="form-control"
            name="uname"
            minLength={8}
            maxLength={21}
            value={values.uname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.uname && touched.uname?
                <p className='text-danger'>{errors.uname}</p>:''}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="age">Age <span className="star">*</span></label>
          <input
            type="number"
            min={18}
            max={120}
            className="form-control"
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* {<p className="form-error">{errors.age}</p>} */}
          {errors.age && touched.age?
                <p className='text-danger'>{errors.age}</p>:''}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="quantity"> Quantity <span className="star">*</span></label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            minLength={1}
            maxLength={5}
            value={values.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.quantity && touched.quantity?
                <p className='text-danger'>{errors.quantity}</p>:''}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address <span className="star">*</span></label>
          <input
            type="email"
            className="form-control"
            name="email"
            minLength={1}
            maxLength={30}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* {<p className="form-error">{errors.email}</p>} */}
          {errors.email && touched.email?
                <p className='text-danger'>{errors.email}</p>:''}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="price">Price <span className="star">*</span></label>
          <input
            type="text"
            className="form-control"
            name="price"
            minLength={1}
            maxLength={5}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* {<p className="form-error">{errors.price}</p>} */}
          {errors.price && touched.price?
                <p className='text-danger'>{errors.price}</p>:''}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="pass">Password <span className="star">*</span></label>
          <input
            type="password"
            name="pass"
            className="form-control"
            id="pass"
            minLength={1}
            maxLength={16}
            value={values.pass}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* {<p className="form-error">{errors.pass}</p>} */}
          {errors.pass && touched.pass?
                <p className='text-danger'>{errors.pass}</p>:''}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="cpass">Confirm Password <span className="star">*</span></label>
          <input
            type="password"
            name="cpass"
            className="form-control"
            id="cpass"
            minLength={1}
            maxLength={16}
            value={values.cpass}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* {<p className="form-error">{errors.cpass}</p>} */}
          {errors.cpass && touched.cpass?
                <p className='text-danger'>{errors.cpass}</p>:''}
        </div>
        <br />
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
