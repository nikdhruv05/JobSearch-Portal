import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                
                {/* Animated Grid */}
                <motion.div 
                    className='grid grid-cols-3 gap-4'
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {allJobs.map((job) => (
                        <motion.div 
                            key={job._id} 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                            }}
                        >
                            <Job job={job} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Browse;