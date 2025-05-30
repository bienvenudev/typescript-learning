const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
import { LoyaltyUser } from "./enums.js";
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        value +
            " Review" +
            makeMultiple(value) +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
export function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
