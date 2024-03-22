import React, { useState } from "react";
import "../Styling/css/components/postSubmitted.css";
import axios, { AxiosError } from "axios";

import { baseUrl } from "../tools/backendConfig";
import { useNavigate } from "react-router-dom";
function RegInfo() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    address: "",
    city: "",
    area: "",
    building: "",
    apartment: "",
    floor: "",
  });

  let cities = [
    "CAIRO",
    "ALEXANDRIA",
    "GIZA",
    "LUXOR",
    "ASWAN",
    "SHARM_EL_SHEIKH",
    "HURGHADA",
    "PORT",
    "SUEZ",
    "ISMAILIA",
    "MANSOURA",
    "TANTA",
    "ASSIUT",
    "SOHAG",
    "ZAGAZIG",
    "DAMIETTA",
    "MINYA",
    "BENI",
    "QENA",
    "BANHA",
    "KAFR_EL_SHEIKH",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      // If registration is successful, do something with the response (e.g., redirect)
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // If the email is already in use, display an error message
        setErrorMessage(error.response.data.message); // Assuming the error message is sent from backend
      } else {
        // Handle other types of errors
        console.error("Registration failed:", error.message);
      }
    }
  };
  return (
    <div className="post-submitted-card ">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="form-input"
          type="tel"
          placeholder="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <select
          className="form-input"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input
          className="form-input"
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="building"
          placeholder="Building Name (Optional)"
          value={formData.building}
          onChange={handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          name="apartment"
          placeholder="Apartment Number"
          value={formData.apartment}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-input"
          type="number"
          name="floor"
          placeholder="Floor Number"
          value={formData.floor}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="submit-btn">
          Continue
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default RegInfo;
