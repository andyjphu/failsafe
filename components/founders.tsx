"use client";

import { motion } from "framer-motion";

const people = [
  {
    name: "Andy Phu",
    role: "Co-founder",
    background: "Former AWS",
    school: "University of Minnesota",
  },
  {
    name: "Haneesh",
    role: "Co-founder",
    background: "Former Google",
    school: "UT Dallas",
  },
];

export function Founders() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Two engineers who met through a mutual friend in 2025, travelled the
            world together, and set out to build the safety infrastructure the
            industry will need as AI agents become autonomous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg mx-auto">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-muted-foreground text-lg font-medium">
                {person.name.charAt(0)}
              </div>
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {person.background}
              </p>
              <p className="text-sm text-muted-foreground">{person.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
