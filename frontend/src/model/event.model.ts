import { Category } from "./category.enum";
import { Review } from "./review.model";

export interface Event{
    id: string;
    title: string;
    date: Date;
    imageUrl: string;
    description: string;
    price: number;
    information: Array<string>;
    reviews: Array<Review>;
    latitude: number;
    longitude: number;
    categories: Array<Category>;
}