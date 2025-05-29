const reviewTotalDisplay = document.querySelector("#reviews") as HTMLDivElement;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLDivElement;
const userNameDisplay = document.querySelector("#user") as HTMLDivElement;

import { LoyaltyUser } from "./enums.js";

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}
