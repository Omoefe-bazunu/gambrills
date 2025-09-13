"use client";

import { useState, useEffect, useRef } from "react";

export default function StatsSection() {
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateCount = (
              setter,
              target,
              duration,
              isDecimal = false
            ) => {
              let start = 0;
              const increment = isDecimal
                ? target / (duration / 10)
                : Math.ceil(target / (duration / 10));
              const interval = setInterval(() => {
                start += increment;
                if (isDecimal) {
                  setter(Math.min(target, start).toFixed(1));
                } else {
                  setter(Math.min(target, start));
                }
                if (start >= target) {
                  clearInterval(interval);
                }
              }, 10);
            };

            animateCount(setHappyClients, 2000, 2000);
            animateCount(setProjectsCompleted, 50, 2000);
            animateCount(setAverageRating, 4.9, 2000, true);
            animateCount(setGrowthRate, 1.2, 2000, true);
            observer.disconnect(); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 font-primary bg-orange-500">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold ">{happyClients}+</h3>
            <p className=" mt-2 text-sm">Happy Clients</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold ">
              {projectsCompleted}+
            </h3>
            <p className=" mt-2 text-sm">Projects Completed</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold ">
              {averageRating}+
            </h3>
            <p className=" mt-2 text-sm">Average Rating</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold ">{growthRate}%</h3>
            <p className=" mt-2 text-sm">Growth Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
