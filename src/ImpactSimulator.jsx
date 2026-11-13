import React, { useState } from "react";
import { BookOpen, Utensils, Laptop, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import "./ImpactSimulator.css";

function ImpactSimulator({ onDonateClick }) {
  const [currency, setCurrency] = useState("PKR");
  const [amountPKR, setAmountPKR] = useState(50000);

  const presetsPKR = [5500, 11000, 45000, 50000, 85000];
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

  // Client-specified 100% Zero-Overhead Fiduciary Allocation:
  // 35% Tuition Fees | 35% Mid-Day Meals | 10% Books / Uniform Sets | 20% IT & Tech Labs
  const tuitionSharePKR = Math.round(amountPKR * 0.35);
  const mealsSharePKR = Math.round(amountPKR * 0.35);
  const booksSharePKR = Math.round(amountPKR * 0.10);
  const techSharePKR = Math.round(amountPKR * 0.20);

  // Client-specified unit costs applied strictly to each category's allocated share:
  // Rs. 5,000 / student fees | Rs. 300 / meal | Rs. 5,000 / book & uniform set | Rs. 500 / tech lab hour
  const formatUnitCount = (val) => {
    if (val >= 10) return Math.floor(val).toString();
    if (val >= 1) return Number.isInteger(val) ? val.toString() : val.toFixed(1).replace(/\.0$/, "");
    return val.toFixed(2).replace(/0$/, "");
  };

  const fullStudentMonths = formatUnitCount(tuitionSharePKR / 5000);
  const nutritiousMeals = formatUnitCount(mealsSharePKR / 300);
  const textbooksAndKits = formatUnitCount(booksSharePKR / 5000);
  const techLabHours = formatUnitCount(techSharePKR / 500);

  const toUSD = (pkr) => Math.max(1, Math.round(pkr / exchangeRate));

  const formatDualMoney = (pkr) => `PKR ${pkr.toLocaleString()} ($${toUSD(pkr).toLocaleString()})`;

  const formatPrimaryMoney = (pkr) => {
    if (currency === "USD") {
      return `$${toUSD(pkr).toLocaleString()} (PKR ${pkr.toLocaleString()})`;
    }
    return `PKR ${pkr.toLocaleString()} ($${toUSD(pkr).toLocaleString()})`;
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
                Every rupee and dollar donated to Selfless Humanitarian Service goes directly into classrooms, meals, and labs in Shahdara, Lahore—with 0% executive overhead.
              </p>
            </div>

            <div className="sim-currency-toggle" role="group" aria-label="Currency selector">
              <button
                type="button"
                className={`currency-btn ${currency === "PKR" ? "active" : ""}`}
                onClick={() => setCurrency("PKR")}
              >
                PKR / USD
              </button>
              <button
                type="button"
                className={`currency-btn ${currency === "USD" ? "active" : ""}`}
                onClick={() => setCurrency("USD")}
              >
                USD / PKR
              </button>
            </div>
          </div>

          <div className="impact-sim-grid">
            {/* Left: Interactive Control Panel */}
            <div className="sim-control-card">
              <div className="sim-amount-display">
                <span className="sim-amount-label">Selected Contribution</span>
                <div className="sim-amount-value" style={{ fontSize: "1.65rem" }}>
                  {formatPrimaryMoney(amountPKR)}
                </div>
              </div>

              <div className="sim-slider-wrap">
                <input
                  type="range"
                  className="sim-range-slider"
                  min={currency === "USD" ? 20 : 5500}
                  max={currency === "USD" ? 500 : 140000}
                  step={currency === "USD" ? 5 : 1000}
                  value={displayAmount}
                  onChange={handleSliderChange}
                  aria-label="Contribution amount slider"
                />
                <div className="sim-slider-bounds">
                  <span>{currency === "USD" ? "$20 (PKR 5,500)" : "PKR 5,500 ($20)"}</span>
                  <span>{currency === "USD" ? "$500 (PKR 140,000)" : "PKR 140,000 ($500)"}</span>
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
                    PKR {preset.toLocaleString()} / ${toUSD(preset)}
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
                    <span>Tuition Fees</span>
                    <strong>35% ({formatDualMoney(tuitionSharePKR)})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill fid-crimson" style={{ width: "35%" }}></div></div>
                </div>

                <div className="fid-bar-item">
                  <div className="fid-bar-label">
                    <span>Mid-Day Meals</span>
                    <strong>35% ({formatDualMoney(mealsSharePKR)})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill fid-amber" style={{ width: "35%" }}></div></div>
                </div>

                <div className="fid-bar-item">
                  <div className="fid-bar-label">
                    <span>Books / Uniform Sets</span>
                    <strong>10% ({formatDualMoney(booksSharePKR)})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill fid-emerald" style={{ width: "10%" }}></div></div>
                </div>

                <div className="fid-bar-item">
                  <div className="fid-bar-label">
                    <span>IT and Tech Labs</span>
                    <strong>20% ({formatDualMoney(techSharePKR)})</strong>
                  </div>
                  <div className="fid-track"><div className="fid-fill" style={{ width: "20%", background: "#4338ca" }}></div></div>
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
                  <div className="metric-title">Student Fee Coverage(s)</div>
                  <p>@ Rs. 5,000 ($18) per student from 35% tuition share ({formatDualMoney(tuitionSharePKR)})</p>
                </div>

                <div className="sim-metric-card">
                  <div className="metric-icon-box amber"><Utensils size={24} /></div>
                  <div className="metric-num">{nutritiousMeals}</div>
                  <div className="metric-title">Nutritious School Meals</div>
                  <p>@ Rs. 300 ($1.07) per meal from 35% mid-day meals share ({formatDualMoney(mealsSharePKR)})</p>
                </div>

                <div className="sim-metric-card">
                  <div className="metric-icon-box emerald"><ShieldCheck size={24} /></div>
                  <div className="metric-num">{textbooksAndKits}</div>
                  <div className="metric-title">Textbook &amp; Uniform Sets</div>
                  <p>@ Rs. 5,000 ($18) per set from 10% books &amp; uniform share ({formatDualMoney(booksSharePKR)})</p>
                </div>

                <div className="sim-metric-card">
                  <div className="metric-icon-box indigo"><Laptop size={24} /></div>
                  <div className="metric-num">{techLabHours} hrs</div>
                  <div className="metric-title">IT &amp; Tech Training Hours</div>
                  <p>@ Rs. 500 ($1.79) per hour from 20% IT &amp; tech labs share ({formatDualMoney(techSharePKR)})</p>
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
                  onClick={() => onDonateClick(`Support our Institutes and Projects (${formatDualMoney(amountPKR)})`)}
                >
                  Sponsor {formatDualMoney(amountPKR)} <ArrowRight size={17} />
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
