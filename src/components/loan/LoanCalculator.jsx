import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoanCalculator = () => {
  const navigate = useNavigate();
  
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanMonths, setLoanMonths] = useState(6);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayback, setTotalPayback] = useState(0);

  const interestRate = 0.15; // 15% interest rate

  useEffect(() => {
    const totalAmount = loanAmount * (1 + interestRate);
    const monthly = totalAmount / loanMonths;
    setMonthlyPayment(Math.round(monthly));
    setTotalPayback(Math.round(totalAmount));
  }, [loanAmount, loanMonths]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white p-8 rounded-sm shadow-2xl">
      <h3 className="text-easilon-navy text-xl font-bold mb-8">How Much Do You Need?</h3>

      {/* Loan Amount Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-easilon-gray text-sm">Loan Amount</span>
          <span className="bg-easilon-cyan text-white px-4 py-1 text-sm font-semibold rounded-sm">
            {formatCurrency(loanAmount)}
          </span>
        </div>
        <input
          type="range"
          min="10000"
          max="1000000"
          step="5000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-easilon-cyan"
          style={{
            background: `linear-gradient(to right, #00cde5 0%, #00cde5 ${((loanAmount - 10000) / (1000000 - 10000)) * 100}%, #e5e7eb ${((loanAmount - 10000) / (1000000 - 10000)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between mt-2 text-xs text-easilon-gray">
          <span>₹10,000</span>
          <span>₹10,00,000</span>
        </div>
      </div>

      {/* Loan Duration Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-easilon-gray text-sm">Loan Duration</span>
          <span className="bg-easilon-cyan text-white px-4 py-1 text-sm font-semibold rounded-sm">
            {loanMonths} Month{loanMonths > 1 ? 's' : ''}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="36"
          step="1"
          value={loanMonths}
          onChange={(e) => setLoanMonths(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-easilon-cyan"
          style={{
            background: `linear-gradient(to right, #00cde5 0%, #00cde5 ${((loanMonths - 1) / (36 - 1)) * 100}%, #e5e7eb ${((loanMonths - 1) / (36 - 1)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between mt-2 text-xs text-easilon-gray">
          <span>1 Month</span>
          <span>36 Months</span>
        </div>
      </div>

      {/* Results */}
      <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-easilon-gray text-xs mb-1">Pay Monthly</p>
            <p className="text-easilon-navy font-bold text-lg">{formatCurrency(monthlyPayment)}</p>
          </div>
          <div>
            <p className="text-easilon-gray text-xs mb-1">Term of Use</p>
            <p className="text-easilon-navy font-bold text-lg">{loanMonths} Months</p>
          </div>
          <div>
            <p className="text-easilon-gray text-xs mb-1">Total Pay Back</p>
            <p className="text-easilon-navy font-bold text-lg">{formatCurrency(totalPayback)}</p>
          </div>
        </div>
      </div>

      {/* Apply Button (FIXED: Added onClick for navigation) */}
      <button 
        onClick={() => navigate('/apply')} // Ab ye button click karne par user /apply page par jayega
        className="w-full bg-easilon-cyan text-white py-4 font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-easilon-navy transition-all uppercase"
      >
        Apply For Loan
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default LoanCalculator;