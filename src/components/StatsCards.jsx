import { Card, Statistic, Row, Col } from "antd";

const StatsCards = () => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <Statistic title="Total Supplier" value={1869} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="New Supplier" value={27} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Avg Cost per Supplier" value={320.3} prefix="Rp" />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Blocked Supplier" value={31} />
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;
