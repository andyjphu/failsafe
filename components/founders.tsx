"use client";

import { motion } from "framer-motion";

const people = [
  {
    name: "Andy Phu",
    role: "Co-founder",
    background: "Former AWS",
    school: "University of Minnesota",
    initials: "AP",
  },
  {
    name: "Haneesh",
    role: "Co-founder",
    background: "Former Google",
    school: "UT Dallas",
    initials: "H",
  },
];

export function Founders() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-center text-lg leading-relaxed mb-16">
            Two engineers who met through a mutual friend in 2025, travelled the
            world together, and saw the same thing coming: multi-agent systems
            are going to production, and they need a management layer that
            doesn&apos;t exist yet. So we&apos;re building it.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12 max-w-sm mx-auto">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-muted to-muted/40 mx-auto mb-4 flex items-center justify-center text-muted-foreground/70 text-sm font-medium">
                {person.initials}
              </div>
              <h3 className="font-semibold text-sm">{person.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {person.background}
              </p>
              <p className="text-xs text-muted-foreground">{person.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
