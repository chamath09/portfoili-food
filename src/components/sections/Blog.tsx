import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, X, Calendar, Tag } from 'lucide-react';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';

const initialPosts = [
    {
        id: 1,
        title: "The Future of Plant-Based Proteins",
        excerpt: "Exploring new extraction methods and texture improvement techniques for meat alternatives.",
        content: "Plant-based proteins are revolutionizing the food industry. As we move towards 2026, the focus is shifting from simple soy-based products to complex protein structures derived from peas, mung beans, and even algae. My research focuses on using high-pressure processing to improve the texture of these proteins, making them indistinguishable from animal meat. We are also exploring fermentation techniques to enhance the flavor profile, reducing the need for artificial additives.",
        date: "Dec 01, 2024",
        category: "Research",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Food Safety in the Modern Era",
        excerpt: "How IoT and AI are revolutionizing quality control in food manufacturing lines.",
        content: "Food safety is paramount. With the integration of IoT sensors and AI-driven analytics, we can now monitor production lines in real-time. These systems can detect temperature fluctuations, moisture levels, and even microbial contamination before it becomes a hazard. In my recent industry experience, I worked with a system that reduced quality control incidents by 40% using predictive maintenance and automated hazard detection.",
        date: "Nov 28, 2024",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Sustainable Packaging Solutions",
        excerpt: "Biodegradable alternatives to single-use plastics in the food industry.",
        content: "The environmental impact of food packaging is a critical issue. My review of current biodegradable materials suggests that seaweed-based polymers and mushroom mycelium offer the most promising alternatives to single-use plastics. These materials are not only compostable but also possess excellent barrier properties against oxygen and moisture, extending the shelf life of fresh produce.",
        date: "Nov 15, 2024",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800"
    }
];

export function Blog() {
    const [posts] = useState(initialPosts);
    const [selectedPost, setSelectedPost] = useState<typeof initialPosts[0] | null>(null);

    const handlePublish = () => {
        alert("Publish feature would open a CMS or form here. (Demo Mode)");
    };

    return (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
                        <div className="w-20 h-1 bg-emerald-500 rounded-full" />
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={handlePublish}
                        className="hidden md:flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
                    >
                        <Plus size={20} />
                        Publish Article
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedPost(post)}
                            className="group relative rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-800"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                        <Tag size={12} /> {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 mb-3 font-medium">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold group-hover:gap-2 transition-all">
                                    Read Article <ArrowRight size={18} className="ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button
                        onClick={handlePublish}
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium"
                    >
                        <Plus size={20} />
                        Publish Article
                    </button>
                </div>
            </div>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30 text-white transition-colors z-20 backdrop-blur-sm"
                            >
                                <X size={24} />
                            </button>

                            <ScrollArea className="flex-1 h-full">
                                <div className="h-72 sm:h-96 relative shrink-0">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex items-end p-8 sm:p-12">
                                        <div className="max-w-3xl">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
                                                {selectedPost.category}
                                            </span>
                                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{selectedPost.title}</h2>
                                            <div className="flex items-center gap-4 text-gray-200">
                                                <span className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</span>
                                                <span>•</span>
                                                <span>5 min read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 sm:p-12 max-w-3xl mx-auto">
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-8 border-l-4 border-emerald-500 pl-6">
                                            {selectedPost.excerpt}
                                        </p>
                                        <div className="text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
                                            <p>{selectedPost.content}</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Findings</h3>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Sustainable sourcing of raw materials</li>
                                                <li>Optimization of extraction processes</li>
                                                <li>Consumer acceptance studies</li>
                                            </ul>
                                            <p>
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
