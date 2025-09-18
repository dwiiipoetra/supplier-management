import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  FunnelPlotOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={260} style={{ background: "#fff" }}>
      <div
        style={{
          padding: 22,
          fontWeight: "bold",
          fontSize: 18,
          textAlign: "center",
          borderBottom: "1px solid #f0f0f0",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        ALISA
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={["2-2"]}
        mode="inline"
        style={{ height: "90%", display: "flex", flexDirection: "column" }}
      >
        {/* Dashboard */}
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>

        {/* Supplier Management */}
        <Menu.SubMenu
          key="2"
          icon={<TeamOutlined />}
          title="Supplier Management"
        >
          <Menu.Item key="2-1">Dashboard</Menu.Item>
          <Menu.Item key="2-2">Supplier List</Menu.Item>
          <Menu.Item key="2-3">Review & Approvals</Menu.Item>
          <Menu.Item key="2-4">Configurations</Menu.Item>
        </Menu.SubMenu>

        {/* Funnel Management */}
        <Menu.SubMenu
          key="3"
          icon={<FunnelPlotOutlined />}
          title="Funnel Management"
        >
          <Menu.Item key="3-1">Pipeline</Menu.Item>
        </Menu.SubMenu>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Help & Support (paling bawah) */}
        <Menu.Item
          key="4"
          icon={<QuestionCircleOutlined />}
          style={{ marginTop: "auto" }}
        >
          Help & Support
        </Menu.Item>
        {/* User Profile */}
        <Menu.Item key="5" icon={<UserOutlined />}>
          John Doe
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
