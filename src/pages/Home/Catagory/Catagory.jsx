import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Catagory = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData(); 

    return (
        <div>
            <h1>{categoryNews.length? '' : 'News comming soon..'}</h1>
            {
                categoryNews.map(news =><NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;