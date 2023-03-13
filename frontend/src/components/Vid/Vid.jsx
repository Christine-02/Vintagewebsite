import './Vid.css';

// function Vid() {
//   return (
//     <section className="par">
//       <video
//         className="vid"
//         src="https://videos.ctfassets.net/bdvz0u6oqffk/54rQSqwZvom9QIgOyXdgl0/623e6c0d17db25d687220a304fa9ce33/_DESKTOP_GRAILED-BRAND-REEL-1280x720px.mp4"
//         type="video/mp4"
//         muted
//         autoPlay={'autoplay'}
//         loop
//         playsInline
//       ></video>
//       {/* <div className="p">
//         <h1>THE PLATFORM FOR PERSONAL STYLE</h1>
//         <p>
//           <button onClick={window.scrollTo(500, 0)}>Shop Now</button>
//           Buy & discover authenticated pieces from the world's top brands.
//         </p>
//       </div> */}
//     </section>
//   );
// }

import { Row, Col, Button, Container } from 'react-bootstrap';

const Vid = () => {
  return (
    <Row>
      <Col
        className="mp"
        xs={{ order: 2, span: 12 }}
        sm={{ order: 2, span: 12 }}
        md={{ order: 1, span: 5 }}
        lg={{ order: 1, span: 5 }}
        xl={{ order: 1, span: 5 }}
      >
        <div className="d-flex flex-column align-items-start justify-content-center my-5 mx-5 bord">
          <br />
          <p className="my-3">CURATED COLLECTIONS</p>
          <h4 className="my-3">
            Buy & discover authenticated pieces from the world's top brands.
          </h4>
          <br />
          <Button variant="outline-dark">SHOP NOW</Button>
        </div>
      </Col>

      <Col
        xs={{ order: 1, span: 12 }}
        sm={{ order: 1, span: 12 }}
        md={{ order: 2, span: 7 }}
        lg={{ order: 2, span: 7 }}
        xl={{ order: 2, span: 7 }}
        className="np"
      >
        {' '}
        <video
          className="vid"
          src="https://videos.ctfassets.net/bdvz0u6oqffk/54rQSqwZvom9QIgOyXdgl0/623e6c0d17db25d687220a304fa9ce33/_DESKTOP_GRAILED-BRAND-REEL-1280x720px.mp4"
          type="video/mp4"
          muted
          autoPlay={'autoplay'}
          loop
          playsInline
        ></video>
      </Col>
    </Row>
  );
};

export default Vid;
