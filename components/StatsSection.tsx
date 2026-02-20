interface Stat {
  number: string;
  description: string;
  backgroundColor?: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    number: "40+",
    description: "Successful Projects Launched",
    backgroundColor: "#f2f2f2",
  },
  {
    number: "8+",
    description: "Years of Experience",
    backgroundColor: "#eee",
  },
  {
    number: "10/10",
    description: "Client Recommendation",
    backgroundColor: "#f2f2f2",
  },
];

export default function StatsSection({ stats = defaultStats }: StatsSectionProps) {
  return (
    <section className="w-full pb-16 lg:pb-20 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center h-[182px] px-8"
              style={{ backgroundColor: stat.backgroundColor }}
            >
              <h3
                className="text-[#353638] font-bold mb-3"
                style={{
                  fontSize: "60px",
                  fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                  letterSpacing: "-1.8px",
                  lineHeight: "1",
                }}
              >
                {stat.number}
              </h3>
              <p
                className="text-[#353638] max-w-[321px]"
                style={{
                  fontSize: "20px",
                  letterSpacing: "-0.32px",
                  lineHeight: "2.3",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
