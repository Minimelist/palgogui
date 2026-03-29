import { useState } from "react";

const OPERATORS = [
  { label: "+", symbol: "+", title: "Add" },
  { label: "−", symbol: "-", title: "Subtract" },
  { label: "×", symbol: "*", title: "Multiply" },
  { label: "÷", symbol: "/", title: "Divide" },
];

function calculate(a, b, op) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (op === "+") return numA + numB;
  if (op === "-") return numA - numB;
  if (op === "*") return numA * numB;
  if (op === "/") return numA / numB;
}

function formatResult(val) {
  return parseFloat(val.toFixed(10)).toString();
}

const symbolMap = { "+": "+", "-": "−", "*": "×", "/": "÷" };

export default function Calculator() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [selectedOp, setSelectedOp] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (inputA.trim() === "" || inputB.trim() === "") {
      setError("Please enter both Input A and Input B.");
      return;
    }

    const numA = parseFloat(inputA);
    const numB = parseFloat(inputB);

    if (isNaN(numA) || isNaN(numB)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (selectedOp === "/" && numB === 0) {
      setError("Cannot divide by zero.");
      return;
    }

    const res = calculate(numA, numB, selectedOp);
    const display = formatResult(res);
    const sym = symbolMap[selectedOp];
    const expr = `A (${numA}) ${sym} B (${numB})`;

    setResult({ expr, val: display });
    setHistory((prev) => [{ expr, val: display }, ...prev].slice(0, 20));
  };

  const handleClearHistory = () => setHistory([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleCalculate();
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Calculator</h1>
          <p style={styles.subtitle}>Enter two values and choose an operation</p>
        </div>

        {/* Input Card */}
        <div style={styles.card}>
          {/* Inputs */}
          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Input A</label>
              <input
                type="number"
                value={inputA}
                onChange={(e) => setInputA(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. 10"
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Input B</label>
              <input
                type="number"
                value={inputB}
                onChange={(e) => setInputB(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. 5"
                style={styles.input}
              />
            </div>
          </div>

          {/* Operator Buttons */}
          <div style={styles.opsGrid}>
            {OPERATORS.map(({ label, symbol, title }) => (
              <button
                key={symbol}
                title={title}
                onClick={() => setSelectedOp(symbol)}
                style={{
                  ...styles.opBtn,
                  ...(selectedOp === symbol ? styles.opBtnActive : {}),
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Calculate Button */}
          <button onClick={handleCalculate} style={styles.calcBtn}>
            Calculate
          </button>

          {/* Error */}
          {error && <p style={styles.error}>{error}</p>}

          {/* Result */}
          {result && (
            <div style={styles.resultBox}>
              <p style={styles.resultExpr}>{result.expr} =</p>
              <p style={styles.resultVal}>{result.val}</p>
            </div>
          )}
        </div>

        {/* History */}
        <div style={styles.historyWrap}>
          <div style={styles.historyHeader}>
            <span style={styles.historyLabel}>HISTORY</span>
            {history.length > 0 && (
              <button onClick={handleClearHistory} style={styles.clearBtn}>
                Clear
              </button>
            )}
          </div>
          <div style={styles.historyList}>
            {history.length === 0 ? (
              <p style={styles.emptyMsg}>No calculations yet</p>
            ) : (
              history.map((item, i) => (
                <div key={i} style={styles.historyItem}>
                  <span style={styles.historyExpr}>{item.expr} =</span>
                  <span style={styles.historyVal}>{item.val}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f4",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "420px",
  },
  header: {
    marginBottom: "1.25rem",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1c1917",
    margin: "0 0 4px 0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#78716c",
    margin: 0,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "12px",
  },
  inputRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "16px",
  },
  inputGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#57534e",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    fontSize: "15px",
    border: "1px solid #d6d3d1",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#fafaf9",
    color: "#1c1917",
  },
  opsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "8px",
    marginBottom: "16px",
  },
  opBtn: {
    height: "48px",
    fontSize: "20px",
    fontWeight: "500",
    border: "1px solid #d6d3d1",
    borderRadius: "8px",
    backgroundColor: "#fafaf9",
    color: "#185FA5",
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  opBtnActive: {
    backgroundColor: "#185FA5",
    color: "#ffffff",
    borderColor: "#185FA5",
  },
  calcBtn: {
    width: "100%",
    height: "48px",
    fontSize: "15px",
    fontWeight: "600",
    backgroundColor: "#185FA5",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  error: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#b91c1c",
    textAlign: "center",
  },
  resultBox: {
    marginTop: "16px",
    backgroundColor: "#f0f9ff",
    border: "1px solid #bae6fd",
    borderRadius: "8px",
    padding: "14px 16px",
    textAlign: "center",
  },
  resultExpr: {
    fontSize: "13px",
    color: "#0369a1",
    margin: "0 0 4px 0",
  },
  resultVal: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#0c4a6e",
    margin: 0,
  },
  historyWrap: {
    backgroundColor: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "12px",
    padding: "16px 20px",
  },
  historyHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  historyLabel: {
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    color: "#a8a29e",
  },
  clearBtn: {
    background: "none",
    border: "none",
    fontSize: "12px",
    color: "#a8a29e",
    cursor: "pointer",
    padding: 0,
  },
  historyList: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    maxHeight: "220px",
    overflowY: "auto",
  },
  historyItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    backgroundColor: "#fafaf9",
    borderRadius: "8px",
    fontSize: "14px",
  },
  historyExpr: {
    color: "#78716c",
  },
  historyVal: {
    fontWeight: "600",
    color: "#1c1917",
  },
  emptyMsg: {
    fontSize: "13px",
    color: "#a8a29e",
    textAlign: "center",
    padding: "12px 0",
    margin: 0,
  },
};
