import { Modal, Form, Input, Upload, Tabs, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AddressTab from "./supplierTabs/AddressTab";

const SupplierModal = ({ open, onClose }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log("New Supplier:", values);
      onClose();
      form.resetFields();
    });
  };

  return (
    <Modal
      title="New Supplier"
      open={open}
      onCancel={onClose}
      footer={null}
      width={900}
    >
      <Form form={form} layout="vertical">
        {/* Logo + Info */}
        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
          <Upload
            listType="picture-card"
            maxCount={1}
            beforeUpload={() => false}
          >
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Logo</div>
            </div>
          </Upload>

          <div style={{ flex: 1 }}>
            <Form.Item
              label="Supplier Name"
              name="supplierName"
              rules={[{ required: true, message: "Enter supplier name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Nickname" name="nickname">
              <Input />
            </Form.Item>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          defaultActiveKey="1"
          items={[
            { key: "1", label: "Address", children: <AddressTab /> },
            { key: "2", label: "Contacts", children: <AddressTab /> },
            { key: "3", label: "Groups", children: <AddressTab /> },
            { key: "4", label: "Material List", children: <AddressTab /> },
            { key: "5", label: "Others", children: <AddressTab /> },
          ]}
        />

        {/* Footer */}
        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button style={{ marginRight: 8 }} onClick={onClose}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default SupplierModal;
