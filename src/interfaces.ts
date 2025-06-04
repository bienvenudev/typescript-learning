import { LoyaltyUser } from "./enums.js";

export interface Review  {
 name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string; 
}

export interface Property {
    src: string;
    title: string;
    reviews: Review[];
}