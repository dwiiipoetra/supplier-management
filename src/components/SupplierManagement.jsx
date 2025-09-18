import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";
import StatsCards from "../components/StatsCards";
import SupplierTable from "../components/SupplierTable";

const { Content } = Layout;

const SupplierManagement = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <HeaderBar />
        <Content style={{ margin: "20px" }}>
          <StatsCards />
          <SupplierTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SupplierManagement;
