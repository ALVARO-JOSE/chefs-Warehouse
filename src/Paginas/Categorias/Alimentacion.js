import React, { Component } from 'react';
import n1 from '../../imagenes/noticias/n1.jpg';
import n2 from '../../imagenes/noticias/n2.jpg';
class Alimentacion extends Component {
    render() {
        return (
            <div>

               

                <div class="card" width="500px">
                    <img class="card-img-top" src="" alt="Card image" height="400px" />
                    <div class="card-img-overlay">
                    </div>
                </div>

                <h1 className=" display-3 bg-warning text-white text-center "> NOTICIAS DEL DIA</h1>
                
         
                <div id="seccion1" class="container-fluid bg-success" padding-top="300px" padding-bottom="300px">
                    <h1>Entérate" </h1>
                    <div class="container">
                    <div class="row">
                        



                    <div class="card mb-3">
  <img class="card-img-top" src={n1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Nantli Galletas, una opción rica y saludable elaborada con cereales</h5>
    <p class="card-text">Yoali Ehécatl, egresada de la Facultad de Turismo y Gastronomía de la Universidad Autónoma del Estado de México (UAEMex), tiene como principal objetivo contribuir a la salud de la comunidad, ya que 40 por ciento de la población de la entidad está registrada por la Coespo con problemas de obesidad. Ante ello, creó la empresa “Nantli Galletas”, las cuales son elaboradas con nueve cereales: avena, ajonjolí, semilla de girasol, amaranto y salvado para enriquecer una dieta alta en fibra, además de que su producto es libre de gluten, y no utiliza ingredientes de proteína animal, en tanto que se basa en una dieta vegana. </p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">¿Qué pasa en nuestro cuerpo cuando bebemos café en exceso?</h5>
    <p class="card-text">Aunque se ha demostrado que beber café con moderación puede ser beneficioso para el organismo, el abuso de esta deliciosa bebida puede perjudicar nuestro organismo y rutina diaria</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img class="card-img-bottom" src={n2} alt="Card image cap"/>
</div>





























<div id="accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Beneficios a la salud 
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
      Explicó que el uso de granos y semillas en la elaboración de sus galletas, aportan vitamina E, B, fibra, hierro, potasio, zinc y calcio, lo cual es ideal también para personas diabéticas o personas que no pueden consumir altos contenidos de proteína y azúcares. 
      </div>
    </div>
  </div>
  <div className="card">
    <div cclassName="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Presencia en más de 15 restaurantes 
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
      Desde el primer año de la pandemia en 2020, ha logrado que más de 15 restaurantes dentro del Valle de Toluca sean distribuidores de su producto, por lo que espera que más empresas de alimentos se sumen. Destacó que para darle mayor difusión a las galletas, ha generado páginas en Facebook e Instagram, que se encuentran con el nombre de su producto y a través de las cuales expone sus medios de contacto, así como también los procesos de elaboración, con la finalidad de que las personas conozcan la calidad, al igual que los puntos de venta en los que se pueden adquirir. 
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Técnicas para mejorar la alimentación en los niños
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
      La alimentación es una de las bases de la vida del ser humano. Gracias a ella se tiene la energía para seguir con las actividades diarias y se obtienen los nutrientes necesarios para tener una vida saludable. Por eso es importante que, desde una edad temprana, las personas aprendan a consumir alimentos que ayudarán a su vitalidad y motivación durante el día, además de aportar salud. 
      </div>
    </div>
  </div>
</div>









                        </div>
                    </div>
                </div>    
                
                   </div>
        );
    }
}

export default Alimentacion;

