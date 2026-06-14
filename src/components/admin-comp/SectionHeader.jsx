import styles from "./styles";

function SectionHeader({ title, action }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: 0 }}>{title}</h2>
      {action && (
        <button style={styles.actionBtn}>{action}</button>
      )}
    </div>
  );
}
export default SectionHeader;