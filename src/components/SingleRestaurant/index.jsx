import React, { useState } from 'react'
import Accordion from '../Accordion';
import ItemDetailsRow from '../ItemDetailsRow';
import ResturantDetailsHeader from '../RestaurantDetailsHeader'
import RestaurantInfoList from '../RestaurantInfoList';
import RestaurantCategoriesList from '../RestaurantCategoriesList';

export default function SingleRestaurant({
  name,
  image,
  description,
  rating,
  deliveryTime,
  priceRange,
  scheduleData,
  restaurantInfo,
  categories,
}) {

  const [currentActive, setCurrentActive] = useState('');
  const [content, setContent] = useState('details');  

  return (
    <>
      <ResturantDetailsHeader
        name={name}
        image={image}
        description={description}
        rating={rating}
        deliveryTime={deliveryTime}
        priceRange={priceRange}
      />
      <div className="row">
        <div className="d-xl-none">
          <ItemDetailsRow content={content} setContent={setContent} />
        </div>
        {content === 'details' ? (
              <>
                <div className="order-2 order-xl-1 col-12 col-xl-8 pe-lg-4">
                  <div className="pt-4 pt-lg-0">
                    <div div className="d-none d-xl-block">
                      <ItemDetailsRow content={content} setContent={setContent} />
                    </div>
                    <Accordion
                      currentActive={currentActive}
                      setCurrentActive={setCurrentActive}
                      categories={categories}
                      id={"UNIQUE__ID"}
                    />
                  </div>
                </div>
                <div className="order-1 order-xl-2 col-12 col-xl-4 ps-lg-4">
                  <div className="pt-1 pb-4 pb-xl-0 pt-xl-5">
                    <RestaurantCategoriesList 
                      setCurrentActive={setCurrentActive} 
                      currentActive={currentActive}
                      categories={categories}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="d-none d-xl-block">
                  <ItemDetailsRow content={content} setContent={setContent} />
                </div>
                <RestaurantInfoList 
                  restaurantInfo={restaurantInfo}
                  scheduleData={JSON.parse(scheduleData)}
                />
              </>
            )}
      </div>
    </>
  )
}
