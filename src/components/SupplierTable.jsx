import { useState } from "react";
import { Table, Tag, Input, Button, Space } from "antd";
import {
  ExportOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import SupplierModal from "./SupplierModal";

const supplierData = [
  {
    key: "1",
    name: "PT Setroom Indonesia [Setroom]",
    id: "61000012",
    address: "Jakarta, Indonesia",
    contact: "Albert Einstein",
    status: "Active",
  },
  {
    key: "2",
    name: "PT Suka Suka [Sukasuka]",
    id: "41000013",
    address: "Bandung, Indonesia",
    contact: "James Lee",
    status: "In Progress",
  },
  {
    key: "3",
    name: "PT Angin Ribut [Angin]",
    id: "41000014",
    address: "Denpasar, Indonesia",
    contact: "Maria Chen",
    status: "Blocked",
  },
];

const SupplierTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { title: "#", dataIndex: "key", key: "key", width: 60 },
    {
      title: "Name",
      render: (_, record) => (
        <div>
          <div>{record.name}</div>
          <a style={{ color: "#1677ff" }}>{record.id}</a>
        </div>
      ),
    },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    {
      title: "Status",
      render: (_, record) => {
        let color =
          record.status === "Active"
            ? "green"
            : record.status === "Blocked"
            ? "red"
            : "orange";
        return <Tag color={color}>{record.status}</Tag>;
      },
    },
  ];

  return (
    <>
      {/* Header */}
      <div style={{ margin: "20px 0", display: "flex", gap: 12 }}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search Supplier"
          style={{ width: 250 }}
        />
        <Space style={{ marginLeft: "auto" }}>
          <Button icon={<ExportOutlined />}>Export</Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          >
            New Supplier
          </Button>
        </Space>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={supplierData}
        pagination={false}
        bordered
      />

      {/* Modal */}
      <SupplierModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SupplierTable;
