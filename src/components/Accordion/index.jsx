import React from "react";
import styles from "./.module.scss";
import AccordionItem from "../AccordionItem";
import RestaurantMealCard from "../RestaurantMealCard";

export default function Accordion({ 
  id, 
  currentActive, 
  setCurrentActive, 
  categories,  
}) {
  
  return (
    <>
      <div className={styles.accordion} id={id}>
        {categories.map((c, i) => (
          <AccordionItem
            parentID={id} 
            id={c.name}
            key={c.id} 
            title={c.name}
            setCurrentActive={setCurrentActive}
          >
            {[].map(meal => (
              <RestaurantMealCard
                key={meal.id}
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
                meal={{...meal}}
              />
            ))}
          </AccordionItem>
        ))}
      </div>
    </>
  );
}
