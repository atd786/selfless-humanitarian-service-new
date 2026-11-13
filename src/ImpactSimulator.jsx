import React, { useState } from "react";
import { BookOpen, Utensils, Laptop, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import "./ImpactSimulator.css";

function ImpactSimulator({ onDonateClick }) {
  const [currency, setCurrency] = useState("PKR");
  const [amountPKR, setAmountPKR] = useState(15000);

  const presetsPKR = [5000, 7500, 15000, 35000, 75000];
  const exchangeRate = 280; // 1 USD ≈ 280 PKR

  const displayAmount = currency === "USD"
    ? Math.round(amountPKR / exchangeRate)
    : amountPKR;

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setAmountPKR(currency === "USD" ? val * exchangeRate : val);
  };

  const handlePresetClick = (pkrVal) => {
    setAmountPKR(pkrVal);
  };

  // Real-world NGO field cost metrics
  const fullStudentMonths = Math.max(1, Math.floor(amountPKR / 7500));
  const nutritiousMeals = Math.max(5, Math.floor(amountPKR / 150));
  const textbooksAndKits = Math.max(1, Math.floor(amountPKR / 1800));
  const techLabHours = Math.max(4, Math.floor(amountPKR / 500));

  const formatMoney = (pkr) => {
    if (currency === "USD") {
      return `$${Math.round(pkr / exchangeRate).toLocaleString()}`;
    }
    return `PKR ${pkr.toLocaleString()}`;
  };

  return (
    <section className="section impact-sim-section">
      <div className="container">
        <div className="impact-sim-shell">
          <div className="impact-sim-header">
            <div className="sim-title-block">
              <span className="section-tag">
                <Sparkles size={13} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Interactive Impact & Transparency Simulator
              </span>
              <h2>See Exactly What Your Generosity Achieves</h2>
              <p>
                Every rupee donated to Selfless Humanitarian Service goes directly into classrooms, meals, and labs in Shahdara, Lahore—with 0% executive overhead.
              </p>
            </div>

            <div className="sim-currency-toggle" role="group" aria-label="Currency selector">
              <button
                type="button"
                className={`currency-btn ${currency === "PKR" ? "active" : ""}`}
                onClick={() => setCurrency("PKR")}
              >
                PKR (Rs.)
              </button>
              <button
                type="button"
                className={`currency-btn ${currency === "USD" ? "active" : ""}`}
                onClick={() => setCurrency("USD")}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="impact-sim-grid">
            {/* Left: Interactive Control Panel */}
            <div className="sim-control-card">
              <div className="sim-amount-display">
                <span className="sim-amount-label">Selected Contribution</span>
                <div className="sim-amount-value">{formatMoney(amountPKR)}</div>
              </div>

              <div className="sim-slider-wrap">
                <input
                  type="range"
                  className="sim-range-slider"
                  min={currency === "USD" ? 15 : 3000}
                  max={currency === "USD" ? 400 : 112000}
                  step={currency === "USD" ? 5 : 1500}
                  value={displayAmount}
                  onChange={handleSliderChange}
                  aria-label="Contribution amount slider"
                />
                <div className="sim-slider-bounds">
                  <span>{currency === "USD" ? "$15" : "PKR 3,000"}</span>
                  <span>{currency === "USD" ? "$400" : "PKR 112,000"}</span>
                </div>
              </div>

              <div className="sim-presets-row">
                {presetsPKR.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`sim-preset-btn ${Math.abs(amountPKR - preset) < 500 ? "active" : ""}`}
                    onClick={() => handlePresetClick(preset)}
                  >
                    {formatMoney(preset)}
                  </button>
                ))}
              </div>

              {/* Fiduciary Transparency Breakdown */}
              <div className="fiduciary-box">
                <div className="fiduciary-head">
                  <ShieldCheck size={18} />
                  <span>100% Zero-Overhead Fiduciary Breakdown</span>
                </div>

                <div className="fid-bar-item">
                  <div className="fid-bar-label">
                    <span>Tuition, Books & Uniforms</span>
                    <strong>55% ({formatMoney(Math.round(amountPKR * 0.55))})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill fid-crimson" style={{ width: "55%" }}></div></div>
                </div>

                <div className="fid-bar-item">
                  <div className="fid-bar-label">
                    <span>Daily Mid-Day Campus Nutrition</span>
                    <strong>25% ({formatMoney(Math.round(amountPKR * 0.25))})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill fid-amber" style={{ width: "25%" }}></div></div>
                </div>

                <div className="fid-bar-item">
                  <div className="fid-bar-label">
                    <span>IT Labs & Vocational Hardware</span>
                    <strong>20% ({formatMoney(Math.round(amountPKR * 0.20))})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill fid-emerald" style={{ width: "20%" }}></div></div>
                </div>

                <div className="fid-zero-guarantee">
                  <CheckCircle2 size={15} />
                  <span><strong>0% Executive Salaries</strong> — Board leadership volunteers completely unpaid</span>
                </div>
              </div>
            </div>

            {/* Right: Live Impact Counter Cards */}
            <div className="sim-metrics-column">
              <div className="sim-metrics-grid">
                <div className="sim-metric-card">
                  <div className="metric-icon-box crimson"><BookOpen size={24} /></div>
                  <div className="metric-num">{fullStudentMonths}</div>
                  <div className="metric-title">Full Student Month(s)</div>
                  <p>100% free classroom tuition, exam fees, and faculty mentorship</p>
                </div>

                <div className="sim-metric-card">
                  <div className="metric-icon-box amber"><Utensils size={24} /></div>
                  <div className="metric-num">{nutritiousMeals}</div>
                  <div className="metric-title">Nutritious School Meals</div>
                  <p>Freshly cooked balanced lunches keeping young minds focused</p>
                </div>

                <div className="sim-metric-card">
                  <div className="metric-icon-box emerald"><ShieldCheck size={24} /></div>
                  <div className="metric-num">{textbooksAndKits}</div>
                  <div className="metric-title">Textbooks & Uniform Sets</div>
                  <p>Complete seasonal uniform, syllabus workbooks, and stationery</p>
                </div>

                <div className="sim-metric-card">
                  <div className="metric-icon-box indigo"><Laptop size={24} /></div>
                  <div className="metric-num">{techLabHours} hrs</div>
                  <div className="metric-title">IT & Vocational Lab Training</div>
                  <p>Hands-on digital literacy, coding, and trade skills instruction</p>
                </div>
              </div>

              <div className="sim-cta-banner">
                <div>
                  <h4>Ready to Sponsor This Exact Impact?</h4>
                  <p>Donate directly via bank transfer or coordinate with Dr. Khushro Shahookar.</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-shimmer"
                  onClick={() => onDonateClick(`Calculated Impact Sponsorship (${formatMoney(amountPKR)})`)}
                >
                  Sponsor {formatMoney(amountPKR)} <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSimulator;
