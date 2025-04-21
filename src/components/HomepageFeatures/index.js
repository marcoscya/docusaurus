import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Sencillo, como encender las luces",
    Svg: require("@site/static/img/caract_lista/one.svg").default,
    description: (
      <>
        TrapFiles fue creado para ser fácil de instalar y usar. Con unos pocos
        pasos, podrás tener tu sitio web en funcionamiento de manera rápida y
        sin complicaciones.
      </>
    ),
  },
  {
    title: "Mantén la Mirada en lo Que Importa",
    Svg: require("@site/static/img/caract_lista/dos.svg").default,
    description: (
      <>
        TrapFiles te permite concentrarte en lo esencial, mientras nos
        encargamos del resto. Simplemente mueve tus archivos al directorio
        correspondiente y deja que el sistema haga el trabajo por ti.
      </>
    ),
  },
  {
    title: "React: El Motor de la Noche",
    Svg: require("@site/static/img/caract_lista/tres.svg").default,
    description: (
      <>
        Haz que tu sitio cobre vida reutilizando React. Con TrapFiles,
        personaliza y amplía tu sitio reutilizando elementos como el encabezado
        y pie de página, manteniendo tu oficina digital lista para la acción.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
