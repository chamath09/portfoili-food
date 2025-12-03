import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const initialPosts = [
    {
        id: 1,
        title: "The Future of Plant-Based Proteins",
        excerpt: "Exploring new extraction methods and texture improvement techniques for meat alternatives.",
        date: "Dec 01, 2024",
        category: "Research",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        title: "Food Safety in the Modern Era",
        excerpt: "How IoT and AI are revolutionizing quality control in food manufacturing lines.",
        date: "Nov 28, 2024",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        title: "Sustainable Packaging Solutions",
        excerpt: "Biodegradable alternatives to single-use plastics in the food industry.",
        date: "Nov 15, 2024",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=1000"
    }
];

export function Blog() {
    const [posts] = useState(initialPosts);

    const handlePublish = () => {
        alert("Publish feature would open a CMS or form here. (Demo Mode)");
    };

    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-900">
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
                        className="hidden md:flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity"
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
                            className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:gap-3 transition-all">
                                    Read More <ArrowRight size={16} />
                                </a>
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
        </section>
    );
}
