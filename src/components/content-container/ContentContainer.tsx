import React from "react";
import "./ContentContainer.scss";
import type { IAddressItem } from "../../redux/api/types";
import AddressItem from "../address-item/AddressItem";

type TContentContainerProps = {
  title: string;
  data?: IAddressItem[];
  error: any
};
export default function ContentContainer({
  title,
  data,
  error
}: TContentContainerProps) {
  return (
    <div className="content-container">
      <h2>{title}</h2>
      {!!error && (
        <p className="no-data">
          Ошибка обработки запроса. Пожалуйста, попробуйте позже.
        </p>
      )}
      {!!data && !!data?.length ? (
        data.map((item) => (
          <AddressItem key={item.value} info={item.unrestricted_value} />
        ))
      ) : (
        <p className="no-data">
          По данному запросу ничего не нашлось. Попробуете другой поиск?
        </p>
      )}
    </div>
  );
}
