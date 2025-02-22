import React from "react";
import { useFormContext } from "react-hook-form";
import "./BillingDetails.css";

export default function BillingDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // 

  return (
    <div className="woocommerce-billing-fields">
      <h3>Billing Details</h3>

      <p className="form-row form-row-wide">
        <label>
          Civility <abbr title="required" className="required">*</abbr>
        </label>
        <select {...register("billingAddress.civility", { required: "Civility is required" })} className="input-text">
          <option value="">Select...</option>
          <option value="Mr">Mr</option>
          <option value="Mme">Mme</option>
          <option value="Mlle">Mlle</option>
        </select>
        {errors.billingAddress?.civility && <p className="error">{errors.billingAddress.civility.message}</p>}
      </p>

      <p className="form-row form-row-first">
        <label>
          First Name <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.firstName", { required: "First Name is required" })} className="input-text" />
        {errors.billingAddress?.firstName && <p className="error">{errors.billingAddress.firstName.message}</p>}
      </p>

      <p className="form-row form-row-last">
        <label>
          Last Name <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.lastName", { required: "Last Name is required" })} className="input-text" />
        {errors.billingAddress?.lastName && <p className="error">{errors.billingAddress.lastName.message}</p>}
      </p>

      <p className="form-row form-row-wide">
        <label>Company Name</label>
        <input {...register("billingAddress.companyName")} className="input-text" placeholder="Company (optional)" />
      </p>

      <p className="form-row form-row-wide">
        <label>
          Street Address <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.street", { required: "Street Address is required" })} className="input-text" />
        {errors.billingAddress?.street && <p className="error">{errors.billingAddress.street.message}</p>}
      </p>

      <p className="form-row form-row-wide">
        <label>
          City <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.city", { required: "City is required" })} className="input-text" />
        {errors.billingAddress?.city && <p className="error">{errors.billingAddress.city.message}</p>}
      </p>

      <p className="form-row form-row-wide">
        <label>
          County <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.county", { required: "County is required" })} className="input-text" />
        {errors.billingAddress?.county && <p className="error">{errors.billingAddress.county.message}</p>}
      </p>

      <p className="form-row form-row-wide">
        <label>
          Zip Code <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.zipCode", { required: "Zip Code is required" })} className="input-text" />
        {errors.billingAddress?.zipCode && <p className="error">{errors.billingAddress.zipCode.message}</p>}
      </p>

      <p className="form-row form-row-wide">
        <label>
          Email <abbr title="required" className="required">*</abbr>
        </label>
        <input
          {...register("customer.email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
          })}
          className="input-text"
        />
        {errors.customer?.email && <p className="error">{errors.customer.email.message}</p>}
      </p>

      <p className="form-row form-row-wide">
        <label>
          Phone <abbr title="required" className="required">*</abbr>
        </label>
        <input
          {...register("customer.phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" },
          })}
          className="input-text"
        />
        {errors.customer?.phone && <p className="error">{errors.customer.phone.message}</p>}
      </p>
    </div>
  );
}
