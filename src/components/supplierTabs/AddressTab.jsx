import { Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddressTab = () => {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address" },
    { title: "Main", dataIndex: "main", render: (val) => (val ? "✔️" : "") },
  ];

  const data = [
    { key: 1, name: "Head Office", address: "Jl. Fatmawati 123", main: true },
    { key: 2, name: "Branch Office", address: "Ciawi, 99", main: false },
  ];

  return (
    <>
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        style={{ marginBottom: 12 }}
      >
        Add Address
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        pagination={false}
        bordered
      />
    </>
  );
};

export default AddressTab;
