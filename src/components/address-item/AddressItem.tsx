import React from "react";
import "./AddressItem.scss";

type TAddressItemProps = {
  info: string;
};
export default function AddressItem({ info }: TAddressItemProps) {
  return <div className="address-item">{info}</div>;
}
