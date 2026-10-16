import { useState } from "react";
import { Star, Quote, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials, type Testimonial } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={13}
          fill="currentColor"
          className={i === 4 && rating < 5 ? "partial-star" : ""}
        />
      ))}
      <b>{rating === 5 ? "5.0" : rating}</b>
    </span>
  );
}
function Author({ review }: { review: Testimonial }) {
  return (
    <div className="review-author">
      <span className="review-avatar" aria-hidden="true">
        {review.name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")}
      </span>
      <div>
        <strong>{review.name}</strong>
        <span>{review.role}</span>
        <small>{review.location}</small>
      </div>
    </div>
  );
}
function ReviewCard({ review, clone = false }: { review: Testimonial; clone?: boolean }) {
  return (
    <article
      className={`review-card${clone ? " review-card--clone" : ""}`}
      aria-hidden={clone || undefined}
    >
      <div className="review-card-top">
        <Stars rating={review.rating} />
        <Quote size={22} />
      </div>
      <span className="review-service">{review.service}</span>
      <blockquote lang={review.name === "Camille Dubois" ? "fr" : undefined}>
        “{review.quote}”
      </blockquote>
      <Author review={review} />
    </article>
  );
}
export function Testimonials() {
  const [group, setGroup] = useState<"Services" | "Platform">("Services");
  const [rating, setRating] = useState(0);
  const filtered = testimonials.filter(
    (r) => r.group === group && (!rating || r.rating === rating),
  );
  const visibleReviews = filtered.slice(0, 6);
  return (
    <section id="testimonials" className="testimonials section-shell">
      <div className="testimonial-motion" aria-hidden="true">
        <span className="testimonial-orb testimonial-orb-one" />
        <span className="testimonial-orb testimonial-orb-two" />
        <span className="testimonial-streak" />
        <span className="testimonial-ring" />
      </div>
      <div className="section-heading">
        <div>
          <span className="eyebrow">05 / IN THEIR WORDS</span>
          <h2>
            Good work.
            <br />
            Even better words<span className="lime-dot">.</span>
          </h2>
        </div>
        <div className="review-total">
          <Globe2 size={24} />
          <strong>50</strong>
          <span>
            client stories
            <br />
            across the world
          </span>
        </div>
      </div>
      <div className="review-toolbar">
        <div role="group" aria-label="Testimonial category">
          {(["Services", "Platform"] as const).map((g) => (
            <Button
              key={g}
              variant="ghost"
              aria-pressed={group === g}
              className={group === g ? "review-filter-active" : ""}
              onClick={() => {
                setGroup(g);
                setRating(0);
              }}
            >
              {g === "Services" ? "Design & growth" : "Platform & operations"}{" "}
              <span>{g === "Services" ? 20 : 30}</span>
            </Button>
          ))}
        </div>
        <div role="group" aria-label="Testimonial rating">
          {[0, 5, 4.7, 4.55].map((r) => (
            <Button
              key={r}
              variant="ghost"
              aria-pressed={rating === r}
              className={rating === r ? "review-filter-active" : ""}
              onClick={() => setRating(r)}
            >
              {r ? (
                <>
                  <Star size={12} />
                  {r === 5 ? "5.0" : r}
                  <span>
                    ({testimonials.filter((t) => t.group === group && t.rating === r).length})
                  </span>
                </>
              ) : (
                "All ratings"
              )}
            </Button>
          ))}
        </div>
      </div>
      <div
        className="review-rail"
        key={`${group}-${rating}`}
        aria-label="Moving client testimonials"
      >
        <div className="review-track">
          <div className="review-rail-set">
            {visibleReviews.map((r) => (
              <ReviewCard review={r} key={r.name} />
            ))}
          </div>
          <div className="review-rail-set" aria-hidden="true">
            {visibleReviews.map((r) => (
              <ReviewCard review={r} clone key={`clone-${r.name}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
