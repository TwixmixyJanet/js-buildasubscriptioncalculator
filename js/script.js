// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  // console.log(subType);
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  // console.log(subDuration);
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5; // 5 for basic plan
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
