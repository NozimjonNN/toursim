import React, { useState } from "react";
import './donatiuon.css'

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomAmount, setShowCustomAmount] = useState(false);

  const handleDonationChange = (e) => {
    const value = e.target.value;
    setDonationAmount(value);
    setShowCustomAmount(value === "custom");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = showCustomAmount ? customAmount : donationAmount;
    if (finalAmount) {
      alert(`Thank you for your donation of $${finalAmount}!`);
    } else {
      alert("Please enter a donation amount.");
    }
  };

  return (
    <div className="donation-form-container">
      <h1>Support Our Project</h1>
      <p>Your contribution helps us grow and improve. Thank you for your generosity!</p>
      <form className="donation-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="amount">Donation Amount</label>
        <select
          id="amount"
          name="amount"
          value={donationAmount}
          onChange={handleDonationChange}
          required
        >
          <option value="" disabled>Select an amount</option>
          <option value="10">$10</option>
          <option value="20">$20</option>
          <option value="50">$50</option>
          <option value="100">$100</option>
          <option value="custom">Custom</option>
        </select>

        {showCustomAmount && (
          <div>
            <label htmlFor="custom-amount">Custom Amount</label>
            <input
              type="number"
              id="custom-amount"
              name="custom-amount"
              placeholder="Enter custom amount"
              min="1"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </div>
        )}

        <label htmlFor="message">Message (Optional)</label>
        <textarea id="message" name="message" placeholder="Leave a message for us"></textarea>

        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default Donation;
