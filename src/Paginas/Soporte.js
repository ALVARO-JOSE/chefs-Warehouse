import React from 'react'
import Imag1 from '../imagenes/Sopor/perfil.JPG';
import imag2 from '../imagenes/Sopor/perfil4.jfif';
import WhatsApp from '../imagenes/iconos/watsap.jpg';
import FACEBOOK from '../imagenes/iconos/face.jpg';

function Soporte() {
    return (
        <div>






            <div className="card-body">
                <br></br>
                <hr></hr>
                <br />
                <div class="container">
                    <div class="row ">

                        <div class="col-sm-8">

                            <img src={Imag1} class="img-thumbnail" alt="Cinque Terre" width="150px" height="150px" margin="auto" display="inline-block" />

                            <div class="card-body ">
                                <p class="card-text">ALVARO JOSE PEREZ  VELAZQUEZ</p>
                                <p>Ingeniero en sistemas computacionales</p>
                                <p>ENCARGADO DE LA EMPRESA</p>

                                <p>  <img src={FACEBOOK}  class="img-rounded" alt="Login" width="60" height="60" />  
                                <a href="https://www.facebook.com/alvarojose.perezvelazquez/" class="button">Alvaro jose</a>

                                
                                 </p>
                                <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60" />  +52 934-260-09-65</p>
                            </div>
                        </div>




                        <div className="col-sm-4">
                            <div class="container-fluid bg-3 text-center">
                                <img src={imag2} class="img-thumbnail " alt="Cinque Terre" width="150px" height="150px" paddig="250px" />

                                <div class="card-body">
                                    <p class="card-text"> PATRICIA GPE MENDOZA LOPEZ </p>
                                    <p>Ingeniero en sistemas computacionales </p>
                                    <p>Analista  </p>
                                    <p> <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60" /> PATRICIA MENDOZA </p>
                                    <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60" /> +52 934-110-99-57</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





                        <div class="container">
                    <div class="row ">

                        <div class="col-sm-4">

                            <img src="" class="img-thumbnail" alt="Cinque Terre" width="150px" height="150px" margin="auto" display="inline-block" />

                            <div class="card-body ">
                                <p class="card-text"> ------------ </p>
                                <p>Ingeniero en sistemas computacionales</p>
                                <p>Diseñador</p>

                                <p>  <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60" />  --------------- </p>
                                <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60" />  -----------------</p>
                            </div>
                        </div>

</div>
</div>
















                       


                </div>

















            </div>
            )
}

            export default Soporte