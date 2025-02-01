"use client";

import React, { useState } from "react";
import { useCart } from "../cart/context/CartContext";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zip: false,
  });

  // Calculate the total amount
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Update form state when inputs change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    // Clear the error for the field when the user types
    if (e.target.value.trim() !== "") {
      setFormErrors({ ...formErrors, [e.target.name]: false });
    }
  };

  // Validate the form fields and set errors if any are missing
  const validateForm = () => {
    const errors = {
      name: formValues.name.trim() === "",
      email: formValues.email.trim() === "",
      address: formValues.address.trim() === "",
      city: formValues.city.trim() === "",
      state: formValues.state.trim() === "",
      zip: formValues.zip.trim() === "",
    };

    setFormErrors(errors);
    // Return true if no errors are found
    return Object.values(errors).every((error) => error === false);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with the checkout process (e.g., payment API)
      alert("Checkout successful!");
      // You can also clear the form or navigate to a success page here.
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          {/* Shipping Details Form */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={`w-full border p-2 rounded ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">Name is required.</p>
                )}
              </div>
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`w-full border p-2 rounded ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="you@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">Email is required.</p>
                )}
              </div>
              {/* Address Field */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className={`w-full border p-2 rounded ${
                    formErrors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Street address"
                />
                {formErrors.address && (
                  <p className="text-red-500 text-xs mt-1">Address is required.</p>
                )}
              </div>
              {/* City, State, and Zip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* City */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className={`w-full border p-2 rounded ${
                      formErrors.city ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="City"
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-xs mt-1">City is required.</p>
                  )}
                </div>
                {/* State */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formValues.state}
                    onChange={handleInputChange}
                    className={`w-full border p-2 rounded ${
                      formErrors.state ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="State"
                  />
                  {formErrors.state && (
                    <p className="text-red-500 text-xs mt-1">State is required.</p>
                  )}
                </div>
                {/* Zip Code */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formValues.zip}
                    onChange={handleInputChange}
                    className={`w-full border p-2 rounded ${
                      formErrors.zip ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Zip Code"
                  />
                  {formErrors.zip && (
                    <p className="text-red-500 text-xs mt-1">Zip code is required.</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-full bg-[#029FAE] hover:bg-[#027f8a] mt-4"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
