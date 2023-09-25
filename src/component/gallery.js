import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';

function Gallery() {
    const list = [
        {
            link: 'https://i.ytimg.com/vi/gkAjGpdsDHw/sddefault.jpg',
            header: 'Window Grill (Domestic)',
        },
        {
            link: 'https://i.pinimg.com/736x/ba/2f/82/ba2f82e49abc61bd8de7afad6d6826fd.jpg',
            header: 'Fencing (Industrial)',
        },
        {
            link: 'https://filebroker-cdn.lazada.com.ph/kf/Sf3a9d983ce2f428cac69f80441db5fffR.jpg',
            header: 'Pet Cage (Domestic)',
        },
        {
            link: 'https://i.pinimg.com/736x/ba/2f/82/ba2f82e49abc61bd8de7afad6d6826fd.jpg',
            header: 'Fencing (Industrial)',
        },
        {
            link: 'https://i.ytimg.com/vi/gkAjGpdsDHw/sddefault.jpg',
            header: 'Window Grill (Domestic)',
        },
        {
            link: 'https://i.pinimg.com/736x/ba/2f/82/ba2f82e49abc61bd8de7afad6d6826fd.jpg',
            header: 'Fencing (Industrial)',
        },
    ];

    return (
      <section className="text-gray-600 body-font " id='imggal'>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900" style={{ fontFamily: 'Instagram Sans Bold'}}>Gallery</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-bold">Our Commitment to Quality and Customer Satisfaction.</p>
        </div>
        <div className="flex flex-wrap -m-4">
            {list.map((review, index) => (
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <Card key={index}  style={{borderBlockColor:'gray',}}>
                    <Card.Img variant="top" src={review.link} />
                    <Card.Body className=''>
                        <Card.Title  style={{ fontFamily: 'Instagram Sans Bold' }}>{review.header}</Card.Title>
                        <Card.Text style={{ fontFamily: 'Instagram Sans Medium' }}>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                </div>
            ))}
        </div>
        </div>
       </section>
    );
}

export default Gallery;
