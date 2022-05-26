import React from "react";
import { UncontrolledCarousel } from "reactstrap";

function Quotes() {
  return (
    <div className='d-flex justify-content-center mt-5 shadow'>
      <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: "https://static.onecms.io/wp-content/uploads/sites/34/2018/07/12170256/cat-playing-getty-845697720.jpg",
          },
          {
            key: 2,

            src: "https://dogtime.com/assets/uploads/2017/05/popular-methods-dog-training-1.jpg",
          },
          {
            key: 3,
            src: "https://luckydawgsalongrooming.com/wp-content/uploads/2018/04/cat-grooming-services.jpeg",
          },
          {
            key: 4,
            src: "https://alicante-house.ru/sites/default/files/images/infomaterial/sobaki.jpg",
          },
        ]}
      />
    </div>
  );
}
export default Quotes;
