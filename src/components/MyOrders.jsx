import React from "react";
import { useDataFetching } from "../tools/DataFetching";
import { useAuthUser, useAuthHeader } from "react-auth-kit";

function MyOrders() {
  const auth = useAuthUser();
  const autha = useAuthHeader();

  const userToken = autha().slice(6);
  const { data, loading, error } = useDataFetching("orders", userToken);
  //add (!) before the loading

  let ordersData = {};
  console.log(loading);
  console.log(data);
  if (!loading && data) {
    ordersData = data.data;
    console.log(ordersData);
  }

  return (
    <div>
      {!loading && !ordersData.length && (
        <img
          className="no-orders-img"
          src="https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg?alt=media&token=2e92e1e7-f3bf-4ff9-9a3d-ae8249c25526"
          alt="no orders photo"
        ></img>
      )}
      {ordersData.length > 0 && (
        <div>
          {ordersData.map((product, index) => (
            <div className="my-orders">
              <div key={index} className="orders-images">
                <img src={product.firstImage} />
              </div>
              <div className="orders-title">
                <h2>{product.title}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
