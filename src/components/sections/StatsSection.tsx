export default function StatsSection() {
  const stats = [
    {
      value: '5+',
      label: 'Years of experience',
      description: 'Professional web development expertise'
    },
    {
      value: '100+',
      label: 'Total Projects',
      description: 'Successfully completed projects'
    },
    {
      value: '124+',
      label: 'Clients Worldwide',
      description: 'Satisfied clients across the globe'
    },
    {
      value: '84%',
      label: 'Clients Satisfaction',
      description: 'High client satisfaction rate'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Works and Feedback</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio and see what my clients have to say about my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xl font-medium text-gray-800 mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
