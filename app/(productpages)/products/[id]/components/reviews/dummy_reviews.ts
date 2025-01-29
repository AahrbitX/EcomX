export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const dummyReviews: Review[] = [
  {
    id: 1,
    userId: 101,
    userName: "John Smith",
    rating: 5,
    comment:
      "Excellent product! Exactly what I was looking for. The quality is outstanding and it arrived quickly.",
    date: "2023-11-15",
  },
  {
    id: 2,
    userId: 102,
    userName: "Sarah Johnson",
    rating: 4,
    comment:
      "Very good product overall. The only minor issue is that the color is slightly different from what's shown in the pictures.",
    date: "2023-11-10",
  },
  {
    id: 3,
    userId: 103,
    userName: "Mike Wilson",
    rating: 5,
    comment:
      "Perfect! Would definitely recommend to others. Great value for money.",
    date: "2023-11-05",
  },
  {
    id: 4,
    userId: 104,
    userName: "Emily Brown",
    rating: 3,
    comment:
      "It's okay. Serves its purpose but nothing exceptional. Shipping took longer than expected.",
    date: "2023-10-30",
  },
];
