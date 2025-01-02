import Hero from '../components/Hero.tsx';
import HomeCards from '../components/HomeCards.tsx';
import JobListings from '../components/JobListings.tsx';
import ViewAllJobs from '../components/ViewAllJobs.tsx';

function HomePage() {
    return (
        <div>
            <Hero/>
            <HomeCards/>
            <JobListings/>
            <ViewAllJobs/>
        </div>
    )
}

export default HomePage;