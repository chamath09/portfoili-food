import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Food Science Intern",
        company: "Leading Food Manufacturing Company",
        period: "2024 - Present",
        description: "Assisting in quality assurance processes, conducting sensory evaluations, and participating in new product development trials."
    },
    {
        id: 2,
        role: "Undergraduate Researcher",
        company: "University of Sri Jayewardenepura",
        period: "2023 - Present",
        description: "Conducting research on sustainable food packaging solutions and shelf-life extension techniques."
    },
    {
        id: 3,
        role: "Laboratory Assistant (Volunteer)",
        company: "Faculty of Technology Labs",
        period: "2022 - 2023",
        description: "Managed laboratory equipment, prepared chemical solutions, and assisted junior students with practical sessions."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-emerald-200 dark:border-emerald-900"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950" />

                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                            <Briefcase size={20} className="text-emerald-500" />
                                            {exp.role}
                                        </h3>
                                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
