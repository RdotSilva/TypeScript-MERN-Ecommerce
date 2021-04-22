import { Model, Document } from "mongoose";
import { ProductDocument } from "./";

/**
 * Represents an order item
 */
export interface OrderItems {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: ProductDocument;
}

/**
 * Represents a shipping address for a user
 */
export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

/**
 * Represents a payment result for an order
 */
export interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

/**
 * Represents an order
 */
export interface Order {
  user: string;
  orderItems: OrderItems[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult: PaymentResult;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: number;
  isDelivered: boolean;
  deliveredAt: number;
}

export interface OrderDocument extends Order, Document {}

export interface OrderModel extends Model<OrderDocument> {}
