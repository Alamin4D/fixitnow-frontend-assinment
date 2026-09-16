
"use client";

import { BadgeCheck, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "FixItNow made finding a reliable technician incredibly easy. The booking process was smooth, and the technician arrived exactly on time.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Customer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "I needed an urgent AC repair and found a great technician within minutes. The service was professional, fast, and reasonably priced.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "The technician selection feature is really helpful. I could compare ratings and choose someone I trusted. Highly recommended!",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Customer",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 4,
    review:
      "Great experience from start to finish. Booking a plumbing service was simple, and the technician did an excellent job.",
  },
  {
    id: 5,
    name: "Emily Carter",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    review:
      "The entire experience was excellent. I found a professional technician quickly and the service quality exceeded my expectations.",
  },
  {
    id: 6,
    name: "Daniel Smith",
    role: "Customer",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "Very easy to book and track my service. FixItNow saved me a lot of time and helped me find a technician I could trust.",
  },
  {
    id: 7,
    name: "Olivia Martin",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    review:
      "I was impressed by how quickly I could find the right technician. Everything felt simple, transparent, and trustworthy.",
  },
  {
    id: 8,
    name: "David Miller",
    role: "Customer",
    image: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    review:
      "Excellent platform for home services. The technician was skilled, friendly, and completed the job perfectly.",
  },
];

const Testimonials = () => {
  // Duplicate cards for seamless infinite scrolling
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      className="relative overflow-hidden py-20 transition-colors duration-300 dark:bg-dark sm:py-24">
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-80 wrounded-full
          bg-primary/5
          blur-3xl
          dark:bg-primary/10"
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-10
          h-80 w-80
          rounded-full
          bg-primary/5
          blur-3xl
          dark:bg-primary/10
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div
            className="
              mb-4 inline-flex items-center gap-2
              rounded-full
              border border-primary/10
              bg-primary/5
              px-4 py-2
              text-sm font-semibold text-primary
              dark:border-primary/20
              dark:bg-primary/10
            "
          >
            <Star size={15} className="fill-primary" />
            Customer Reviews
          </div>

          {/* Heading */}


          {/* Description */}
          <p
            className="
              mt-4 text-base leading-7
              text-slate-600
              transition-colors duration-300
              dark:text-slate-400
              sm:text-lg
            "
          >
            Thousands of homeowners trust FixItNow for reliable,
            professional, and hassle-free home services.
          </p>
        </div>

        {/* Marquee */}
        <div className="group relative w-full overflow-hidden">
          {/* Left Fade */}
          <div
            className="
              pointer-events-none absolute left-0 top-0
              z-10 h-full w-20
              sm:w-32
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none absolute right-0 top-0
              z-10 h-full w-20
              sm:w-32
            "
          />

          {/* Scrolling Track */}
          <div className="testimonial-marquee flex w-max">
            {marqueeItems.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="
                  w-[85vw]
                  shrink-0
                  px-2
                  sm:w-[48vw]
                  lg:w-[25vw]
                  xl:w-[24vw]
                "
              >
                {/* Premium Card */}
                <article
                  className="
    group/card
    relative
    flex
    min-h-[365px]
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-dark
    
    p-6
    shadow-[0_8px_30px_rgb(15,23,42,0.06)]
    transition-all
    duration-300

    hover:-translate-y-2
    hover:border-primary/20
    hover:shadow-[0_20px_45px_rgb(15,23,42,0.12)]

    dark:hover:border-primary/30
    dark:hover:shadow-[0_20px_45px_rgb(0,0,0,0.45)]

    sm:p-7
  "
                >
                  {/* Quote Icon */}
                  <div
                    className="
      pointer-events-none
      absolute
      right-5
      top-4
      text-primary/[0.07]
      transition-transform
      duration-500
      group-hover/card:scale-110

      dark:text-primary/[0.12]
    "
                  >
                    <Quote
                      size={72}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Rating + Verified */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className={
                            index < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-200 dark:text-slate-700"
                          }
                        />
                      ))}
                    </div>

                    {/* Verified */}
                    <span
                      className="
        flex
        items-center
        gap-1
        rounded-full
        bg-emerald-50
        px-2.5
        py-1
        text-[11px]
        font-semibold
        text-emerald-600

        dark:bg-emerald-500/10
        dark:text-emerald-400
      "
                    >
                      <BadgeCheck size={13} />
                      Verified
                    </span>
                  </div>

                  {/* Review */}
                  <blockquote
                    className="
      relative
      z-10
      mt-7
      flex-1
      text-sm
      leading-7
      text-slate-600
      transition-colors
      duration-300

      dark:text-slate-300
    "
                  >
                    “{testimonial.review}”
                  </blockquote>

                  {/* Divider */}
                  <div
                    className="
      my-6
      h-px
      bg-slate-100

      dark:bg-slate-800
    "
                  />

                  {/* Customer */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="relative shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        className="
          h-12
          w-12
          rounded-full
          object-cover
          ring-4
          ring-primary/10

          dark:ring-primary/20
        "
                      />

                      {/* Verified Avatar Badge */}
                      <span
                        className="absolute -bottom-1-right-1flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                        <BadgeCheck size={12} />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="mt-0.5text-xs text-slate-500 dark:text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500group-hover/card:w-full" />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
