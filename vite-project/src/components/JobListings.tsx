import { JobListing, JobProps } from './JobListing.tsx';
import { useState, useEffect } from 'react';

function JobListings({ isHome = true }){
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = isHome
      ? '/api/jobs'
      : '/api/jobs?_limit=3'
    const fetchJobs = async () => {
      try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setJobs(data);
      } catch (error){
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  },[])

    return (
      <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {isHome ? 'Browse All Jobs' : 'Recent Jobs'}
          </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              { loading ? (<h2>loading...</h2>) : 
              <>
                {jobs.map((jobData) => (
                  <JobListing job={jobData} />
                ))}
              </>
              }
            </div>  
        </div>
      </section>
    )
}

export default JobListings;