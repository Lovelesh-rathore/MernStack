import React from "react";

const reviews = [
  {
    name: "Priya S.",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=Priya",
    text: "ChatBuzz makes staying in touch so easy!"
  },
  {
    name: "Alex T.",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=Alex",
    text: "Love the group chat feature!"
  },
  {
    name: "Sam R.",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=Sam",
    text: "Secure and fast messaging. Highly recommend!"
  }
];

const ReviewsSection = () => (
  <section className="py-16 px-4 bg-base-200">
    <h2 className="text-3xl font-bold text-center mb-10 text-primary">What Our Users Say</h2>
    <div className="carousel w-full max-w-3xl mx-auto">
      {reviews.map((review, idx) => (
        <div key={idx} className="carousel-item w-full flex flex-col items-center justify-center gap-4 p-8">
          <img src={review.avatar} alt={review.name + ' avatar'} className="w-16 h-16 rounded-full shadow-lg" />
          <p className="text-lg italic text-center">“{review.text}”</p>
          <span className="font-semibold text-primary">{review.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSection;
