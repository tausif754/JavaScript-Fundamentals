/*
Q5. You are building a shipping application. Write a program that takes the type of package ("standard",
"express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
"overnight" would be delivered the next day.
*/

function calculateDeliveryTime(packageType) {
  let deliveryTime;

  switch (packageType.toLowerCase()) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "next day";
      break;
    default:
      deliveryTime = "not available";
      break;
  }
  //print the result
  console.log(
    "Estimated delivery time for " +
      packageType +
      " " +
      "package:" +
      "deliveryTime"
  );
}
//test the function with different package types
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("custom");
