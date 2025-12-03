import { motion } from 'framer-motion';
import { GraduationCap, Award, FlaskConical } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <GraduationCap size={40} />,
                            title: "Education",
                            desc: "Final Year Undergraduate at Faculty of Technology, University of Sri Jayewardenepura.",
                            color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        },
                        {
                            icon: <FlaskConical size={40} />,
                            title: "Expertise",
                            desc: "Specializing in Food Science & Technology, Quality Assurance, and R&D.",
                            color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                        },
                        {
                            icon: <Award size={40} />,
                            title: "Experience",
                            desc: "Hands-on industry experience in food processing and quality control standards.",
                            color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white overflow-hidden relative"
                >
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                            <p className="text-emerald-100 mb-4">
                                As a passionate Food Science student, I am dedicated to understanding the science behind what we eat.
                                My academic journey at USJ has equipped me with strong theoretical knowledge, while my industry
                                engagements have provided practical insights into real-world challenges.
                            </p>
                            <p className="text-emerald-100">
                                I am particularly interested in sustainable food production, nutritional analysis, and developing
                                innovative food products that cater to modern dietary needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-emerald-400">3+</span>
                                <span className="text-sm text-emerald-100">Years Education</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-emerald-400">5+</span>
                                <span className="text-sm text-emerald-100">Projects</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-emerald-400">100%</span>
                                <span className="text-sm text-emerald-100">Dedication</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-emerald-400">2026</span>
                                <span className="text-sm text-emerald-100">Vision</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
