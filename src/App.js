import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import quoteImage from "./img/KeepGoing.jpg";





function App() {
  const firstName = "Ons";
  return (
    <section style={{ backgroundColor: "#eee" }}>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card text-black">
            <Image></Image>
          
            <div className="card-body">
              <div className="text-center">
               <Name/>
               <Description/>
               <Price/>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-3">
              <p>Hello, {firstName ? firstName : "there"}!</p>
              {firstName && <img src={quoteImage} alt="quote" />}
            </div>
  </section>
  );
}


export default App;
