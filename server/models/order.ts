import * as Sequelize from "sequelize";

export interface OrderAttriubutes {
  id?: string;
  makerAsset: string;
  takerAsset: string;
  amount: number;
  filled: number;
  rate: number;
  makerAddress: string;
  transaction: JSON;
  marketId: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderInstance extends Sequelize.Instance<OrderAttriubutes> {}

export default (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
) => {
  const Order = sequelize.define(
    "Order",
    {
      makerAsset: DataTypes.STRING,
      takerAsset: DataTypes.STRING,
      amount: DataTypes.BIGINT,
      filled: DataTypes.BIGINT,
      rate: DataTypes.DOUBLE,
      makerAddress: DataTypes.STRING,
      transaction: DataTypes.JSON,
      marketId: DataTypes.INTEGER
    },
    {}
  );
  Order.associate = _models => {
    // associations can be defined here
  };
  return Order;
};
