import React from "react";
import { StepInfo } from "../constants";

function Step4({ values, billingTypes }) {
  const pickedTitle = values.picked;
  const allServices = StepInfo[0].step3[billingTypes];
  const filteredServices = [];
  const matchedItem = StepInfo[0].step2[billingTypes].find(
    (item) => item.title === pickedTitle
  );
  const price = matchedItem ? matchedItem.price : "";


 

  allServices.forEach((service, index) => {
    const serviceStatusKey = `service-${index}`;
    if (values[serviceStatusKey]) {
      filteredServices.push(service);
    }
  });
const totalAmount = filteredServices.reduce((total, service) => total + service.priceAmount, 0);


const allTotalAmount = (matchedItem.priceAmount + totalAmount)

  return (
    <div className="step4-form">
      <h2 className="form-title">Finishing up</h2>
      <h5 className="form-subtitle">
        Double-check everything looks OK before confirming.
      </h5>
      <div className="control-panel">
        <div className="control-item">
          <div className="control-item-name">
            <h4 className="picked">
              {values.picked}({billingTypes})
            </h4>
            <button className="change">Change</button>
          </div>
          <div className="control-price-picked">{price}</div>
        </div>

        {filteredServices.map((service) => (
          <div key={service.id} className="control-item">
            <div className="control-item-name">
              <h4>{service.title}</h4>
            </div>
            <div className="control-price">{service.price}</div>
          </div>
        ))}
      </div>

      <div className="total-amount">
        <h4 className="total">Total ({billingTypes})</h4>
        <h4 className="total-price">{`+${allTotalAmount}/${billingTypes === 'monthly' ? 'mo' : 'yr'}`}</h4>
      </div>
    </div>
  );
}

export default Step4;
