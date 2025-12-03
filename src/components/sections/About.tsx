import { motion } from 'framer-motion';
import { GraduationCap, Award, FlaskConical, BookOpen, School } from 'lucide-react';

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

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <GraduationCap className="text-emerald-500" /> Education Journey
                        </h3>

                        <div className="space-y-8 border-l-2 border-emerald-200 dark:border-emerald-900 pl-8 ml-4">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-900" />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">B.Tech in Food Science (Reading)</h4>
                                <p className="text-emerald-600 dark:text-emerald-400 font-medium">Faculty of Technology, University of Sri Jayewardenepura</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2022 - Present</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Specializing in Food Process Technology, Quality Assurance, and New Product Development.
                                    Dean's List for academic excellence.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-900" />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">G.C.E. Advanced Level</h4>
                                <p className="text-emerald-600 dark:text-emerald-400 font-medium">Bio Science Stream</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2019</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Passed with flying colors, qualifying for university entrance in the Technology stream.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-900" />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">G.C.E. Ordinary Level</h4>
                                <p className="text-emerald-600 dark:text-emerald-400 font-medium">Secondary Education</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2016</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Achieved 9 A Distinctions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <FlaskConical className="text-emerald-500" /> Research & Expertise
                        </h3>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 mb-6">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <BookOpen size={18} className="text-emerald-500" /> Ongoing Research
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                "Development of a Plant-Based Yoghurt Alternative using Coconut Milk and Local Fruit Extracts."
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">Fermentation</span>
                                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">Sensory Analysis</span>
                                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">Shelf-life Study</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <School className="text-blue-500 mb-2" size={24} />
                                <h4 className="font-bold text-gray-900 dark:text-white">Biosystems Tech</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Core Foundation</p>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                <Award className="text-purple-500 mb-2" size={24} />
                                <h4 className="font-bold text-gray-900 dark:text-white">Quality Assurance</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Industry Standards</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white overflow-hidden relative"
                >
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">My Vision</h3>
                            <p className="text-emerald-100 mb-4">
                                As a passionate Food Science student, I am dedicated to understanding the science behind what we eat.
                                My academic journey at USJ has equipped me with strong theoretical knowledge, while my industry
                                engagements have provided practical insights into real-world challenges.
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
