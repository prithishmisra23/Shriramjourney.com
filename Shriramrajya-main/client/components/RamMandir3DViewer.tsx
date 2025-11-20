export default function RamMandir3DViewer() {
  const ramMandirImage =
    "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800";

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        backgroundColor: "#0b0f14",
        position: "relative",
      }}
    >
      <img
        src={ramMandirImage}
        alt="Ram Mandir in Ayodhya"
        style={{
          width: "100%",
          height: "520px",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(to top, rgba(11, 15, 20, 0.9), transparent)",
          padding: "24px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 8px 0", fontSize: "14px", opacity: 0.8 }}>
          Recently Inaugurated - January 2024
        </p>
        <p style={{ margin: 0, fontSize: "12px", opacity: 0.6 }}>
          Divine Abode of Shri Ram
        </p>
      </div>
    </div>
  );
}
