import { Layout } from "antd";

const { Header } = Layout;

const HeaderBar = () => {
  return (
    <Header style={{ background: "#fff", padding: "0 20px" }}>
      <h2>Supplier List</h2>
    </Header>
  );
};

export default HeaderBar;
