import { useQuery } from 'react-query';
import axios from 'axios';
import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
// import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import ImageAndParagraphSkeleton from '../components/Common/ImageAndParagraphSkeleton';
import PortfolioCard from '../components/Portfolio/PortfolioCard';
const Home = () => {
  const { isLoading, data } = useQuery('portfolio', () =>
    axios
      .get('api/portfolio')
      .then(({ data }) => data)
      .catch((error) => console.error('Error fetching testimonials:', error))
  );
  return (
    <div className='Home-Page -z-10'>
      <Banner />
      <MyExpertise />
      <Recommendations />
      {/* <ClientReviews /> */}
      <div className='px-2 md:px-8 pb-4 text-lg font-bold text-Snow'>My Projects</div>
      <div className='grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6'>
        {isLoading
          ? [1, 2, 3, 4].map((_, index) => <ImageAndParagraphSkeleton key={index} className={'w-full object-cover'} />)
          : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
